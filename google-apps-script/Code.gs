/**
 * =========================================================================
 * KAVRI EXIM - GOOGLE SHEETS & EMAIL INTEGRATION BACKEND (GOOGLE APPS SCRIPT)
 * =========================================================================
 * 
 * Target Email: trade@kavriexim.com
 * Corporate Display: connect@kavriexim.com
 * 
 * Instructions:
 * 1. Open your Google Sheet (e.g. named "Kavri Exim - B2B Export Leads CRM")
 * 2. Click "Extensions" > "Apps Script"
 * 3. Delete any default code and paste this entire file into Code.gs
 * 4. Click "Deploy" > "New deployment"
 * 5. Select type: "Web app"
 *    - Description: "Kavri Exim Inquiry Endpoint"
 *    - Execute as: "Me" (trade@kavriexim.com or workspace admin)
 *    - Who has access: "Anyone"
 * 6. Click "Deploy", authorize permissions, and copy the Web App URL (ends with /exec)
 * 7. Paste that URL into your site's src/config/formsConfig.js or .env file!
 */

// Target inbox where all export leads and RFQs must arrive
var RECIPIENT_EMAIL = "trade@kavriexim.com";
var SHEET_TAB_NAME = "Inquiries & RFQs";

/**
 * Handle incoming POST requests from the website
 */
function doPost(e) {
  try {
    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      data = {};
    }

    // Sanitize and normalize fields
    var lead = {
      referenceId: data.referenceId || (
        (data.inquiryType && data.inquiryType.indexOf("Proforma") !== -1 ? "KE-PR-" : "KE-RFQ-") +
        new Date().getFullYear() + "-" +
        Math.floor(1000 + Math.random() * 9000)
      ),
      timestamp: data.timestamp ? new Date(data.timestamp) : new Date(),
      inquiryType: data.inquiryType || "Export RFQ",
      fullName: data.fullName || data.name || "N/A",
      companyName: data.companyName || data.company || "N/A",
      email: data.email || "",
      phone: data.phone || "N/A",
      destinationCountry: data.destinationCountry || data.country || "N/A",
      portOfDischarge: data.portOfDischarge || data.port || "N/A",
      incoterm: data.incoterm || "CIF",
      product: data.product || "Commercial Export Product",
      gradeSpec: data.gradeSpec || data.specs || "Standard Commercial Grade",
      quantity: data.quantity || "1 FCL",
      packaging: data.packaging || "Standard Export Packaging",
      message: data.message || data.specs || "No additional notes provided.",
      sourceUrl: data.sourceUrl || "kavriexim.com",
      status: "New - Action Required (12h)"
    };

    // 1. Record into Google Sheet CRM
    recordToGoogleSheet(lead);

    // 2. Dispatch Elegant HTML Email to trade@kavriexim.com
    sendTradeDeskNotificationEmail(lead);

    // 3. Return JSON response
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", referenceId: lead.referenceId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error processing inquiry: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests for health-check / verification
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "online",
      service: "Kavri Exim Trade Desk Integration",
      destination: RECIPIENT_EMAIL,
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Appends the inquiry into the Google Sheet CRM
 */
function recordToGoogleSheet(lead) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_TAB_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_TAB_NAME);
  }

  // Create header row if sheet is new or empty
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp (IST)",
      "Reference ID",
      "Inquiry Type",
      "Buyer Name",
      "Company / Entity",
      "Corporate Email",
      "Phone / WhatsApp",
      "Destination Country",
      "Port of Discharge",
      "Incoterm",
      "Commodity / Product",
      "Grade / Specification",
      "Quantity / Volume",
      "Packaging",
      "Buyer Notes",
      "Status",
      "Source URL"
    ];

    sheet.appendRow(headers);

    // Style header row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0D522F"); // Kavri Exim Forest Green
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Segoe UI");
    headerRange.setFontSize(10);
    sheet.setFrozenRows(1);
  }

  // Ensure sequential Reference ID starting from 0001 (e.g. KE-RFQ-2026-0001 or KE-PR-2026-0001)
  lead.referenceId = resolveSequentialReferenceId(sheet, lead.referenceId, lead.inquiryType);

  // Format timestamp for Indian Standard Time
  var formattedDate = Utilities.formatDate(lead.timestamp, "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss 'IST'");

  // Append lead row
  var row = [
    formattedDate,
    lead.referenceId,
    lead.inquiryType,
    lead.fullName,
    lead.companyName,
    lead.email,
    lead.phone,
    lead.destinationCountry,
    lead.portOfDischarge,
    lead.incoterm,
    lead.product,
    lead.gradeSpec,
    lead.quantity,
    lead.packaging,
    lead.message,
    lead.status,
    lead.sourceUrl
  ];

  sheet.appendRow(row);

  // Auto-resize columns on initial rows for clean readability
  if (sheet.getLastRow() <= 20) {
    for (var i = 1; i <= row.length; i++) {
      sheet.autoResizeColumn(i);
    }
  }
}

/**
 * Resolves sequential Reference ID starting from 0001
 * Inspects existing rows in the sheet so serial numbers strictly start at 0001
 * (e.g., KE-RFQ-2026-0001 or KE-PR-2026-0001)
 */
function resolveSequentialReferenceId(sheet, requestedId, inquiryType) {
  var isProforma = (inquiryType && inquiryType.indexOf("Proforma") !== -1) || (requestedId && requestedId.indexOf("KE-PR-") !== -1);
  var prefix = isProforma ? "KE-PR-" : "KE-RFQ-";
  var year = new Date().getFullYear();
  var prefixWithYear = prefix + year + "-";

  var highestSeq = 0;
  var lastRow = sheet.getLastRow();
  var existingIds = {};

  if (lastRow > 1) {
    var values = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
    for (var i = 0; i < values.length; i++) {
      var val = String(values[i][0] || "").trim();
      existingIds[val] = true;
      if (val.indexOf(prefixWithYear) === 0) {
        var numStr = val.substring(prefixWithYear.length);
        var num = parseInt(numStr, 10);
        if (!isNaN(num) && num > highestSeq) {
          highestSeq = num;
        }
      }
    }
  }

  // If requestedId is already in proper format with 4-digit serial and not yet in the sheet, keep it
  if (requestedId && requestedId.indexOf(prefixWithYear) === 0 && !existingIds[requestedId]) {
    var reqNum = parseInt(requestedId.substring(prefixWithYear.length), 10);
    if (!isNaN(reqNum)) {
      return requestedId;
    }
  }

  // Otherwise assign the next serial starting from 0001
  var nextSeq = highestSeq + 1;
  var paddedSeq = Utilities.formatString("%04d", nextSeq);
  return prefixWithYear + paddedSeq;
}

/**
 * Formats and sends an elegant, executive-grade HTML email notification to trade@kavriexim.com
 */
function sendTradeDeskNotificationEmail(lead) {
  var formattedDate = Utilities.formatDate(lead.timestamp, "Asia/Kolkata", "dd MMM yyyy, hh:mm a 'IST'");

  var subject = "[" + lead.inquiryType + " • " + lead.referenceId + "] " +
                lead.product + " - " + lead.companyName + " (" + (lead.destinationCountry || lead.portOfDischarge || "Global") + ")";

  // WhatsApp quick link for the trade officer
  var cleanPhone = (lead.phone || "").replace(/[^0-9]/g, "");
  var whatsappUrl = cleanPhone.length >= 7 
    ? "https://wa.me/" + cleanPhone + "?text=" + encodeURIComponent("Hello " + lead.fullName + ", this is Kavri Exim Trade Desk regarding your inquiry [" + lead.referenceId + "] for " + lead.product + ".")
    : "";

  // Plain text version for fallback
  var textBody = 
    "=== NEW COMMERCIAL EXPORT LEAD: " + lead.referenceId + " ===\n" +
    "Type: " + lead.inquiryType + "\n" +
    "Timestamp: " + formattedDate + "\n\n" +
    "BUYER INFORMATION:\n" +
    "- Name: " + lead.fullName + "\n" +
    "- Company: " + lead.companyName + "\n" +
    "- Email: " + lead.email + "\n" +
    "- Phone/WhatsApp: " + lead.phone + "\n" +
    "- Destination: " + lead.destinationCountry + " (Port: " + lead.portOfDischarge + ")\n\n" +
    "ORDER SPECIFICATIONS:\n" +
    "- Product: " + lead.product + "\n" +
    "- Grade/Spec: " + lead.gradeSpec + "\n" +
    "- Quantity: " + lead.quantity + "\n" +
    "- Incoterm: " + lead.incoterm + "\n" +
    "- Packaging: " + lead.packaging + "\n\n" +
    "BUYER NOTES:\n" +
    lead.message + "\n\n" +
    "To reply to the buyer, simply reply directly to this email.\n" +
    "---\n" +
    "Kavri Spice Exim Trade Desk (Erode, Tamil Nadu, India)";

  // Elegant, responsive HTML Email Template
  var htmlBody = 
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>' + subject + '</title>' +
    '</head>' +
    '<body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #1E293B; line-height: 1.5;">' +

    '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #F1F5F9; padding: 24px 12px;">' +
    '<tr>' +
    '<td align="center">' +

    // Outer Card Container
    '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">' +

    // 1. Header Banner (Forest Green #0D522F)
    '<tr>' +
    '<td style="background-color: #0D522F; padding: 28px 32px; border-bottom: 3px solid #F59E0B;">' +
    '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
    '<tr>' +
    '<td>' +
    '<span style="display: inline-block; background-color: rgba(245, 158, 11, 0.2); border: 1px solid #F59E0B; color: #FDE68A; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 20px; margin-bottom: 8px;">' +
    '⚡ ' + lead.inquiryType.toUpperCase() + ' • ACTION REQUIRED' +
    '</span>' +
    '<h1 style="margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">KAVRI EXIM</h1>' +
    '<p style="margin: 4px 0 0 0; color: #A7F3D0; font-size: 12px; font-weight: 500; letter-spacing: 0.5px;">' +
    'INTERNATIONAL MERCHANT TRADE OPERATIONS DESK' +
    '</p>' +
    '</td>' +
    '<td align="right" valign="top" style="color: #FFFFFF;">' +
    '<div style="background-color: #083820; border: 1px solid #10B981; border-radius: 10px; padding: 8px 14px; text-align: right; display: inline-block;">' +
    '<div style="font-size: 10px; text-transform: uppercase; color: #9AE6B4; font-weight: 600;">Reference ID</div>' +
    '<div style="font-size: 14px; font-family: monospace; font-weight: 700; color: #FFFFFF;">' + lead.referenceId + '</div>' +
    '</div>' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr>' +

    // 2. Quick Action Toolbar (One-Click Reply & WhatsApp)
    '<tr>' +
    '<td style="background-color: #ECFDF5; padding: 16px 32px; border-bottom: 1px solid #A7F3D0;">' +
    '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
    '<tr>' +
    '<td style="font-size: 13px; color: #065F46;">' +
    '<strong>✉️ Direct Reply Configured:</strong> Hit <strong>"Reply"</strong> in your email client to send your quote directly to <strong>' + (lead.email || 'buyer') + '</strong>.' +
    '</td>' +
    (whatsappUrl ? (
      '<td align="right" style="padding-left: 12px;">' +
      '<a href="' + whatsappUrl + '" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 14px; border-radius: 8px; white-space: nowrap;">' +
      '💬 WhatsApp Buyer' +
      '</a>' +
      '</td>'
    ) : '') +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr>' +

    // 3. Body Content
    '<tr>' +
    '<td style="padding: 28px 32px;">' +

    // Lead Highlights Box
    '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; margin-bottom: 24px; padding: 12px 16px;">' +
    '<tr>' +
    '<td width="25%" style="font-size: 11px; color: #64748B; text-transform: uppercase; font-weight: 600; padding: 6px 0;">Inquiry Date:</td>' +
    '<td width="25%" style="font-size: 12px; color: #0F172A; font-weight: 600; padding: 6px 0;">' + formattedDate + '</td>' +
    '<td width="25%" style="font-size: 11px; color: #64748B; text-transform: uppercase; font-weight: 600; padding: 6px 0;">SLA Window:</td>' +
    '<td width="25%" style="font-size: 12px; color: #D97706; font-weight: 700; padding: 6px 0;">12 Business Hours</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="font-size: 11px; color: #64748B; text-transform: uppercase; font-weight: 600; padding: 6px 0;">Incoterm:</td>' +
    '<td style="font-size: 12px; color: #0D522F; font-weight: 700; padding: 6px 0;">' + lead.incoterm + '</td>' +
    '<td style="font-size: 11px; color: #64748B; text-transform: uppercase; font-weight: 600; padding: 6px 0;">Destination Port:</td>' +
    '<td style="font-size: 12px; color: #0F172A; font-weight: 600; padding: 6px 0;">' + lead.portOfDischarge + '</td>' +
    '</tr>' +
    '</table>' +

    // Section 1: Buyer Profile
    '<h3 style="margin: 0 0 12px 0; color: #0F172A; font-size: 15px; font-weight: 700; border-left: 3px solid #0D522F; padding-left: 8px;">' +
    '1. Buyer & Corporate Entity Details' +
    '</h3>' +
    '<table border="0" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">' +
    '<tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">' +
    '<td width="35%" style="color: #64748B; font-weight: 600;">Contact Person:</td>' +
    '<td width="65%" style="color: #0F172A; font-weight: 700;">' + lead.fullName + '</td>' +
    '</tr>' +
    '<tr style="border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Company / Organization:</td>' +
    '<td style="color: #0F172A; font-weight: 700;">' + lead.companyName + '</td>' +
    '</tr>' +
    '<tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Corporate Email:</td>' +
    '<td><a href="mailto:' + lead.email + '" style="color: #0D522F; font-weight: 700; text-decoration: underline;">' + lead.email + '</a></td>' +
    '</tr>' +
    '<tr style="border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Phone / WhatsApp:</td>' +
    '<td style="color: #0F172A; font-family: monospace; font-weight: 600;">' + lead.phone + '</td>' +
    '</tr>' +
    '<tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Country / Market:</td>' +
    '<td style="color: #0F172A; font-weight: 600;">' + lead.destinationCountry + '</td>' +
    '</tr>' +
    '<tr style="border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Discharge Port:</td>' +
    '<td style="color: #0F172A; font-weight: 600;">' + lead.portOfDischarge + '</td>' +
    '</tr>' +
    '</table>' +

    // Section 2: Order & Commodity Specifications
    '<h3 style="margin: 0 0 12px 0; color: #0F172A; font-size: 15px; font-weight: 700; border-left: 3px solid #0D522F; padding-left: 8px;">' +
    '2. Commercial Order Specifications' +
    '</h3>' +
    '<table border="0" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">' +
    '<tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">' +
    '<td width="35%" style="color: #64748B; font-weight: 600;">Product / Commodity:</td>' +
    '<td width="65%" style="color: #0D522F; font-weight: 800; font-size: 14px;">' + lead.product + '</td>' +
    '</tr>' +
    '<tr style="border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Grade / Variety:</td>' +
    '<td style="color: #0F172A; font-weight: 600;">' + lead.gradeSpec + '</td>' +
    '</tr>' +
    '<tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Target Quantity:</td>' +
    '<td style="color: #0F172A; font-weight: 700;">' + lead.quantity + '</td>' +
    '</tr>' +
    '<tr style="border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Incoterm:</td>' +
    '<td style="color: #0D522F; font-weight: 700;">' + lead.incoterm + '</td>' +
    '</tr>' +
    '<tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">' +
    '<td style="color: #64748B; font-weight: 600;">Packaging Requirement:</td>' +
    '<td style="color: #0F172A;">' + lead.packaging + '</td>' +
    '</tr>' +
    '</table>' +

    // Section 3: Buyer Notes
    '<h3 style="margin: 0 0 12px 0; color: #0F172A; font-size: 15px; font-weight: 700; border-left: 3px solid #0D522F; padding-left: 8px;">' +
    '3. Buyer Technical Notes & Requirements' +
    '</h3>' +
    '<div style="background-color: #F8FAFC; border-left: 4px solid #10B981; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px; font-size: 13px; color: #334155; line-height: 1.6; font-style: italic;">' +
    (lead.message ? lead.message.replace(/\n/g, '<br>') : 'No additional custom notes provided.') +
    '</div>' +

    // Section 4: Trade Desk SOP Checklist
    '<div style="background-color: #FEF3C7; border: 1px solid #FCD34D; border-radius: 10px; padding: 16px 20px; margin-bottom: 20px;">' +
    '<div style="font-size: 12px; font-weight: 800; color: #92400E; text-transform: uppercase; margin-bottom: 8px;">' +
    '📋 Trade Desk Action Checklist (SOP):' +
    '</div>' +
    '<ol style="margin: 0; padding-left: 20px; font-size: 12px; color: #78350F; line-height: 1.7;">' +
    '<li>Check origin lot stock & today\'s commodity rate index.</li>' +
    '<li>Calculate ocean freight to <strong>' + lead.portOfDischarge + '</strong> (' + lead.incoterm + ').</li>' +
    '<li>Draft formal <strong>Proforma Invoice (PI)</strong> and attach certified Technical Data Sheet (TDS).</li>' +
    '<li>Click <strong>Reply</strong> to dispatch offer within the 12-hour guarantee window.</li>' +
    '</ol>' +
    '</div>' +

    '</td>' +
    '</tr>' +

    // 4. Footer
    '<tr>' +
    '<td style="background-color: #0F172A; color: #94A3B8; padding: 24px 32px; font-size: 11px; line-height: 1.6; border-top: 1px solid #334155;">' +
    '<div style="color: #FFFFFF; font-weight: 700; font-size: 12px; margin-bottom: 4px;">KAVRI SPICE EXIM (HEADQUARTERS)</div>' +
    '<div>Erode, Tamil Nadu, South India • Primary Ports: Tuticorin (VOC Port) / Chennai / Cochin</div>' +
    '<div>IEC: ANNPR0870K | Spices Board CRES Registered | GSTIN: 33ANNPR0870K1ZM</div>' +
    '<div style="margin-top: 8px; color: #64748B;">This automated notification was generated by the Kavri Exim Google Sheets & Trade Desk Integration.</div>' +
    '</td>' +
    '</tr>' +

    '</table>' +

    '</td>' +
    '</tr>' +
    '</table>' +

    '</body>' +
    '</html>';

  // Send email with replyTo set to buyer's email address and BCC to force Gmail inbox ingestion
  try {
    GmailApp.sendEmail(RECIPIENT_EMAIL, subject, textBody, {
      htmlBody: htmlBody,
      name: "Kavri Exim Trade Desk",
      replyTo: lead.email || RECIPIENT_EMAIL,
      bcc: RECIPIENT_EMAIL
    });

    // Fix for Google Workspace / Gmail alias self-send:
    // When kavinkumar@kavriexim.com sends an email to its own alias (trade@kavriexim.com),
    // Gmail defaults to routing self-sent emails into "Sent Mail" and skips the Inbox.
    // Explicitly moving the thread to Inbox and marking unread ensures it appears in Primary Inbox with an alert:
    Utilities.sleep(1200);
    var threads = GmailApp.search('subject:"' + subject + '"', 0, 1);
    if (threads && threads.length > 0) {
      threads[0].moveToInbox();
      threads[0].markUnread();
    }
  } catch (gmailErr) {
    Logger.log("GmailApp send fallback to MailApp: " + gmailErr.toString());
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      bcc: RECIPIENT_EMAIL,
      name: "Kavri Exim Trade Desk",
      replyTo: lead.email || RECIPIENT_EMAIL,
      subject: subject,
      body: textBody,
      htmlBody: htmlBody
    });
  }
}
