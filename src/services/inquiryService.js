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
  const isProforma = Boolean(data.inquiryType?.includes('Proforma') || data.referenceId?.includes('KE-PR-'));
  const fallbackPrefix = isProforma ? 'PR' : 'RFQ';
  const fallbackRefId = data.referenceId || generateReferenceId(fallbackPrefix);

  const payload = {
    referenceId: data.referenceId || '',
    timestamp: new Date().toISOString(),
    inquiryType: data.inquiryType || (isProforma ? 'Proforma Invoice Request' : 'Export RFQ'),
    fullName: data.fullName || data.name || '',
    companyName: data.companyName || data.company || '',
    email: data.email || '',
    phone: data.phone || '',
    destinationCountry: data.destinationCountry || data.country || '',
    portOfDischarge: data.portOfDischarge || data.port || '',
    incoterm: data.incoterm || 'CIF',
    productLine: data.productLine || data.division || '',
    product: data.product || '',
    gradeSpec: data.gradeSpec || data.specs || 'Standard Export Grade',
    isCustomGrade: Boolean(data.isCustomGrade),
    isCustomCountry: Boolean(data.isCustomCountry),
    isCustomPort: Boolean(data.isCustomPort),
    quantity: data.quantity ? `${data.quantity} ${data.quantityUnit || ''}`.trim() : (data.volume || ''),
    packaging: data.packaging || 'Standard Export Packaging',
    message: data.message || data.specs || '',
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    destinationEmail: FORMS_CONFIG.TRADE_DESK_EMAIL
  };

  const scriptUrl = FORMS_CONFIG.GOOGLE_SCRIPT_URL;

  // If the user has not yet plugged in their Google Script URL, or it's still the placeholder
  if (!scriptUrl || scriptUrl.includes('PLACEHOLDER')) {
    console.info(
      'Google Apps Script URL is in test/placeholder mode. Payload logged locally:',
      payload
    );
    saveAuditLog({ ...payload, referenceId: fallbackRefId });
    return {
      success: true,
      referenceId: fallbackRefId,
      isMock: true,
      message: 'Logged locally. Deploy the Google Apps Script to enable live Google Sheet & email dispatch.'
    };
  }

  let finalRefId = fallbackRefId;

  try {
    // 1. First attempt standard POST (text/plain is CORS-safelisted; Apps Script responds with Access-Control-Allow-Origin: *)
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      if (result && result.referenceId) {
        finalRefId = result.referenceId;
      }
    }
  } catch (corsOrNetworkErr) {
    console.warn('Standard fetch attempt encountered CORS or network limit; dispatching via no-cors fallback:', corsOrNetworkErr);
    try {
      // 2. Safe fallback via no-cors to guarantee transmission to Apps Script
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
    } catch (fallbackErr) {
      console.error('Failed to transmit inquiry to Google Apps Script:', fallbackErr);
      saveAuditLog({ ...payload, referenceId: finalRefId });
      return {
        success: false,
        referenceId: finalRefId,
        error: fallbackErr.message || 'Transmission error'
      };
    }
  }

  // Save audit log with official reference ID
  saveAuditLog({ ...payload, referenceId: finalRefId });

  return {
    success: true,
    referenceId: finalRefId,
    isMock: false
  };
}

/**
 * Saves local audit record of submitted inquiry
 */
function saveAuditLog(item) {
  try {
    if (typeof localStorage !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('kavri_exim_inquiries') || '[]');
      existing.unshift(item);
      localStorage.setItem('kavri_exim_inquiries', JSON.stringify(existing.slice(0, 50)));
    }
  } catch (err) {
    console.warn('Local storage audit log skipped:', err);
  }
}
