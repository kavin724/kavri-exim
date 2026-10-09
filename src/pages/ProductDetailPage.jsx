import React, { useState } from 'react';
import {
  ArrowLeft, Download, FileText, CheckCircle2, ShieldCheck,
  Package, Send, ArrowRight, Loader2
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { submitInquiry, generateReferenceId } from '../services/inquiryService';

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
  colorPurityAdulteration: 'Adulteration & Color Purity Guarantee',
  heavyMetals: 'Heavy Metals Limits',
  totalStarch: 'Total Starch',
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
  yarnCountCalibration: 'Yarn Count Calibration',
  fabricWeightGSM: 'Fabric Weight (GSM)',
  fabricFinishing: 'Fabric Finishing',
  finishing: 'Fabric Finishing',
  dimensionalStability: 'Dimensional Stability (Shrinkage)',
  shrinkageTolerance: 'Shrinkage Tolerance',
  torquingSpirality: 'Torquing / Spirality',
  colorFastnessWashing: 'Color Fastness to Washing',
  colorFastnessRubbing: 'Color Fastness to Crocking (Rubbing)',
  colorFastnessChlorine: 'Color Fastness to Chlorine',
  colorFastnessBleaching: 'Color Fastness & Bleaching Resistance',
  colorFastnessLight: 'Color Fastness to Light',
  chemicalDyeSafety: 'Chemical & Dye Safety',
  chemicalSafety: 'Chemical Safety',
  customBranding: 'Custom Branding Capabilities',
  dyesAndChemicals: 'Dyes & Chemicals Safety',
  materialComposition: 'Material Composition',
  yarnSpecification: 'Yarn Specification',
  absorbencyRate: 'Water Absorbency Rate',
  waterRetentionCapacity: 'Total Water Retention Capacity',
  hemFinishing: 'Hem Finishing',
  hemConstruction: 'Hem Construction',
  certification: 'Compliance Certification',
  fiberComposition: 'Fiber Composition',
  pileYarnOptions: 'Pile Yarn Options',
  yarnCounts: 'Yarn Counts',
  threadCountDensity: 'Thread Count Density',
  threadCountStandard: 'Thread Count Standard',
  weaveStructure: 'Weave Structure',
  tensileStrength: 'Tensile Strength',
  tensileTearStrength: 'Tensile & Tear Strength',
  pillingResistance: 'Pilling Resistance',
  sewingCraftsmanship: 'Sewing Craftsmanship',
  workmanshipSpecifications: 'Workmanship Specifications',
  composition: 'Textile Composition',
  weightRangeGSM: 'Fabric Weight (GSM)',
  edgeFinish: 'Edge & Hem Finishing',
  washingCare: 'Washing & Care Treatment',
  fiberBase: 'Fiber Base',
  visualGradingStandard: 'Visual Grading Standard',
  widthTolerances: 'Fabric Width Tolerances',
  finishOptions: 'Finishing Options',
  fabricFinishingOptions: 'Fabric Finishing Options',
  tensileStrength: 'Tensile Strength',
  tearStrength: 'Tear Strength',
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
  sustainability: 'Sustainability & Material Standard',
  alloyMetallurgy: 'Alloy Metallurgy',
  castingTechnology: 'Casting Technologies',
  surfaceProtection: 'Surface Protection & Lacquering',
  finishingVariations: 'Finishing Variations',
  craftIntegrity: 'Craft Integrity & Guild Standards',
  timberMoistureContent: 'Timber Moisture Content',
  woodSeasoningTreatment: 'Wood Seasoning & Preservation',
  foodContactSafety: 'Food-Contact Safety (Glass, Tableware & Packaging)',
  coatingsFinishing: 'Coatings & Finishing',
  transitIntegrity: 'Transit Integrity & Drop Testing',
  turnkeyOemCapability: 'Turnkey Bespoke OEM Capability',
  vendorQualificationAudits: 'Vendor Qualification & Audits',
  thirdPartyInspection: 'Third-Party Inspection & Lab Testing',
  labelingRegulatoryAlignment: 'Labeling & Destination Regulatory Alignment',
  ecommerceFbaCompliance: 'E-Commerce & Amazon FBA Compliance'
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
  if (productId === 't-shirts') {
    return 'Fabric Weight & Knit Type';
  }
  if (productId === 'terry-towels') {
    return 'Target Fabric Weight';
  }
  if (productId === 'bedsheets') {
    return 'Thread Count & Fabric Construction';
  }
  if (productId === 'linens') {
    return 'Fabric Weight & Knit/Weave';
  }
  if (productId === 'shirting-fabrics') {
    return 'Fabric Weight & Weave Structure';
  }
  if (productId === 'traditional-metalcraft') {
    return 'Net Weight & Casting Profile';
  }
  if (productId === 'modern-home-decor') {
    return 'Material Construction & Timber Species';
  }
  if (productId === 'oem-private-label') {
    return 'Technical Standards & Material Base';
  }
  if (isTextile) {
    return 'Fabric Weight / GSM';
  }
  return 'Density / GSM / Weight';
}

export function getTestProtocolForSpec(key, value, isTextile = false) {
  if (isTextile) {
    if (key === 'fabricComposition' || key === 'fiberComposition') return 'ASTM D629 / ISO 1833';
    if (key === 'pileYarnOptions' || key === 'yarnCountCalibration' || key === 'yarnCount' || key === 'yarnCounts') return 'ASTM D1059 / ISO 2060';
    if (key === 'absorbencyRate') return 'AATCC Test Method 79';
    if (key === 'waterRetentionCapacity') return 'ASTM D4772';
    if (key === 'hemConstruction') return 'ASTM D5433 Institutional Standard';
    if (key === 'threadCountStandard' || key === 'threadCountDensity') return 'ASTM D3775';
    if (key === 'visualGradingStandard') return 'ASTM D5430 4-Point System';
    if (key === 'tensileStrength') return 'ISO 13934-1 Strip Method';
    if (key === 'tearStrength') return 'ISO 13937-2 (Elmendorf)';
    if (key === 'tensileTearStrength') return 'ASTM D5034 / ASTM D1424';
    if (key === 'pillingResistance') return 'ASTM D3512 / ISO 12945-2';
    if (key === 'workmanshipSpecifications') return 'ASTM / Buyer Tech Pack';
    if (key === 'colorFastnessBleaching') return 'ISO 105-C06 / ISO 105-N01';
    if (key === 'chemicalSafety' || key === 'chemicalDyeSafety' || key === 'dyesAndChemicals') return 'OEKO-TEX Standard 100 (Class II)';
    if (key === 'fabricFinishing' || key === 'finishing' || key === 'fabricFinishingOptions' || key === 'finishOptions') return 'AATCC 124 / Mill Finish Spec';
    if (key === 'torquingSpirality') return 'ISO 16322 / AATCC 179';
    if (key === 'colorFastnessLight') return 'ISO 105-B02 / AATCC 16';
    if (key === 'colorFastnessRubbing') return 'ISO 105-X12 / AATCC 8';
    if (key === 'colorFastnessWashing') return 'ISO 105-C06 / AATCC 61';
    if (key === 'customBranding') return 'OEM Tech Pack / QC Spec';
    if (key.includes('colorFastness')) return 'AATCC 61 / ISO 105-C06';
    if (key.includes('tensile') || key.includes('strength')) return 'ASTM D5034 / ISO 13934';
    if (key.includes('shrinkage') || key.includes('dimensional')) return 'AATCC 135 / ISO 6330';
    if (key.includes('weight') || key.includes('GSM') || key === 'fabricWeightGSM') return 'ASTM D3776 / ISO 3801';
    if (key.includes('dyes')) return 'OEKO-TEX Standard 100';
    return 'AATCC / ISO / ASTM Validated';
  }

  if (key === 'alloyMetallurgy') return 'ASTM B36 / OES Spectrometry';
  if (key === 'castingTechnology') return 'Traditional Shilpa Shastra / Cire Perdue';
  if (key === 'surfaceProtection') return 'ASTM B117 / Anti-Tarnish Lacquer';
  if (key === 'finishingVariations') return 'Artisan Guild Benchmark / Buyer Spec';
  if (key === 'craftIntegrity') return 'GI Registry (Govt. of India)';

  if (key === 'timberMoistureContent') return 'ASTM D4442 (Pin-Type Digital Meter)';
  if (key === 'woodSeasoningTreatment') return 'AWPA / Boron Vacuum-Pressure Spec';
  if (key === 'foodContactSafety') return 'US FDA 21 CFR 175/177 / CA Prop 65 / EU 1935/2004';
  if (key === 'coatingsFinishing') return 'EN 71-3 / Lead-Free & Low-VOC Certified';
  if (key === 'transitIntegrity') return 'ISTA 1A / 3A Drop Testing Protocol';
  if (key === 'turnkeyOemCapability') return 'Custom CAD / CAM Prototype Verification';

  if (key === 'vendorQualificationAudits') return 'ISO 9001 / SMETA / BSCI Social Audited';
  if (key === 'thirdPartyInspection') return 'SGS / Bureau Veritas / Intertek / NABL Protocol';
  if (key === 'labelingRegulatoryAlignment') return 'FDA 21 CFR 101 / EU FIC 1169 / GSO 9';
  if (key === 'ecommerceFbaCompliance') return 'ISTA 1A/3A & Amazon FBA Standards';

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
  if (key === 'artificialColor' || key === 'leadChromateTest' || key === 'leadChromateAdulteration' || key === 'chemicalPolishAdulteration' || key === 'colorPurityAdulteration') return 'LC-MS/MS / Chemical Test';
  if (key === 'heavyMetals') return 'ICP-MS / Codex CXS 193-1995';
  if (key === 'etoIrradiation') return 'GC-MS/MS Residue Screen';
  if (key === 'sterilizationTreatment') return 'Continuous HTST Steam';
  if (key === 'pesticideResidue') return 'GC-MS/MS Multi-Residue';
  if (key === 'bulkDensity' || key === 'bulkDensityGL') return 'ISO 948 / Graduated Cylinder';
  if (key === 'finenessMesh') return 'Standard Test Sieve Analysis';
  if (key === 'totalStarch' || key === 'foreignStarchesAddedColor' || key === 'foreignOrganicMatter' || key === 'starchPurity') return 'Microscopic & Chemical ASTA';
  if (key === 'immaturePods' || key === 'emptyPods' || key === 'lightBerries' || key === 'pinheads') return 'Agmark / ASTA Manual Count';
  if (key === 'giCertification') return 'Govt. of India GI Registry';

  return 'ASTA / ISO / FSSAI Validated';
}

export default function ProductDetailPage({ productSlug, setCurrentRoute, onOpenRfq, onOpenTds }) {
  const product = PRODUCTS_DATA.find(p => p.slug === productSlug) || PRODUCTS_DATA[0];

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPort, setInquiryPort] = useState('');
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryRefId, setInquiryRefId] = useState('');

  const categoryNames = {
    spices: 'Spices & Seasonings',
    textiles: 'Textiles & Garments',
    handicrafts: 'Heritage Handicrafts'
  };

  const parentCategoryRoute = `products?cat=${product.category || 'all'}`;
  const parentCategoryName = categoryNames[product.category] || 'Dedicated Catalog';

  const navigateTo = (route, e) => {
    if (e) e.preventDefault();
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleDirectInquiry = async (e) => {
    e.preventDefault();
    setIsSubmittingInquiry(true);
    const refCode = generateReferenceId('INQ');
    setInquiryRefId(refCode);

    await submitInquiry({
      fullName: inquiryName,
      companyName: inquiryCompany,
      email: inquiryEmail,
      portOfDischarge: inquiryPort,
      product: product.name,
      referenceId: refCode,
      inquiryType: 'Direct Product Inquiry',
      incoterm: 'CIF',
      message: `Direct inquiry for ${product.name} submitted from product specification page.`
    });

    setIsSubmittingInquiry(false);
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
            onClick={(e) => navigateTo(parentCategoryRoute, e)}
            className="text-xs sm:text-sm text-slate-600 hover:text-[#0D522F] flex items-center gap-2 transition-colors cursor-pointer font-bold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {parentCategoryName}</span>
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
                {product.id === 'terry-towels'
                  ? 'Weave & Construction: '
                  : product.id === 'traditional-metalcraft'
                  ? 'Metallurgy & Craft: '
                  : product.id === 'modern-home-decor'
                  ? 'Materials: '
                  : product.id === 'oem-private-label'
                  ? 'Scope: '
                  : (isTextile ? 'Fabric Construction: ' : 'Botanical Name: ')}
                {product.botanicalName}
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
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-5 text-center space-y-2.5">
                  <CheckCircle2 className="w-8 h-8 text-[#0D522F] mx-auto animate-bounce" />
                  <div className="text-sm font-bold text-slate-900">Inquiry Transmitted to Trade Desk</div>
                  <div className="inline-block bg-white border border-emerald-300 text-[#0D522F] font-mono text-xs px-3 py-1 rounded-md font-bold">
                    Ref: {inquiryRefId}
                  </div>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Logged to Trade CRM & sent to <strong>trade@kavriexim.com</strong>. Our operations team is preparing your formal proforma quotation and test specs for <strong>{product.name}</strong>.
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
                    disabled={isSubmittingInquiry}
                    className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmittingInquiry ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-amber-300" />
                        <span>Submit Inquiry for {product.name}</span>
                      </>
                    )}
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
                    : 'Standardized Commercial Grades & Technical Classifications'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {product.id === 't-shirts'
                    ? 'Calibrated against Indian export standards (AEPC) and international apparel buyer tech packs.'
                    : product.id === 'terry-towels'
                    ? 'Calibrated against international hospitality procurement norms (ASTM D5433).'
                    : product.id === 'bedsheets'
                    ? 'Tailored to international bed dimensions (US, UK, European, and Australian standards).'
                    : product.id === 'linens'
                    ? 'Calibrated against international home décor retail and hospitality procurement dimensions.'
                    : product.id === 'shirting-fabrics'
                    ? 'Calibrated against international garment buying benchmarks and ASTM standards.'
                    : product.id === 'traditional-metalcraft'
                    ? 'Crafted in accordance with statutory export standards (EPCH) and traditional Shilpa Shastra proportions.'
                    : product.id === 'modern-home-decor'
                    ? 'Calibrated against international home furnishings retail benchmarks and EPCH export standards.'
                    : product.id === 'oem-private-label'
                    ? 'Calibrated against statutory Indian export frameworks and destination market retail standards.'
                    : 'Calibrated against statutory Indian export and international buyer benchmarks.'}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">
                      {product.id === 't-shirts' ? 'Silhouette / Category' : product.id === 'terry-towels' ? 'Towel Category' : product.id === 'bedsheets' ? 'Bed Linen Style / Weave' : product.id === 'linens' ? 'Product Line' : product.id === 'shirting-fabrics' ? 'Fabric Category / Style' : product.id === 'traditional-metalcraft' ? 'Artefact Category' : product.id === 'modern-home-decor' ? 'Product Category' : product.id === 'oem-private-label' ? 'Product Sourcing Vertical' : 'Grade / Code'}
                    </th>
                    <th className="py-3 px-4">
                      {product.id === 't-shirts' ? 'Sizing Matrix & Cut Profile' : product.id === 'terry-towels' ? 'Standard Metric Dimensions' : product.id === 'bedsheets' ? 'Standard Mattress Sizing' : product.id === 'linens' ? 'Standard Export Sizing' : product.id === 'shirting-fabrics' ? 'Usable Cut Width & Roll Length' : product.id === 'traditional-metalcraft' ? 'Standard Dimensional Sizing' : product.id === 'modern-home-decor' ? 'Dimensions & Standard Sizing' : product.id === 'oem-private-label' ? 'Target SKUs & Material Scope' : 'Dimension / Sieve / Spec'}
                    </th>
                    {product.id === 'terry-towels' && (
                      <th className="py-3 px-4">Imperial Sizing</th>
                    )}
                    <th className="py-3 px-4">{getDensityColumnLabel(product.id, isTextile)}</th>
                    <th className="py-3 px-4">
                      {product.id === 't-shirts' ? 'Yarn Count & Dye Specification' : product.id === 'terry-towels' ? 'Pile Loop Construction' : product.id === 'bedsheets' ? 'Yarn Count & Dye Finish' : product.id === 'linens' ? 'Construction & Finishing Details' : product.id === 'shirting-fabrics' ? 'Yarn Count & Dye Specification' : product.id === 'traditional-metalcraft' ? 'Metallurgy & Surface Finish' : product.id === 'modern-home-decor' ? 'Surface Finish & Colorways' : product.id === 'oem-private-label' ? 'Private Label & Packaging Capabilities' : 'Color & Appearance'}
                    </th>
                    <th className="py-3 px-4">
                      {product.id === 't-shirts' ? 'Primary Commercial Applications' : product.id === 'terry-towels' ? 'Primary Use Sector' : product.id === 'bedsheets' ? 'Primary Target Markets' : product.id === 'linens' ? 'Target Industry Applications' : product.id === 'shirting-fabrics' ? 'Primary Commercial Applications' : product.id === 'traditional-metalcraft' ? 'Primary Target Applications' : product.id === 'modern-home-decor' ? 'Commercial Target Markets' : product.id === 'oem-private-label' ? 'Primary Commercial Sectors' : 'Commercial Applications'}
                    </th>
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
                      {product.id === 'terry-towels' && (
                        <td className="py-3 px-4 font-mono text-slate-600">
                          {g.imperial}
                        </td>
                      )}
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
                <span>
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
                    : (isTextile ? 'Textile Construction Specifications' : 'Physico-Chemical Quality Limits')}
                </span>
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
                  <span>{['t-shirts', 'terry-towels', 'bedsheets', 'linens'].includes(product.id) ? 'Approved Export Packaging Solutions' : product.id === 'traditional-metalcraft' ? 'Approved Export Packaging & Protection' : product.id === 'oem-private-label' ? 'Approved Export Packaging & Consolidation Options' : 'Approved Export Packaging Options'}</span>
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
                <div className="text-xs text-slate-500 mb-2 italic">
                  {product.id === 't-shirts'
                    ? 'Need custom branded polybags, woven damask tags, EAN/UPC barcode stickers, or custom pre-pack ratios?'
                    : product.id === 'terry-towels'
                    ? 'Need custom jacquard logos, vat-dyed bleach-proof colors, institutional bulk bale packing, or private-label hangtags?'
                    : product.id === 'bedsheets'
                    ? 'Need custom embroidery logos, satin-stripe weaves, specific mattress pocket depths, or private-label presentation boxes?'
                    : product.id === 'linens'
                    ? 'Need custom woven brand labels, custom Pantone yarn-dyed checks, embroidered monograms, or retail gift packaging?'
                    : product.id === 'shirting-fabrics'
                    ? 'Need custom stripe repeats, exclusive tartan check development, custom widths, or liquid ammonia finishes?'
                    : product.id === 'traditional-metalcraft'
                    ? 'Need custom bespoke deity statues, CAD scale models, personalized commemorative engraving, or antique museum finishes?'
                    : product.id === 'modern-home-decor'
                    ? 'Need custom laser-engraved logos, client-specific CAD prototyping, mail-order e-commerce packaging, or custom hardware finishes?'
                    : product.id === 'oem-private-label'
                    ? 'Need custom mold development, bespoke corporate hamper curation, bilingual retail labels, or Amazon FBA prep?'
                    : 'Need private-label barcodes, custom polybags, or nitrogen flushing?'}
                </div>
                <button
                  type="button"
                  onClick={() => onOpenRfq(product)}
                  className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>
                    {product.id === 't-shirts'
                      ? 'Request Custom Packaging & OEM Solutions'
                      : ['terry-towels', 'bedsheets'].includes(product.id)
                      ? 'Request Custom Packaging & Institutional Quotation'
                      : product.id === 'linens'
                      ? 'Request Custom Packaging & OEM Linen Quotation'
                      : product.id === 'shirting-fabrics'
                      ? 'Request Custom Swatch Card & Mill Proforma Quote'
                      : product.id === 'traditional-metalcraft'
                      ? 'Request Custom Artisan Consultation & RFQ'
                      : product.id === 'modern-home-decor'
                      ? 'Request Custom Prototyping & OEM Quotation'
                      : product.id === 'oem-private-label'
                      ? 'Initiate Custom Sourcing Project & Request Feasibility Analysis'
                      : 'Request Custom Packaging Solution'}
                  </span>
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
