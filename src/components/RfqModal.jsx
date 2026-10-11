import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, Send, CheckCircle, MessageCircle, FileText, 
  Package, Loader2, Edit3, Globe, Anchor
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { 
  PRODUCT_LINES, 
  DESTINATION_COUNTRIES, 
  getProductsByLine, 
  getGradesForProduct, 
  getPortsForCountry 
} from '../data/rfqOptionsData';
import { submitInquiry } from '../services/inquiryService';

export default function RfqModal({ isOpen, onClose, initialProduct = null }) {
  // Cascading Hierarchy: 1) Product Line, 2) Commodity/Product, 3) Target Grade
  const [productLine, setProductLine] = useState('spices');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    destinationCountry: 'UAE',
    portOfDischarge: 'Jebel Ali Port, Dubai (AEJEA)',
    incoterm: 'CIF',
    productId: 'green-cardamom',
    gradeSpec: '',
    quantity: '1',
    quantityUnit: '20ft FCL',
    packaging: 'Standard Export Packaging',
    message: ''
  });

  // Custom text states when "Others" is chosen
  const [customGrade, setCustomGrade] = useState('');
  const [customCountry, setCustomCountry] = useState('');
  const [customPort, setCustomPort] = useState('');

  // Interactive Dialogue Box Modal state
  const [dialogConfig, setDialogConfig] = useState({
    isOpen: false,
    field: '', // 'gradeSpec' | 'destinationCountry' | 'portOfDischarge'
    title: '',
    subtitle: '',
    placeholder: '',
    isTextarea: false,
    value: '',
    fallback: ''
  });
  const [dialogInputValue, setDialogInputValue] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  // Synchronize initialProduct when drawer opens or initialProduct changes
  useEffect(() => {
    if (initialProduct) {
      const lineId = initialProduct.category || 'spices';
      setProductLine(lineId);
      const grades = getGradesForProduct(initialProduct.id);
      const firstGrade = grades[0]?.value || '';

      setFormData(prev => ({
        ...prev,
        productId: initialProduct.id,
        gradeSpec: firstGrade
      }));
      setCustomGrade('');
    } else {
      const defaultGrades = getGradesForProduct('green-cardamom');
      setFormData(prev => ({
        ...prev,
        productId: prev.productId || 'green-cardamom',
        gradeSpec: prev.gradeSpec || defaultGrades[0]?.value || ''
      }));
    }
  }, [initialProduct]);

  // Synchronize dialog input value when dialogConfig opens
  useEffect(() => {
    if (dialogConfig.isOpen) {
      setDialogInputValue(dialogConfig.value || '');
    }
  }, [dialogConfig.isOpen, dialogConfig.value]);

  // Dialogue Box confirmation & cancellation
  const handleDialogSave = (inputValue) => {
    const trimmed = inputValue.trim();

    if (dialogConfig.field === 'gradeSpec') {
      if (trimmed) {
        setCustomGrade(trimmed);
        setFormData(prev => ({ ...prev, gradeSpec: 'Others' }));
      } else {
        setFormData(prev => ({ ...prev, gradeSpec: dialogConfig.fallback }));
        setCustomGrade('');
      }
    } else if (dialogConfig.field === 'destinationCountry') {
      if (trimmed) {
        setCustomCountry(trimmed);
        setFormData(prev => ({ 
          ...prev, 
          destinationCountry: 'Others',
          portOfDischarge: 'Others'
        }));
      } else {
        setFormData(prev => ({ ...prev, destinationCountry: dialogConfig.fallback }));
        setCustomCountry('');
      }
    } else if (dialogConfig.field === 'portOfDischarge') {
      if (trimmed) {
        setCustomPort(trimmed);
        setFormData(prev => ({ ...prev, portOfDischarge: 'Others' }));
      } else {
        setFormData(prev => ({ ...prev, portOfDischarge: dialogConfig.fallback }));
        setCustomPort('');
      }
    }

    setDialogConfig(prev => ({ ...prev, isOpen: false }));
  };

  const handleDialogCancel = useCallback(() => {
    if (dialogConfig.field === 'gradeSpec' && !customGrade) {
      setFormData(prev => ({ ...prev, gradeSpec: dialogConfig.fallback }));
    } else if (dialogConfig.field === 'destinationCountry' && !customCountry) {
      setFormData(prev => ({ ...prev, destinationCountry: dialogConfig.fallback }));
    } else if (dialogConfig.field === 'portOfDischarge' && !customPort) {
      setFormData(prev => ({ ...prev, portOfDischarge: dialogConfig.fallback }));
    }
    setDialogConfig(prev => ({ ...prev, isOpen: false }));
  }, [dialogConfig.field, dialogConfig.fallback, customGrade, customCountry, customPort]);

  // Handle ESC key to close modal/drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (dialogConfig.isOpen) {
          handleDialogCancel();
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, dialogConfig.isOpen, handleDialogCancel]);

  if (!isOpen) return null;

  // Filter products for the active Major Product Line
  const availableProducts = getProductsByLine(productLine);
  const selectedProductObj = PRODUCTS_DATA.find(p => p.id === formData.productId) || availableProducts[0] || PRODUCTS_DATA[0];

  // Grades available for the selected product (ending with 'Others')
  const availableGrades = getGradesForProduct(selectedProductObj.id);

  // Available ports for the selected country (ending with 'Others')
  const availablePorts = getPortsForCountry(formData.destinationCountry);

  // Handlers for cascading dropdowns
  const handleProductLineChange = (e) => {
    const newLineId = e.target.value;
    setProductLine(newLineId);

    const prods = getProductsByLine(newLineId);
    const firstProd = prods[0] || PRODUCTS_DATA[0];
    const grades = getGradesForProduct(firstProd.id);
    const firstGrade = grades[0]?.value || '';

    setFormData(prev => ({
      ...prev,
      productId: firstProd.id,
      gradeSpec: firstGrade
    }));
    setCustomGrade('');
  };

  const handleProductChange = (e) => {
    const newProdId = e.target.value;
    const grades = getGradesForProduct(newProdId);
    const firstGrade = grades[0]?.value || '';

    setFormData(prev => ({
      ...prev,
      productId: newProdId,
      gradeSpec: firstGrade
    }));
    setCustomGrade('');
  };

  const handleGradeChange = (e) => {
    const val = e.target.value;
    if (val === 'Others') {
      setDialogConfig({
        isOpen: true,
        field: 'gradeSpec',
        title: 'Target Grade / Technical Specification',
        subtitle: `Specify your custom grade parameters for ${selectedProductObj.name} (e.g. sieve size, volatile oil %, thread count, GSM, special finish).`,
        placeholder: 'Enter custom grade code, required physical/chemical specifications, or special lot instructions...',
        isTextarea: true,
        value: customGrade,
        fallback: formData.gradeSpec !== 'Others' ? formData.gradeSpec : (availableGrades[0]?.value || '')
      });
    } else {
      setFormData(prev => ({ ...prev, gradeSpec: val }));
      setCustomGrade('');
    }
  };

  const handleCountryChange = (e) => {
    const val = e.target.value;
    if (val === 'Others') {
      setDialogConfig({
        isOpen: true,
        field: 'destinationCountry',
        title: 'Custom Destination Country',
        subtitle: 'Enter your destination country for international maritime freight and customs quotation.',
        placeholder: 'e.g. Australia, Japan, South Africa, Netherlands, New Zealand...',
        isTextarea: false,
        value: customCountry,
        fallback: formData.destinationCountry !== 'Others' ? formData.destinationCountry : 'UAE'
      });
    } else {
      const countryPorts = getPortsForCountry(val);
      setFormData(prev => ({
        ...prev,
        destinationCountry: val,
        portOfDischarge: countryPorts[0] || 'Others'
      }));
      setCustomCountry('');
      setCustomPort('');
    }
  };

  const handlePortChange = (e) => {
    const val = e.target.value;
    if (val === 'Others') {
      const currentCountryName = formData.destinationCountry === 'Others' 
        ? (customCountry || 'your destination country') 
        : formData.destinationCountry;

      setDialogConfig({
        isOpen: true,
        field: 'portOfDischarge',
        title: 'Custom Port of Discharge (POD)',
        subtitle: `Specify your preferred discharge seaport, inland container depot (ICD), or marine terminal in ${currentCountryName}.`,
        placeholder: 'e.g. Port of Rotterdam (NLRTM), Port of Brisbane (AUBNE), Inland CFS terminal...',
        isTextarea: false,
        value: customPort,
        fallback: formData.portOfDischarge !== 'Others' ? formData.portOfDischarge : (availablePorts[0] || '')
      });
    } else {
      setFormData(prev => ({ ...prev, portOfDischarge: val }));
      setCustomPort('');
    }
  };


  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger dialogue if user chose 'Others' but hasn't entered custom details
    if (formData.gradeSpec === 'Others' && !customGrade.trim()) {
      handleGradeChange({ target: { value: 'Others' } });
      return;
    }
    if (formData.destinationCountry === 'Others' && !customCountry.trim()) {
      handleCountryChange({ target: { value: 'Others' } });
      return;
    }
    if (formData.portOfDischarge === 'Others' && !customPort.trim()) {
      handlePortChange({ target: { value: 'Others' } });
      return;
    }

    setIsSubmitting(true);

    const productLineObj = PRODUCT_LINES.find(pl => pl.id === productLine);
    const finalProductLine = productLineObj ? productLineObj.name : 'Spices & Seasonings';
    const finalCountry = formData.destinationCountry === 'Others' ? customCountry : formData.destinationCountry;
    const finalPort = formData.portOfDischarge === 'Others' ? customPort : formData.portOfDischarge;
    const finalGrade = formData.gradeSpec === 'Others' ? customGrade : formData.gradeSpec;

    const res = await submitInquiry({
      ...formData,
      productLine: finalProductLine,
      product: selectedProductObj.name,
      gradeSpec: finalGrade,
      destinationCountry: finalCountry,
      portOfDischarge: finalPort,
      isCustomGrade: formData.gradeSpec === 'Others',
      isCustomCountry: formData.destinationCountry === 'Others',
      isCustomPort: formData.portOfDischarge === 'Others',
      inquiryType: 'Export RFQ'
    });

    setQuoteReference(res.referenceId);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // WhatsApp formatted message
  const generateWhatsAppMessage = () => {
    const productLineName = PRODUCT_LINES.find(pl => pl.id === productLine)?.name || 'Spices & Seasonings';
    const finalCountry = formData.destinationCountry === 'Others' ? (customCountry || 'Custom Country') : formData.destinationCountry;
    const finalPort = formData.portOfDischarge === 'Others' ? (customPort || 'Custom Port') : formData.portOfDischarge;
    const finalGrade = formData.gradeSpec === 'Others' ? (customGrade || 'Custom Specification') : (formData.gradeSpec || 'Standard Export Grade');

    const text = `*NEW B2B EXPORT RFQ [${quoteReference || 'DIRECT'}]*
• Major Product Line: ${productLineName}
• Buyer: ${formData.fullName} (${formData.companyName})
• Destination Country: ${finalCountry}
• Destination Port: ${finalPort}
• Incoterm: ${formData.incoterm}
• Commodity / Product: ${selectedProductObj.name}
• Target Grade / Spec: ${finalGrade}
• Est. Volume: ${formData.quantity} ${formData.quantityUnit}
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
                <div>
                  <strong className="text-slate-900">Product Line:</strong> {PRODUCT_LINES.find(pl => pl.id === productLine)?.name || 'Spices & Seasonings'}
                </div>
                <div>
                  <strong className="text-slate-900">Commodity:</strong> {selectedProductObj.name}
                </div>
                <div>
                  <strong className="text-slate-900">Target Grade:</strong> {formData.gradeSpec === 'Others' ? customGrade : formData.gradeSpec}
                  {formData.gradeSpec === 'Others' && (
                    <span className="ml-1.5 bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-300">
                      Custom Spec
                    </span>
                  )}
                </div>
                <div>
                  <strong className="text-slate-900">Destination:</strong> {formData.destinationCountry === 'Others' ? customCountry : formData.destinationCountry} • {formData.portOfDischarge === 'Others' ? customPort : formData.portOfDischarge}
                </div>
                <div>
                  <strong className="text-slate-900">Quantity & Incoterm:</strong> {formData.quantity} {formData.quantityUnit} ({formData.incoterm})
                </div>
                <div>
                  <strong className="text-slate-900">Buyer:</strong> {formData.fullName} ({formData.companyName})
                </div>
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

              {/* Requirement 1: Commodity & Technical Grade Details Area */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#0D522F] uppercase tracking-wider">
                  <Package className="w-4 h-4" />
                  <span>Commodity & Technical Grade Details</span>
                </div>

                {/* 1. Major Product Line dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Major Product Line *
                  </label>
                  <select
                    value={productLine}
                    onChange={handleProductLineChange}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:outline-none focus:border-[#0D522F] transition-colors shadow-sm"
                  >
                    {PRODUCT_LINES.map(pl => (
                      <option key={pl.id} value={pl.id}>
                        {pl.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Required Commodity & 3. Target Grade Specification */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Required Commodity *
                    </label>
                    <select
                      value={formData.productId}
                      onChange={handleProductChange}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] shadow-sm"
                    >
                      {availableProducts.map(prod => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Target Grade Specification *
                      </label>
                      {formData.gradeSpec === 'Others' && customGrade && (
                        <button
                          type="button"
                          onClick={() => handleGradeChange({ target: { value: 'Others' } })}
                          className="text-[11px] text-[#0D522F] hover:underline font-bold flex items-center space-x-1"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      )}
                    </div>

                    <select
                      value={formData.gradeSpec}
                      onChange={handleGradeChange}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] shadow-sm"
                    >
                      {availableGrades.map(g => (
                        <option key={g.value} value={g.value}>
                          {g.label}
                        </option>
                      ))}
                    </select>

                    {/* Custom Grade preview card if "Others" selected */}
                    {formData.gradeSpec === 'Others' && (
                      <div className="mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start justify-between text-xs animate-fadeIn">
                        <div className="space-y-0.5 pr-2">
                          <span className="font-bold text-[#0D522F] flex items-center gap-1 text-[11px]">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            Custom Specification Entered:
                          </span>
                          <p className="text-slate-700 italic font-mono text-[11px] whitespace-pre-wrap">
                            {customGrade || '(Click Edit to enter your technical requirements)'}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleGradeChange({ target: { value: 'Others' } })}
                          className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1 flex-shrink-0 mt-0.5"
                        >
                          <Edit3 className="w-3 h-3" /> Edit
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Volume, Load Type & Incoterm */}
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

              {/* Requirement 2: Destination Country & Port of Discharge (Cascading with 'Others' Dialog) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 flex items-center space-x-1">
                      <Globe className="w-3.5 h-3.5 text-slate-500" />
                      <span>Destination Country *</span>
                    </label>
                    {formData.destinationCountry === 'Others' && customCountry && (
                      <button
                        type="button"
                        onClick={() => handleCountryChange({ target: { value: 'Others' } })}
                        className="text-[11px] text-[#0D522F] hover:underline font-bold flex items-center space-x-1"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>
                  <select
                    value={formData.destinationCountry}
                    onChange={handleCountryChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  >
                    {DESTINATION_COUNTRIES.map(c => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  {/* Custom Country preview card */}
                  {formData.destinationCountry === 'Others' && (
                    <div className="mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start justify-between text-xs animate-fadeIn">
                      <div className="space-y-0.5 pr-2">
                        <span className="font-bold text-[#0D522F] flex items-center gap-1 text-[11px]">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          Custom Country Entered:
                        </span>
                        <p className="text-slate-800 font-semibold text-xs">
                          {customCountry || '(Click Edit to enter your country)'}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCountryChange({ target: { value: 'Others' } })}
                        className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1 flex-shrink-0 mt-0.5"
                      >
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 flex items-center space-x-1">
                      <Anchor className="w-3.5 h-3.5 text-slate-500" />
                      <span>Port of Discharge (POD) *</span>
                    </label>
                    {formData.portOfDischarge === 'Others' && customPort && (
                      <button
                        type="button"
                        onClick={() => handlePortChange({ target: { value: 'Others' } })}
                        className="text-[11px] text-[#0D522F] hover:underline font-bold flex items-center space-x-1"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>
                  <select
                    value={formData.portOfDischarge}
                    onChange={handlePortChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  >
                    {availablePorts.map(p => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>

                  {/* Custom Port preview card */}
                  {formData.portOfDischarge === 'Others' && (
                    <div className="mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start justify-between text-xs animate-fadeIn">
                      <div className="space-y-0.5 pr-2">
                        <span className="font-bold text-[#0D522F] flex items-center gap-1 text-[11px]">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          Custom Port Entered:
                        </span>
                        <p className="text-slate-800 font-semibold text-xs">
                          {customPort || '(Click Edit to specify discharge port)'}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePortChange({ target: { value: 'Others' } })}
                        className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1 flex-shrink-0 mt-0.5"
                      >
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>
                  )}
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

              {/* Additional Buyer Notes */}
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

      {/* Interactive Dialogue Box Modal for "Others" option */}
      {dialogConfig.isOpen && (
        <div 
          className="fixed inset-0 z-[70] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleDialogCancel();
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform animate-scaleUp">
            {/* Dialog Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#0D522F]">
                  <Edit3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    {dialogConfig.title}
                  </h4>
                  <span className="text-[11px] text-slate-500">Custom Specification Entry</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleDialogCancel}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dialog Body */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {dialogConfig.subtitle}
              </p>

              <div>
                {dialogConfig.isTextarea ? (
                  <textarea
                    autoFocus
                    rows={4}
                    value={dialogInputValue}
                    onChange={(e) => setDialogInputValue(e.target.value)}
                    placeholder={dialogConfig.placeholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white transition-colors"
                  />
                ) : (
                  <input
                    autoFocus
                    type="text"
                    value={dialogInputValue}
                    onChange={(e) => setDialogInputValue(e.target.value)}
                    placeholder={dialogConfig.placeholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white transition-colors"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleDialogSave(dialogInputValue);
                      }
                    }}
                  />
                )}
              </div>

              <div className="text-[11px] text-slate-600 bg-emerald-50/70 border border-emerald-200 rounded-lg p-2.5 flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-[#0D522F] flex-shrink-0 mt-0.5" />
                <span>
                  This custom specification will be recorded in our trade CRM and directly reviewed by our export merchant desk.
                </span>
              </div>
            </div>

            {/* Dialog Footer */}
            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end space-x-2.5">
              <button
                type="button"
                onClick={handleDialogCancel}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDialogSave(dialogInputValue)}
                className="px-5 py-2 text-xs font-bold text-white bg-[#0D522F] hover:bg-[#083820] rounded-lg shadow-sm transition-all flex items-center space-x-1.5"
              >
                <span>Save & Apply</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
