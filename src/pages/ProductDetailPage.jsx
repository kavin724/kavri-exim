import React, { useState } from 'react';
import { 
  ArrowLeft, Download, FileText, CheckCircle2, ShieldCheck, 
  Package, Send, ArrowRight 
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

export const SPEC_LABEL_MAP = {
  moisture: 'Moisture Content',
  volatileOil: 'Volatile Essential Oil',
  bulkDensity: 'Bulk Density',
  bulkDensityGL: 'Bulk Density (GL)',
  immaturePods: 'Immature / Malformed Capsules',
  emptyPods: 'Empty / Light Capsules',
  foreignMatter: 'Foreign Matter',
  extraneousMatter: 'Extraneous / Foreign Matter',
  aflatoxinB1: 'Aflatoxin B1',
  totalAflatoxins: 'Total Aflatoxins',
  aflatoxins: 'Aflatoxins (B1 & Total)',
  totalAsh: 'Total Ash',
  acidInsolubleAsh: 'Acid-Insoluble Ash',
  artificialColor: 'Artificial Color (Malachite Green / Tartrazine)',
  microbialStandards: 'Microbial Standards',
  dryingMethod: 'Curing & Drying Method',
  piperineContent: 'Piperine Content',
  lightBerries: 'Light Berries',
  pinheads: 'Pinheads',
  nvee: 'Non-Volatile Ether Extract (NVEE)',
  ochratoxinA: 'Ochratoxin A (OTA)',
  etoIrradiation: 'Ethylene Oxide (ETO) & Irradiation',
  sterilizationTreatment: 'Sterilization Treatment',
  salmonella: 'Salmonella',
  eColi: 'E. Coli',
  cultivation: 'Cultivation & Growing Method',
  curcuminContent: 'Curcumin Content',
  defectiveRhizomes: 'Defective / Damaged Rhizomes',
  chemicalPolishAdulteration: 'Chemical Polish & Color Adulteration',
  heavyMetals: 'Heavy Metals Limits',
  leadChromateTest: 'Lead Chromate Test',
  leadChromateAdulteration: 'Lead Chromate Test',
  foreignOrganicMatter: 'Foreign Organic Matter',
  starchPurity: 'Starch Purity',
  giCertification: 'GI Certification',
  pesticideResidue: 'Pesticide Residue Limits',
  finenessMesh: 'Fineness / Sieve Mesh',
  foreignStarchesAddedColor: 'Foreign Starches & Added Colour',
  yeastAndMould: 'Yeast & Mould',
  fabricComposition: 'Fabric Composition',
  yarnCount: 'Yarn Count',
  fabricWeightGSM: 'Fabric Weight (GSM)',
  finishing: 'Fabric Finishing',
  shrinkageTolerance: 'Shrinkage Tolerance',
  colorFastnessWashing: 'Color Fastness to Washing',
  colorFastnessRubbing: 'Color Fastness to Rubbing',
  colorFastnessChlorine: 'Color Fastness to Chlorine',
  colorFastnessLight: 'Color Fastness to Light',
  dyesAndChemicals: 'Dyes & Chemicals Safety',
  materialComposition: 'Material Composition',
  yarnSpecification: 'Yarn Specification',
  absorbencyRate: 'Absorbency Rate',
  hemFinishing: 'Hem Finishing',
  certification: 'Compliance Certification',
  fiberComposition: 'Fiber Composition',
  yarnCounts: 'Yarn Counts',
  threadCountDensity: 'Thread Count Density',
  weaveStructure: 'Weave Structure',
  dimensionalStability: 'Dimensional Stability',
  tensileStrength: 'Tensile Strength',
  sewingCraftsmanship: 'Sewing Craftsmanship',
  composition: 'Textile Composition',
  weightRangeGSM: 'Fabric Weight (GSM)',
  edgeFinish: 'Edge & Hem Finishing',
  washingCare: 'Washing & Care Treatment',
  fiberBase: 'Fiber Base',
  widthTolerances: 'Fabric Width Tolerances',
  finishOptions: 'Finishing Options',
  tensileTearStrength: 'Tensile & Tear Strength',
  inspectionStandard: 'Inspection Standard',
  stoneSource: 'Stone Provenance',
  woodTreatment: 'Wood Treatment & Seasoning',
  qualityInspection: 'Quality & Pre-Shipment Inspection',
  weatherResistance: 'Weather Resistance Sealant',
  craftsmanship: 'Artisan Craftsmanship',
  surfaceFinish: 'Surface Finish & Coatings',
  durabilityPackaging: 'Packaging & Transit Durability',
  servicesIncluded: 'Services Included',
  leadTime: 'Production & Dispatch Lead Time',
  minimumOrderValue: 'Minimum Order Value (MOV)',
  sustainability: 'Sustainability & Material Standard'
};

export function formatSpecKey(key) {
  if (SPEC_LABEL_MAP[key]) return SPEC_LABEL_MAP[key];
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

export function getDensityColumnLabel(productId, isTextile = false) {
  if (['green-cardamom', 'black-pepper', 'kolli-pepper'].includes(productId)) {
    return 'Bulk Density';
  }
  if (['salem-turmeric', 'erode-turmeric'].includes(productId)) {
    return 'Hardness';
  }
  if (productId === 'turmeric-powder') {
    return 'Texture';
  }
  if (isTextile) {
    return 'Fabric Weight / GSM';
  }
  return 'Density / GSM / Weight';
}

export function getTestProtocolForSpec(key, value, isTextile = false) {
  if (isTextile) {
    if (key.includes('colorFastness')) return 'AATCC 61 / ISO 105-C06';
    if (key.includes('tensile') || key.includes('strength')) return 'ASTM D5034 / ISO 13934';
    if (key.includes('shrinkage') || key.includes('dimensional')) return 'AATCC 135 / ISO 6330';
    if (key.includes('weight') || key.includes('GSM') || key === 'fabricWeightGSM') return 'ASTM D3776 / ISO 3801';
    if (key.includes('dyes')) return 'OEKO-TEX Standard 100';
    if (key === 'absorbencyRate') return 'AATCC 79';
    return 'AATCC / ISO / ASTM Validated';
  }
  
  if (key === 'moisture') return 'ASTA 2.0 / ISO 939 (Toluene)';
  if (key === 'volatileOil') return 'ISO 6571 (Steam Distillation)';
  if (key === 'piperineContent') return 'HPLC / ASTA 7.0 / ISO 5564';
  if (key === 'curcuminContent') return 'HPLC / ASTA 18.0 / ISO 5566';
  if (key === 'extraneousMatter' || key === 'foreignMatter') return 'ASTA 3.0 / ISO 927';
  if (key === 'defectiveRhizomes') return 'Manual & Sortex Inspection';
  if (key === 'totalAsh') return 'ASTA 3.1 / ISO 928';
  if (key === 'acidInsolubleAsh') return 'ASTA 4.0 / ISO 930';
  if (key === 'nvee') return 'ISO 1108 / ASTA Method';
  if (key === 'aflatoxins' || key === 'aflatoxinB1' || key === 'totalAflatoxins') return 'HPLC-FLD / EU 2023/915';
  if (key === 'ochratoxinA') return 'HPLC / IAC Cleanup (EU)';
  if (key === 'microbialStandards' || key === 'salmonella' || key === 'eColi' || key === 'yeastAndMould') return 'ISO 6579 / FDA BAM';
  if (key === 'artificialColor' || key === 'leadChromateTest' || key === 'leadChromateAdulteration' || key === 'chemicalPolishAdulteration') return 'LC-MS/MS / Chemical Test';
  if (key === 'heavyMetals') return 'ICP-MS / Codex CXS 193-1995';
  if (key === 'etoIrradiation') return 'GC-MS/MS Residue Screen';
  if (key === 'sterilizationTreatment') return 'Continuous HTST Steam';
  if (key === 'pesticideResidue') return 'GC-MS/MS Multi-Residue';
  if (key === 'bulkDensity' || key === 'bulkDensityGL') return 'ISO 948 / Graduated Cylinder';
  if (key === 'finenessMesh') return 'Standard Test Sieve Analysis';
  if (key === 'foreignStarchesAddedColor' || key === 'foreignOrganicMatter' || key === 'starchPurity') return 'Microscopic & Chemical ASTA';
  if (key === 'immaturePods' || key === 'emptyPods' || key === 'lightBerries' || key === 'pinheads') return 'Agmark / ASTA Manual Count';
  if (key === 'giCertification') return 'Govt. of India GI Registry';

  return 'ASTA / ISO / FSSAI Validated';
}

export default function ProductDetailPage({ productSlug, setCurrentRoute, onOpenRfq, onOpenTds }) {
  const product = PRODUCTS_DATA.find(p => p.slug === productSlug) || PRODUCTS_DATA[0];

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryPort, setInquiryPort] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const navigateTo = (route, e) => {
    if (e) e.preventDefault();
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectInquiry = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const isTextile = product.category === 'textiles';

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => navigateTo('products', e)}
            className="text-xs sm:text-sm text-slate-600 hover:text-[#0D522F] flex items-center gap-1.5 transition-colors cursor-pointer font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </button>

          <span className="text-xs text-[#0D522F] font-mono font-bold">
            HSN: {product.hsnCode}
          </span>
        </div>

        {/* Hero Section of Product */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          {/* Product Image & Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white aspect-4/3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-slate-800 border border-slate-200 font-bold shadow-sm">
                Origin: {product.origin}
              </div>
              <div className="absolute bottom-4 right-4 bg-emerald-50/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-[#0D522F] border border-emerald-200 shadow-sm">
                {product.tag}
              </div>
            </div>

            {/* Quick Action Bar under image */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onOpenTds(product)}
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#0D522F]" />
                <span>Download TDS Sheet</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenRfq(product)}
                className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md shadow-[#0D522F]/20 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Instant Proforma Quote</span>
              </button>
            </div>
          </div>

          {/* Product Summary & Direct Lead Capture */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest text-[#0D522F] font-bold font-mono">
                  {product.division}
                </span>
                {product.compliance && (
                  <span className="text-[11px] font-semibold bg-emerald-50 text-[#0D522F] px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-xs">
                    {product.compliance}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm text-slate-500 italic mt-1 font-medium">
                Botanical Name: {product.botanicalName}
              </p>
              {product.geographicalIndication && (
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-amber-900 bg-amber-50/90 border border-amber-300 px-2.5 py-1 rounded-lg font-medium">
                  <span className="font-bold text-amber-800">Geographical Indication:</span>
                  <span>{product.geographicalIndication}</span>
                </div>
              )}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Core Export Parameters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-slate-200 text-xs shadow-sm">
              <div>
                <span className="text-slate-400 block font-medium">Min. Order:</span>
                <span className="font-bold text-slate-900" title={product.shippingInfo?.minimumOrder}>
                  {product.shippingInfo?.minimumOrder?.includes('|')
                    ? product.shippingInfo.minimumOrder.split('|')[0].trim()
                    : (product.shippingInfo?.minimumOrder?.split('/')[0] || '1 FCL')}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Container Load:</span>
                <span className="font-bold text-slate-900" title={product.shippingInfo?.containerCapacity}>
                  {product.shippingInfo?.containerCapacity?.split('|')[0]?.trim() || '20ft FCL'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Gateways:</span>
                <span className="font-bold text-[#0D522F]" title={product.shippingInfo?.gatewayPorts}>
                  {product.shippingInfo?.gatewayPorts || 'Chennai / Tuticorin / Cochin'}
                </span>
              </div>
            </div>

            {/* Direct Pre-populated Product Inquiry Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 text-sm font-bold text-slate-900 mb-3">
                <FileText className="w-4 h-4 text-[#0D522F]" />
                <span>Direct B2B Inquiry for {product.name}</span>
              </div>

              {inquirySubmitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-[#0D522F] mx-auto" />
                  <div className="text-sm font-bold text-slate-900">Inquiry Received</div>
                  <p className="text-xs text-slate-600">
                    Our trade desk is preparing proforma quotation and test specs for <strong>{product.name}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDirectInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={inquiryName}
                      onChange={e => setInquiryName(e.target.value)}
                      className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Company Name *"
                      value={inquiryCompany}
                      onChange={e => setInquiryCompany(e.target.value)}
                      className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Business Email *"
                      value={inquiryEmail}
                      onChange={e => setInquiryEmail(e.target.value)}
                      className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Discharge Port (e.g. Jebel Ali, Rotterdam)"
                      value={inquiryPort}
                      onChange={e => setInquiryPort(e.target.value)}
                      className="bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                    <span>Submit Inquiry for {product.name}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Technical Specification Matrix */}
        <div className="space-y-8 mb-16">

          {/* Visual Showcase for Product Lines with Dedicated Display Pics */}
          {product.grades?.some(g => g.image) && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Featured Product Display & Artisanal Selections
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-definition catalog previews for international interior retailers and boutique importers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.grades.filter(g => g.image).map((item) => (
                  <div key={item.name} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:shadow-md transition-all flex flex-col group">
                    <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#0D522F] shadow-sm">
                        Export Grade
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.name}</h4>
                        <p className="text-xs text-slate-600 mt-1">{item.usage}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 font-mono">{item.size}</span>
                        <span className="font-bold text-[#0D522F]">{item.color}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Grades Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Standardized Commercial Grades & Technical Classifications
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Calibrated against statutory Indian export and international buyer benchmarks.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Grade / Code</th>
                    <th className="py-3 px-4">Dimension / Sieve / Spec</th>
                    <th className="py-3 px-4">{getDensityColumnLabel(product.id, isTextile)}</th>
                    <th className="py-3 px-4">Color & Appearance</th>
                    <th className="py-3 px-4">Commercial Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {product.grades?.map((g) => (
                    <tr key={g.name} className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        <div>{g.name}</div>
                        {product.compliance?.includes('AGMARK') && g.code && (
                          <span className="inline-block mt-1 text-[10px] bg-emerald-50 text-[#0D522F] border border-emerald-200 px-1.5 py-0.5 rounded font-mono font-bold">
                            AGMARK: {g.code}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-[#0D522F]">
                        {g.size}
                      </td>
                      <td className="py-3 px-4 font-mono">
                        {g.density}
                      </td>
                      <td className="py-3 px-4">
                        {g.color}
                      </td>
                      <td className="py-3 px-4 text-slate-500">
                        {g.usage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chemical & Quality Limits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0D522F]" />
                <span>{isTextile ? 'Textile Construction Specifications' : 'Physico-Chemical Quality Limits'}</span>
              </h3>
              <div className="space-y-2">
                {product.technicalSpecs && Object.entries(product.technicalSpecs).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-start py-2.5 border-b border-slate-100 last:border-0 text-xs sm:text-sm">
                    <div className="sm:col-span-5 text-slate-600 font-medium leading-relaxed">
                      {formatSpecKey(k)}
                    </div>
                    <div className="sm:col-span-7 font-mono font-bold text-slate-900 leading-relaxed sm:text-right">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging & Logistics Containerization */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-600" />
                  <span>Approved Export Packaging Options</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  {product.packagingOptions?.map((pkg, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0D522F] mt-0.5 flex-shrink-0" />
                      <span>{pkg}</span>
                    </li>
                  ))}
                </ul>

                {/* Logistics & Container Stuffing Breakdown if present */}
                {product.shippingInfo?.containerStuffingBreakdown && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      Container Stuffing Capacity & Loading
                    </h4>
                    <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      {product.shippingInfo.containerStuffingBreakdown.fcl20 && (
                        <div>
                          <strong className="text-slate-900 block font-semibold mb-1">20ft FCL Container:</strong>
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                            {product.shippingInfo.containerStuffingBreakdown.fcl20.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {product.shippingInfo.containerStuffingBreakdown.fcl40 && (
                        <div>
                          <strong className="text-slate-900 block font-semibold mb-1">40ft FCL / High Cube Container:</strong>
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                            {product.shippingInfo.containerStuffingBreakdown.fcl40.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {product.shippingInfo.airTerminals && (
                        <div className="pt-2 border-t border-slate-200/60 text-[11px]">
                          <span className="font-semibold text-slate-700">Air Freight Terminals: </span>
                          <span className="text-[#0D522F] font-medium">{product.shippingInfo.airTerminals}</span>
                        </div>
                      )}
                      {product.shippingInfo.inlandDepots && (
                        <div className="pt-2 border-t border-slate-200/60 text-[11px]">
                          <span className="font-semibold text-slate-700">Inland Dry Terminals (ICD): </span>
                          <span className="text-[#0D522F] font-medium">{product.shippingInfo.inlandDepots}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-2">
                  Need private-label barcodes, custom polybags, or nitrogen flushing?
                </div>
                <button
                  type="button"
                  onClick={() => onOpenRfq(product)}
                  className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1"
                >
                  <span>Request Custom Packaging Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
