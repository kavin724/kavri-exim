import React from 'react';
import { X, Printer, ShieldCheck, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { formatSpecKey, getDensityColumnLabel, getTestProtocolForSpec } from '../pages/ProductDetailPage';

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
                  : ['terry-towels', 'bedsheets', 'shirting-fabrics'].includes(product.id)
                  ? 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM | TEXPROCIL Registered | OEKO-TEX Standard 100'
                  : product.id === 'linens'
                  ? 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM | HEPC / TEXPROCIL Registered | OEKO-TEX Standard 100'
                  : product.category === 'textiles'
                  ? 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM | AEPC Registered | OEKO-TEX Standard 100'
                  : product.id === 'traditional-metalcraft'
                  ? 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM | EPCH Registered | ASI Non-Antiquity Compliant'
                  : product.id === 'modern-home-decor'
                  ? 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM | EPCH Registered | VRIKSH Certified (CITES Timber Legality)'
                  : product.id === 'oem-private-label'
                  ? 'Govt Regd: IEC ANNPR0870K | GSTIN 33ANNPR0870K1ZM | DGFT / IEC Registered | US FDA & EU REACH Compliant'
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
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">
                {product.id === 'traditional-metalcraft'
                  ? 'Metallurgy & Craft Provenance:'
                  : product.id === 'modern-home-decor'
                  ? 'Materials & Craft Provenance:'
                  : product.id === 'oem-private-label'
                  ? 'Scope & Sourcing Network:'
                  : product.id === 'terry-towels'
                  ? 'Weave & Construction Provenance:'
                  : (isTextile ? 'Fabric Construction & Provenance:' : 'Botanical / Material Provenance:')}
              </span>
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
            {product.geographicalIndication && (
              <div className="sm:col-span-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Official Geographical Indication (GI):</span>
                <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-300 inline-block mt-0.5">
                  {product.geographicalIndication}
                </span>
              </div>
            )}
          </div>

          {/* Commercial Export Grades & Sieve Calibration */}
          {product.grades && product.grades.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#0D522F]" />
                {product.id === 't-shirts'
                  ? 'Standard Commercial Silhouettes & Construction Profiles'
                  : product.id === 'terry-towels'
                  ? 'Standard Institutional & Luxury Hospitality Towel Specifications'
                  : product.id === 'bedsheets'
                  ? 'Commercial Grades & Sizing Matrix'
                  : product.id === 'linens'
                  ? 'Commercial Product Specifications & Sizing Matrix'
                  : product.id === 'shirting-fabrics'
                  ? 'Standard Export Fabric Constructions & Weave Specifications'
                  : product.id === 'traditional-metalcraft'
                  ? 'Standard Commercial Classifications & Artisan Metalcraft Specs'
                  : product.id === 'modern-home-decor'
                  ? 'Standard Commercial Classifications & Product Lines'
                  : product.id === 'oem-private-label'
                  ? 'Turnkey Sourcing Verticals & Custom Manufacturing Capabilities'
                  : (isTextile ? 'Commercial Product Specifications & Dimensions' : 'Commercial Export Grades & Specifications')}
              </h4>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">
                        {product.id === 't-shirts' ? 'Silhouette / Category' : product.id === 'terry-towels' ? 'Towel Category' : product.id === 'bedsheets' ? 'Bed Linen Style / Weave' : product.id === 'linens' ? 'Product Line' : product.id === 'shirting-fabrics' ? 'Fabric Category / Style' : product.id === 'traditional-metalcraft' ? 'Artefact Category' : product.id === 'modern-home-decor' ? 'Product Category' : product.id === 'oem-private-label' ? 'Product Sourcing Vertical' : 'Grade / Designation'}
                      </th>
                      <th className="py-2.5 px-3">
                        {product.id === 't-shirts' ? 'Sizing Matrix & Cut Profile' : product.id === 'terry-towels' ? 'Standard Metric Dimensions' : product.id === 'bedsheets' ? 'Standard Mattress Sizing' : product.id === 'linens' ? 'Standard Export Sizing' : product.id === 'shirting-fabrics' ? 'Usable Cut Width & Roll Length' : product.id === 'traditional-metalcraft' ? 'Standard Dimensional Sizing' : product.id === 'modern-home-decor' ? 'Dimensions & Standard Sizing' : product.id === 'oem-private-label' ? 'Target SKUs & Material Scope' : (isTextile ? 'Dimensions / Construction' : 'Screen Size / Sieve Diameter')}
                      </th>
                      {product.id === 'terry-towels' && (
                        <th className="py-2.5 px-3">Imperial Sizing</th>
                      )}
                      <th className="py-2.5 px-3">{getDensityColumnLabel(product.id, isTextile)}</th>
                      <th className="py-2.5 px-3">
                        {product.id === 't-shirts' ? 'Yarn Count & Dye Specification' : product.id === 'terry-towels' ? 'Pile Loop Construction' : product.id === 'bedsheets' ? 'Yarn Count & Dye Finish' : product.id === 'linens' ? 'Construction & Finishing Details' : product.id === 'shirting-fabrics' ? 'Yarn Count & Dye Specification' : product.id === 'traditional-metalcraft' ? 'Metallurgy & Surface Finish' : product.id === 'modern-home-decor' ? 'Surface Finish & Colorways' : product.id === 'oem-private-label' ? 'Private Label & Packaging Capabilities' : 'Color & Appearance'}
                      </th>
                      <th className="py-2.5 px-3">
                        {product.id === 't-shirts' ? 'Primary Commercial Applications' : product.id === 'terry-towels' ? 'Primary Use Sector' : product.id === 'bedsheets' ? 'Primary Target Markets' : product.id === 'linens' ? 'Target Industry Applications' : product.id === 'shirting-fabrics' ? 'Primary Commercial Applications' : product.id === 'traditional-metalcraft' ? 'Primary Target Applications' : product.id === 'modern-home-decor' ? 'Commercial Target Markets' : product.id === 'oem-private-label' ? 'Primary Commercial Sectors' : 'Commercial Applications'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800">
                    {product.grades.map((g, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-semibold text-slate-900">
                          <div>{g.name}</div>
                          {g.code && (
                            <span className="inline-block mt-0.5 text-[10px] bg-emerald-50 text-[#0D522F] border border-emerald-200 px-1.5 py-0.5 rounded font-mono font-bold">
                              {product.compliance?.includes('AGMARK') ? `AGMARK: ${g.code}` : `Code: ${g.code}`}
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-3 font-mono">{g.size}</td>
                        {product.id === 'terry-towels' && (
                          <td className="py-2 px-3 font-mono text-slate-600">{g.imperial}</td>
                        )}
                        <td className="py-2 px-3 font-mono font-bold text-[#0D522F]">{g.density}</td>
                        <td className="py-2 px-3 text-slate-600">{g.color}</td>
                        <td className="py-2 px-3 text-slate-500">{g.usage}</td>
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
              {product.id === 't-shirts'
                ? 'Textile Construction & Laboratory Specifications'
                : product.id === 'shirting-fabrics'
                ? 'Textile Physical & Laboratory Specifications'
                : ['terry-towels', 'bedsheets', 'linens'].includes(product.id)
                ? 'Textile Physical & Laboratory Benchmarks'
                : product.id === 'traditional-metalcraft'
                ? 'Metallurgical & Craftsmanship Specifications'
                : product.id === 'modern-home-decor'
                ? 'Technical & Material Specifications'
                : product.id === 'oem-private-label'
                ? 'Quality Assurance, Lab Testing & Regulatory Specifications'
                : (isTextile ? 'Textile Construction & Quality Test Benchmarks' : 'Physico-Chemical & Safety Parameters (Guaranteed Limits)')}
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
                <tbody className="divide-y border-slate-200 text-slate-800">
                  {product.technicalSpecs && Object.entries(product.technicalSpecs).map(([key, value]) => (
                    <tr key={key} className="hover:bg-slate-50">
                      <td className="py-2 px-3 font-semibold text-slate-700 align-top w-2/5">
                        {formatSpecKey(key)}
                      </td>
                      <td className="py-2 px-3 font-mono font-semibold text-slate-900 align-top w-2/5">
                        {value}
                      </td>
                      <td className="py-2 px-3 text-slate-600 font-mono text-[11px] align-top w-1/5">
                        {getTestProtocolForSpec(key, value, isTextile)}
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
              {['t-shirts', 'terry-towels', 'bedsheets', 'linens'].includes(product.id)
                ? 'Approved Export Packaging Solutions'
                : ['shirting-fabrics', 'modern-home-decor'].includes(product.id)
                ? 'Approved Export Packaging Options'
                : product.id === 'traditional-metalcraft'
                ? 'Approved Export Packaging & Protection'
                : product.id === 'oem-private-label'
                ? 'Approved Export Packaging & Consolidation Options'
                : 'Approved Export Packaging & Container Stowage'}
            </h4>
            <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
              {product.packagingOptions?.map((pkg, idx) => (
                <li key={idx}>{pkg}</li>
              ))}
              {product.shippingInfo?.containerStuffingBreakdown?.fcl20 ? (
                <li><strong>20ft FCL Payload:</strong> {product.shippingInfo.containerStuffingBreakdown.fcl20.join(' | ')}</li>
              ) : (
                product.shippingInfo?.containerCapacity && (
                  <li><strong>20ft / 40ft Container Load:</strong> {product.shippingInfo.containerCapacity}</li>
                )
              )}
              {product.shippingInfo?.containerStuffingBreakdown?.fcl40 && (
                <li><strong>40ft FCL / High Cube Payload:</strong> {product.shippingInfo.containerStuffingBreakdown.fcl40.join(' | ')}</li>
              )}
              {product.shippingInfo?.minimumOrder && (
                <li><strong>Minimum Order Quantity (MOQ):</strong> {product.shippingInfo.minimumOrder}</li>
              )}
              {product.shippingInfo?.airTerminals && (
                <li><strong>Air Freight Terminals:</strong> {product.shippingInfo.airTerminals}</li>
              )}
              {product.shippingInfo?.inlandDepots && (
                <li><strong>Inland Container Terminals (ICD):</strong> {product.shippingInfo.inlandDepots}</li>
              )}
              <li>Container loading executed under direct merchant supervision at {product.shippingInfo?.gatewayPorts || 'Chennai / Tuticorin / Cochin Port'}.</li>
              {isTextile ? (
                <li>Garments and linens steam-conditioned and moisture-stabilized with silica gel desiccant; export pallets and bales strapped per ISPM-15 standards.</li>
              ) : product.id === 'traditional-metalcraft' ? (
                <li>Artefacts wrapped in anti-tarnish VCI protective barrier; wooden crates fumigated and ISPM-15 stamped with steel corner brackets.</li>
              ) : product.id === 'modern-home-decor' ? (
                <li>Timber seasoned and kiln-cured to 8%–12% moisture; fumigated and ISPM-15 heat-treated pallets with silica gel desiccant packs.</li>
              ) : product.id === 'oem-private-label' ? (
                <li>Consolidated container packing: Multi-SKU consolidation with clear pallet mapping, color-coded carton labels, and shrink-wrapped ISPM-15 heat-treated export pallets.</li>
              ) : (
                <li>Fumigation with Methyl Bromide or Phosphine gas certified by authorized plant quarantine agencies.</li>
              )}
            </ul>
          </div>

          {/* Compliance Statement */}
          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-lg text-xs text-emerald-950 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#0D522F] mt-0.5 flex-shrink-0" />
            <p>
              <strong>Quality & Regulatory Declaration:</strong> Each export batch is certified for compliance with international buyer tolerances, destination customs norms, and statutory bodies before shipping manifest release.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              {product.id === 't-shirts'
                ? 'Need custom Pantone color match, tech pack proto sampling, or private-label trims?'
                : product.id === 'terry-towels'
                ? 'Need custom jacquard logos, vat-dyed bleach-proof colors, or institutional sample swatches?'
                : product.id === 'bedsheets'
                ? 'Need custom embroidery logos, satin-stripe weaves, or hotel bedding lab dips?'
                : product.id === 'linens'
                ? 'Need custom woven brand labels, custom Pantone yarn-dyed checks, or retail gift packaging?'
                : product.id === 'shirting-fabrics'
                ? 'Need custom stripe repeats, exclusive tartan check development, custom widths, or liquid ammonia finishes?'
                : product.id === 'traditional-metalcraft'
                ? 'Need custom bespoke deity statues, CAD scale models, personalized commemorative engraving, or antique museum finishes?'
                : product.id === 'modern-home-decor'
                ? 'Need custom laser-engraved logos, client-specific CAD prototyping, mail-order e-commerce packaging, or custom hardware finishes?'
                : product.id === 'oem-private-label'
                ? 'Need custom mold development, bespoke corporate hamper curation, bilingual retail labels, or Amazon FBA prep?'
                : 'Need custom lab testing, Pantone color match, or client sample dispatch?'}
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenRfq(product);
              }}
              className="w-full sm:w-auto bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
            >
              <span>
                {product.id === 'shirting-fabrics'
                  ? 'Request Custom Swatch Card & Mill Proforma Quote'
                  : product.id === 'traditional-metalcraft'
                  ? 'Request Custom Artisan Consultation & RFQ'
                  : product.id === 'modern-home-decor'
                  ? 'Request Custom Prototyping & OEM Quotation'
                  : product.id === 'oem-private-label'
                  ? 'Initiate Custom Sourcing Project & Request Feasibility Analysis'
                  : 'Request Formal Proforma Quote For This Product'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
