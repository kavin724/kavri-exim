import React, { useState, useEffect } from 'react';
import { 
  X, Send, CheckCircle, MessageCircle, FileText, 
  Package, Loader2
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { submitInquiry, generateReferenceId } from '../services/inquiryService';

export default function RfqModal({ isOpen, onClose, initialProduct = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    destinationCountry: '',
    portOfDischarge: '',
    incoterm: 'CIF',
    productId: initialProduct?.id || 'green-cardamom',
    gradeSpec: '',
    quantity: '1',
    quantityUnit: '20ft FCL',
    packaging: 'Standard Export Packaging',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        productId: initialProduct.id,
        gradeSpec: initialProduct.grades?.[0]?.name || ''
      }));
    }
  }, [initialProduct]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedProductObj = PRODUCTS_DATA.find(p => p.id === formData.productId) || PRODUCTS_DATA[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const refCode = generateReferenceId('RFQ');
    setQuoteReference(refCode);

    await submitInquiry({
      ...formData,
      referenceId: refCode,
      inquiryType: 'Export RFQ',
      product: selectedProductObj.name
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*NEW B2B EXPORT RFQ [${quoteReference || 'DIRECT'}]*
• Buyer: ${formData.fullName} (${formData.companyName})
• Country: ${formData.destinationCountry}
• Destination Port: ${formData.portOfDischarge}
• Incoterm: ${formData.incoterm}
• Product: ${selectedProductObj.name}
• Grade / Spec: ${formData.gradeSpec || 'Standard Export Grade'}
• Quantity: ${formData.quantity} ${formData.quantityUnit}
• Packaging: ${formData.packaging}
• Buyer Notes: ${formData.message || 'N/A'}`;
    return `https://wa.me/919842317000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-2xl bg-white border-l border-slate-200 text-slate-800 shadow-2xl flex flex-col h-full z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#0D522F]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Request an Export Quotation (RFQ)
              </h3>
              <p className="text-xs text-slate-500">
                Official B2B Inquiry Desk • Kavri Spice Exim (Tamil Nadu, India)
              </p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close RFQ Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {isSubmitted ? (
            <div className="py-12 px-4 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-[#0D522F] border border-emerald-300 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-slate-900">RFQ Transmitted Successfully!</h4>
                <div className="inline-flex items-center space-x-1.5 bg-emerald-100 text-[#0D522F] px-3.5 py-1 rounded-full text-xs font-bold border border-emerald-300">
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Logged to Trade CRM & Emailed to trade@kavriexim.com</span>
                </div>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your inquiry has been logged under reference code:
                </p>
                <div className="inline-block bg-emerald-50 border border-emerald-300 text-[#0D522F] font-mono text-base px-4 py-1.5 rounded-lg font-bold tracking-wider">
                  {quoteReference}
                </div>
                <p className="text-xs text-slate-500">
                  Official Proforma Invoice and certified lab limits will be issued within <strong>12 business hours</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs space-y-2 text-slate-700 max-w-lg mx-auto">
                <div className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mb-2">
                  Inquiry Summary Log:
                </div>
                <div><strong className="text-slate-900">Product:</strong> {selectedProductObj.name}</div>
                <div><strong className="text-slate-900">Specification:</strong> {formData.gradeSpec || 'Standard Commercial'}</div>
                <div><strong className="text-slate-900">Quantity & Incoterm:</strong> {formData.quantity} {formData.quantityUnit} ({formData.incoterm} - {formData.portOfDischarge || 'Destination Port'})</div>
                <div><strong className="text-slate-900">Buyer:</strong> {formData.fullName} ({formData.companyName})</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-5 py-3 rounded-xl text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#0D522F]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  Done / Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Buyer & Entity Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Company / Trade Entity Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Gulf Trading LLC"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="trade@company.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    WhatsApp / Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Commodity & Grade Selection */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#0D522F] uppercase tracking-wider">
                  <Package className="w-4 h-4" />
                  <span>Commodity & Technical Grade</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Required Commodity *
                    </label>
                    <select
                      value={formData.productId}
                      onChange={e => setFormData({ 
                        ...formData, 
                        productId: e.target.value,
                        gradeSpec: PRODUCTS_DATA.find(p => p.id === e.target.value)?.grades?.[0]?.name || ''
                      })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F]"
                    >
                      {PRODUCTS_DATA.map(prod => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name} ({prod.division})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Target Grade / Specification
                    </label>
                    <input
                      type="text"
                      value={formData.gradeSpec}
                      onChange={e => setFormData({ ...formData, gradeSpec: e.target.value })}
                      placeholder="e.g. 8.0mm AGEB / 570 GL / 180 GSM / 400 TC"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F]"
                    />
                  </div>
                </div>

                {/* Suggested Grades Pill Selector */}
                {selectedProductObj.grades && (
                  <div className="pt-1">
                    <span className="text-[11px] text-slate-500 block mb-1.5">Quick Grade Selection:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProductObj.grades.map(g => (
                        <button
                          key={g.name}
                          type="button"
                          onClick={() => setFormData({ ...formData, gradeSpec: g.name })}
                          className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                            formData.gradeSpec === g.name
                              ? 'bg-emerald-100 border-[#0D522F] text-[#0D522F] font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          {g.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity, Incoterm & Port */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Est. Volume *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Unit / Load Type *
                  </label>
                  <select
                    value={formData.quantityUnit}
                    onChange={e => setFormData({ ...formData, quantityUnit: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  >
                    <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                    <option value="20ft FCL">20ft FCL (Full Container)</option>
                    <option value="40ft HC FCL">40ft HC FCL</option>
                    <option value="Cartons / Pieces">Cartons / Pieces (Garments)</option>
                    <option value="LCL (Palletized)">LCL (Less Container)</option>
                    <option value="Air Cargo Consignment">Air Cargo Consignment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Incoterm *
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={e => setFormData({ ...formData, incoterm: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  >
                    <option value="FOB">FOB (Tuticorin / Chennai / Cochin)</option>
                    <option value="CIF">CIF (Port of Discharge)</option>
                    <option value="CFR">CFR (Cost and Freight)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                </div>
              </div>

              {/* Destination Port & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destinationCountry}
                    onChange={e => setFormData({ ...formData, destinationCountry: e.target.value })}
                    placeholder="e.g. United Arab Emirates, Germany, USA"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Port of Discharge (POD)
                  </label>
                  <input
                    type="text"
                    value={formData.portOfDischarge}
                    onChange={e => setFormData({ ...formData, portOfDischarge: e.target.value })}
                    placeholder="e.g. Jebel Ali, Rotterdam, New York"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  />
                </div>
              </div>

              {/* Packaging Requirement */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Packaging / Customization Requirement
                </label>
                <select
                  value={formData.packaging}
                  onChange={e => setFormData({ ...formData, packaging: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                >
                  <option value="Standard Export Packaging">Standard Export Packaging</option>
                  <option value="Food-Grade Vacuum Sealed Pouches (5kg / 10kg) with Master Carton">Food-Grade Vacuum Sealed Pouches (5kg/10kg) with Master Carton</option>
                  <option value="25kg / 50kg PP Woven Bags with Inner Polyliner">25kg / 50kg PP Woven Bags with Inner Polyliner</option>
                  <option value="Custom Garment Polybag + Pre-pack Ratio Cartons">Custom Garment Polybag + Pre-pack Ratio Cartons (Textiles)</option>
                  <option value="Traditional Export Jute Bags">Traditional Export Jute Bags</option>
                  <option value="Custom OEM / Private Label Barcode Packaging">Custom OEM / Private Label Retail Barcode Packaging</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Additional Buyer Specifications & Delivery Schedule
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify moisture limits, GSM fabric weight, thread count, Pantone colors, target shipment date, or payment terms..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                ></textarea>
              </div>

              {/* Legal Note */}
              <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
                🔒 Inquiries processed confidentially under Indian Export Regulations. Proforma Invoices issued within 12 business hours.
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-[#0D522F]/20 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                      <span>Transmitting RFQ to Trade Desk...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 stroke-[2.2] text-amber-300" />
                      <span>Transmit Official Request For Quote</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
