import React from 'react';
import { X, Printer, ShieldCheck, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { formatSpecKey } from '../pages/ProductDetailPage';

export default function TdsModal({ isOpen, onClose, product, onOpenRfq }) {
  if (!isOpen || !product) return null;

  const handlePrint = () => {
    window.print();
  };

  const isTextile = product.category === 'textiles';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white text-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
        
        {/* Modal Top Bar */}
        <div className="bg-[#0D522F] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-2">
            <FileCheck className="w-5 h-5 text-amber-300" />
            <div>
              <span className="text-sm font-bold tracking-tight font-['Plus_Jakarta_Sans']">
                Technical Data Sheet (TDS) Specification Preview
              </span>
              <span className="text-[11px] text-emerald-100 block">
                Official Export Certificate • Kavri Spice Exim (Tamil Nadu, India)
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handlePrint}
              className="text-xs bg-[#083820] hover:bg-[#052615] text-emerald-100 hover:text-white px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 cursor-pointer shadow-sm border border-emerald-600/30"
              title="Print TDS Document or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-emerald-100 hover:text-white p-1.5 rounded-lg hover:bg-black/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Official Document Body */}
        <div className="p-6 sm:p-8 space-y-6 text-sm bg-white" id="printable-tds">
          
          {/* Header & Logo */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <img 
                src="./assets/images/kavri_logo_transparent.png" 
                alt="Kavri Exim" 
                className="h-10 w-auto mb-2"
              />
              <div className="text-xs text-slate-600 font-semibold mt-0.5">
                Trading Division of Kavri Spice Exim • Tamil Nadu, India
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                {product.category === 'spices'
                  ? 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM | Spices Board CRES [CRES-NUMBER]'
                  : 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM'}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block bg-emerald-50 text-[#0D522F] font-bold text-xs px-3 py-1 rounded-full border border-emerald-300">
                EXPORT SPECIFICATION TDS
              </span>
              <div className="text-[11px] text-slate-500 mt-1 font-mono">
                Doc Ref: TDS-{product.id.toUpperCase()}-2026
              </div>
            </div>
          </div>

          {/* Commodity Details Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Commercial Product Name:</span>
              <span className="text-base font-bold text-slate-900">{product.name}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Botanical / Material Provenance:</span>
              <span className="text-sm font-semibold text-slate-800 italic">{product.botanicalName} ({product.origin})</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Harmonized System (HSN) Code:</span>
              <span className="text-sm font-mono font-bold text-[#0D522F]">{product.hsnCode}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Standard Export Incoterms:</span>
              <span className="text-sm font-semibold text-slate-800">FOB ({product.shippingInfo?.gatewayPorts || 'Chennai / Tuticorin / Cochin'}) / CIF / CFR</span>
            </div>
            {product.compliance && (
              <div className="sm:col-span-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Regulatory Compliance & Certifications:</span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block mt-0.5">
                  {product.compliance}
                </span>
              </div>
            )}
          </div>

          {/* Commercial Export Grades & Sieve Calibration */}
          {product.grades && product.grades.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#0D522F]" />
                Commercial Export Grades & Sieve Calibration
              </h4>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Grade</th>
                      <th className="py-2.5 px-3">AGMARK Code</th>
                      <th className="py-2.5 px-3">Screen Size / Sieve Diameter</th>
                      <th className="py-2.5 px-3">Bulk Density</th>
                      <th className="py-2.5 px-3">Color</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800">
                    {product.grades.map((g, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-semibold text-slate-900">{g.name}</td>
                        <td className="py-2 px-3 font-mono font-bold text-[#0D522F]">{g.code || '-'}</td>
                        <td className="py-2 px-3 font-mono">{g.size}</td>
                        <td className="py-2 px-3 font-mono">{g.density}</td>
                        <td className="py-2 px-3 text-slate-600">{g.color}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0D522F]" />
              {isTextile ? 'Textile Construction & Quality Test Benchmarks' : 'Physico-Chemical & Safety Parameters (Guaranteed Limits)'}
            </h4>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Quality Parameter</th>
                    <th className="py-2.5 px-3">Standard Limit / Specification</th>
                    <th className="py-2.5 px-3">Test Protocol / Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {product.technicalSpecs && Object.entries(product.technicalSpecs).map(([key, value]) => (
                    <tr key={key} className="hover:bg-slate-50">
                      <td className="py-2 px-3 font-semibold text-slate-700 align-top w-2/5">
                        {formatSpecKey(key)}
                      </td>
                      <td className="py-2 px-3 font-mono font-semibold text-slate-900 align-top w-2/5">
                        {value}
                      </td>
                      <td className="py-2 px-3 text-slate-500 align-top w-1/5">
                        {isTextile ? 'AATCC / ISO / ASTM Tested' : 'ASTA / ISO / FSSAI Validated'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Export Packaging & Logistics */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Approved Export Packaging & Container Stowage
            </h4>
            <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
              {product.packagingOptions?.map((pkg, idx) => (
                <li key={idx}>{pkg}</li>
              ))}
              {product.shippingInfo?.containerStuffingBreakdown?.fcl20 && (
                <li><strong>20ft FCL Payload:</strong> {product.shippingInfo.containerStuffingBreakdown.fcl20.join(' | ')}</li>
              )}
              {product.shippingInfo?.containerStuffingBreakdown?.fcl40 && (
                <li><strong>40ft FCL / High Cube Payload:</strong> {product.shippingInfo.containerStuffingBreakdown.fcl40.join(' | ')}</li>
              )}
              {product.shippingInfo?.airTerminals && (
                <li><strong>Air Freight Terminals:</strong> {product.shippingInfo.airTerminals}</li>
              )}
              <li>Container loading executed under direct merchant supervision at {product.shippingInfo?.gatewayPorts || 'Chennai / Tuticorin / Cochin Port'}.</li>
              <li>Fumigation with Methyl Bromide or Phosphine gas certified by authorized plant quarantine agencies.</li>
            </ul>
          </div>

          {/* Compliance Statement */}
          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-lg text-xs text-emerald-950 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#0D522F] mt-0.5 flex-shrink-0" />
            <p>
              <strong>Quality & Regulatory Declaration:</strong> Each export batch is certified for compliance with international buyer tolerances, destination customs norms, and statutory statutory bodies before shipping manifest release.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              Need custom lab testing, Pantone color match, or client sample dispatch?
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenRfq(product);
              }}
              className="w-full sm:w-auto bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
            >
              <span>Request Formal Proforma Quote For This Product</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
