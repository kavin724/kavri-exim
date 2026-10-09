// Kavri Exim - Form & Trade Desk Communication Configuration

export const FORMS_CONFIG = {
  // Official corporate communication address (Displayed publicly across website header, footer & legal pages)
  CONTACT_DISPLAY_EMAIL: 'connect@kavriexim.com',

  // Official Trade Desk inbox (Receives all incoming RFQ submissions, Proforma requests, and CRM alerts)
  TRADE_DESK_EMAIL: 'trade@kavriexim.com',

  // Official WhatsApp Trade Desk
  WHATSAPP_PHONE_NUMBER: '919842317000',

  // Google Apps Script Web App Deployment URL
  // Replace this placeholder with your deployed Google Apps Script Web App URL from Google Sheets.
  GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz76ByiyCz3PxfihQq3HpHeD5qjlkA4mm3_YCcaU5H9mf-D1IvgPo11mE4VGe4Ryafh/exec',

  // SLA Guarantee for commercial quotes
  RESPONSE_SLA_HOURS: 12,
};
