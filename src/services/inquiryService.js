import { FORMS_CONFIG } from '../config/formsConfig';

/**
 * Generates an official export reference ID starting sequentially at 0001
 * (e.g., KE-RFQ-2026-0001 or KE-PR-2026-0001)
 * @param {'RFQ' | 'PR' | 'INQ'} prefix 
 * @returns {string}
 */
export function generateReferenceId(prefix = 'RFQ') {
  const year = new Date().getFullYear();
  let nextSeq = 1;
  try {
    if (typeof localStorage !== 'undefined') {
      const storageKey = `kavri_seq_${prefix}_${year}`;
      const saved = parseInt(localStorage.getItem(storageKey) || '0', 10);
      nextSeq = saved + 1;
      localStorage.setItem(storageKey, String(nextSeq));
    }
  } catch (err) {
    nextSeq = 1;
  }
  const padded = String(nextSeq).padStart(4, '0');
  return `KE-${prefix}-${year}-${padded}`;
}

/**
 * Transmits an inquiry to the Google Sheets + Email Integration backend (Google Apps Script)
 * Automatically appends a row into the Google Sheet CRM and dispatches an HTML email to trade@kavriexim.com
 *
 * @param {Object} data - Inquiry details
 * @returns {Promise<{ success: boolean, referenceId: string, error?: string }>}
 */
export async function submitInquiry(data) {
  const referenceId = data.referenceId || generateReferenceId(data.inquiryType?.includes('Proforma') ? 'PR' : 'RFQ');

  const payload = {
    referenceId,
    timestamp: new Date().toISOString(),
    inquiryType: data.inquiryType || 'Export RFQ',
    fullName: data.fullName || data.name || '',
    companyName: data.companyName || data.company || '',
    email: data.email || '',
    phone: data.phone || '',
    destinationCountry: data.destinationCountry || data.country || '',
    portOfDischarge: data.portOfDischarge || data.port || '',
    incoterm: data.incoterm || 'CIF',
    product: data.product || '',
    gradeSpec: data.gradeSpec || data.specs || 'Standard Export Grade',
    quantity: data.quantity ? `${data.quantity} ${data.quantityUnit || ''}`.trim() : (data.volume || ''),
    packaging: data.packaging || 'Standard Export Packaging',
    message: data.message || data.specs || '',
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    destinationEmail: FORMS_CONFIG.TRADE_DESK_EMAIL
  };

  // 1. Audit backup in browser local storage
  try {
    if (typeof localStorage !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('kavri_exim_inquiries') || '[]');
      existing.unshift(payload);
      localStorage.setItem('kavri_exim_inquiries', JSON.stringify(existing.slice(0, 50)));
    }
  } catch (err) {
    console.warn('Local storage audit log skipped:', err);
  }

  // 2. Dispatch to Google Apps Script Web App
  const scriptUrl = FORMS_CONFIG.GOOGLE_SCRIPT_URL;

  // If the user has not yet plugged in their Google Script URL, or it's still the placeholder
  if (!scriptUrl || scriptUrl.includes('PLACEHOLDER')) {
    console.info(
      'Google Apps Script URL is in test/placeholder mode. Payload logged locally:',
      payload
    );
    return {
      success: true,
      referenceId,
      isMock: true,
      message: 'Logged locally. Deploy the Google Apps Script to enable live Google Sheet & email dispatch.'
    };
  }

  try {
    // We send payload as JSON text with 'no-cors' mode.
    // In Google Apps Script, doPost(e) reads e.postData.contents safely,
    // avoiding browser cross-origin preflight/CORS blocks on static hosts (GitHub Pages).
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      referenceId,
      isMock: false
    };
  } catch (err) {
    console.error('Failed to transmit inquiry to Google Apps Script:', err);
    // Even if network fails, return reference ID so the user is never blocked from WhatsApp option
    return {
      success: false,
      referenceId,
      error: err.message || 'Transmission error'
    };
  }
}
