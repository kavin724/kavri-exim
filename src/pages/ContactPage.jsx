import React, { useState } from 'react';
import { 
  Mail, MapPin, Clock, MessageCircle, 
  Send, CheckCircle2, Upload 
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: PRODUCTS_DATA[0]?.name || 'Alleppey Green Cardamom (Small Cardamom)',
    incoterm: 'CIF',
    volume: '',
    specs: '',
    fileAttached: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold text-[#0D522F] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>International Merchant Communication Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
            Contact & Trade Inquiries
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Connect directly with our export operations team in Tamil Nadu. We provide rapid proforma estimates, sample dispatch coordination, and container bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Col: Contact Details & Office */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Registered Merchant Headquarters
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#0D522F] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Operating Legal Entity:</strong>
                    <span>Kavri Spice Exim</span>
                    <span className="block text-slate-500">Registered Office: Erode, Tamil Nadu, South India</span>
                    <span className="block text-slate-400 text-xs mt-0.5">Maritime Gateways: Tuticorin VOC Port / Chennai Port / Cochin Port</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#0D522F] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Official Trade Email:</strong>
                    <a href="mailto:trade@kavriexim.com" className="text-[#0D522F] font-semibold hover:underline">trade@kavriexim.com</a>
                    <span className="block text-slate-400 text-xs mt-0.5">Monitored 24/7 by commercial trade desk</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-[#0D522F] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">WhatsApp Merchant Desk:</strong>
                    <a href="https://wa.me/919842317000" target="_blank" rel="noopener noreferrer" className="text-[#0D522F] font-bold hover:underline font-mono">
                      +91 98423 17000
                    </a>
                    <span className="block text-slate-400 text-xs mt-0.5">Instant messaging & live video lot inspection</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Trading Hours:</strong>
                    <span>Monday - Saturday: 08:30 - 20:00 IST (UTC +5:30)</span>
                    <span className="block text-slate-400 text-xs mt-0.5">GCC, European & US commercial timezone coordination</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                  <strong className="text-[#0D522F] block mb-0.5 font-mono">RESPONSE TIME GUARANTEE:</strong>
                  All verified commercial inquiries receive a formal Proforma Invoice with lab test limits within <strong>12 business hours</strong>.
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-sm flex items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono text-[#0D522F] font-bold block">Need Quick Spot Rates?</span>
                <h3 className="text-base font-bold text-slate-900">Direct Chat with Trade Desk</h3>
                <p className="text-xs text-slate-600 mt-0.5">Connect on WhatsApp for real-time origin pricing.</p>
              </div>
              <a
                href="https://wa.me/919842317000?text=Hello%20Kavri%20Exim,%20I%20would%20like%20to%20discuss%20an%20export%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-1.5 shadow-md flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Now</span>
              </a>
            </div>

          </div>

          {/* Right Col: Comprehensive Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-2">
              Official B2B Export Inquiry Form
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Complete the form below to receive a formal proforma quote tailored to your discharge port and required specifications.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#0D522F] mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Inquiry Successfully Transmitted!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong> ({formData.company}). Our trade operations desk has received your request for <strong>{formData.product}</strong> and will follow up shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean-Luc Dupont"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Company / Importer Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. EuroSpices SARL"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="procurement@company.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Product Required *</label>
                    <select
                      value={formData.product}
                      onChange={e => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900"
                    >
                      {PRODUCTS_DATA.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Target Incoterm *</label>
                    <select
                      value={formData.incoterm}
                      onChange={e => setFormData({ ...formData, incoterm: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900"
                    >
                      <option value="FOB">FOB (Tuticorin / Chennai / Cochin)</option>
                      <option value="CIF">CIF (Destination Port)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="DDP">DDP (Delivered Duty Paid)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Est. Volume (MT / FCL) *</label>
                    <input
                      type="text"
                      required
                      value={formData.volume}
                      onChange={e => setFormData({ ...formData, volume: e.target.value })}
                      placeholder="e.g. 1 x 20ft FCL / 15 MT / 5000 pcs"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Buyer Specifications Upload */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Buyer Technical Specifications Sheet (PDF / DOC / XLSX)
                  </label>
                  <div className="border border-dashed border-slate-300 hover:border-[#0D522F] rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-50">
                    <input
                      type="file"
                      id="spec-upload"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files.length > 0) {
                          setFormData({ ...formData, fileAttached: true });
                        }
                      }}
                    />
                    <label htmlFor="spec-upload" className="cursor-pointer flex flex-col items-center">
                      <Upload className="w-5 h-5 text-[#0D522F] mb-1" />
                      <span className="text-xs text-slate-700 font-semibold">
                        {formData.fileAttached ? '✓ Buyer Spec File Attached' : 'Click to attach your RFQ specification document / PO'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">Max size: 25MB • PDF, DOCX, XLSX</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Detailed Requirements / Delivery Schedule
                  </label>
                  <textarea
                    rows="3"
                    value={formData.specs}
                    onChange={e => setFormData({ ...formData, specs: e.target.value })}
                    placeholder="Provide details on target grade, packing preference, fabric weight, delivery timeframe, or testing parameters..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#0D522F]/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 stroke-[2.2] text-amber-300" />
                  <span>Transmit Export Inquiry to Trade Desk</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
