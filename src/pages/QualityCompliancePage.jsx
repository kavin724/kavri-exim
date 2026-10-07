import React from 'react';
import { 
  ShieldCheck, CheckCircle2, FlaskConical, Package, ArrowRight 
} from 'lucide-react';

export default function QualityCompliancePage({ onOpenRfq }) {
  const steps = [
    {
      num: '01',
      title: 'Farm & Mill-Gate Sourcing',
      desc: 'Direct procurement from verified cultivator cooperatives across Tamil Nadu and Western Ghats, plus spinning and weaving mills in Tirupur and Coimbatore.'
    },
    {
      num: '02',
      title: 'Destoning & Physical Cleaning',
      desc: 'Multi-deck vibrating screens and density destoners eliminate dirt and foreign matter to achieve minimum 99.5% commodity cleanliness.'
    },
    {
      num: '03',
      title: 'Optical Sortex & Fabric Inspection',
      desc: 'Bichromatic optical cameras reject discolored peppercorns and pale pods; 4-Point system fabric inspection checks textiles for zero running defects.'
    },
    {
      num: '04',
      title: 'Triple Magnetic & Metal Detection',
      desc: 'Rare-earth magnetic grids (10,000+ Gauss) and conveyor aperture metal detectors ensure complete absence of metallic contaminants.'
    },
    {
      num: '05',
      title: 'Barrier Packaging & Moisture Control',
      desc: 'High-barrier EVOH vacuum pouches, nitrogen-purged cartons, or heavy LDPE waterproof wrap ensure fresh arrival across sea transit.'
    }
  ];

  const labProtocols = [
    { title: 'Moisture Content Determination', std: 'Karl Fischer / Dean-Stark (Max 10-11%)', agency: 'ISO 939 / ASTA 2.0' },
    { title: 'Volatile Essential Oil Extraction', std: 'Steam Clevenger Distillation (Min 6.5 - 8.5%)', agency: 'ISO 6571 / ASTA 5.0' },
    { title: 'Aflatoxin B1 & Total Aflatoxins', std: 'HPLC-FLD / LC-MS/MS (< 2 ppb B1 / < 4 ppb Total)', agency: 'EU Reg. (EU) 2023/915' },
    { title: 'Multi-Pesticide Residue Analysis (MRL)', std: 'GC-MS/MS & LC-MS/MS (500+ compounds tested)', agency: 'EU & US FDA MRL Compliant' },
    { title: 'Textile Color Fastness & Shrinkage', std: 'Washing Grade 4-5 / Max 4-5% residual shrinkage', agency: 'ISO 105 / AATCC 135' },
    { title: 'Chemical Safety & Dyes', std: 'OEKO-TEX Standard 100 / Zero Azo Dyes', agency: 'REACH / Global Standards' }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold text-[#0D522F] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Rigorous Food Safety & Textile Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
            Quality Assurance & Lab Protocols
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            International food processors, retail buyers, and garment brands demand consistent parameters. Discover our standardized 5-step workflow and third-party laboratory verification framework.
          </p>
        </div>

        {/* 5-Step Visual Workflow */}
        <div className="mb-20">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
              The 5-Step Origin-to-Port Quality Lifecycle
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Every export consignment undergoes controlled stages before vessel container loading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((st) => (
              <div key={st.num} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#0D522F]/40 transition-colors shadow-sm">
                <div>
                  <div className="text-3xl font-black text-[#0D522F] font-mono mb-3">
                    {st.num}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[10px] text-[#0D522F] font-bold gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Check Gate</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Testing Standards Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#0D522F] mb-2">
              <FlaskConical className="w-4 h-4" />
              <span>Standard Laboratory Testing Parameters</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
              Export Certificate of Analysis (COA) Verification
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Consignments are tested in NABL-accredited laboratories. Third-party pre-shipment inspection (SGS, Eurofins, Bureau Veritas) is available upon buyer request.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Test Parameter</th>
                    <th className="py-2.5 px-3">Guaranteed Benchmark</th>
                    <th className="py-2.5 px-3">Testing Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {labProtocols.map((lab) => (
                    <tr key={lab.title} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{lab.title}</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#0D522F]">{lab.std}</td>
                      <td className="py-2.5 px-3 text-slate-500">{lab.agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Export Packaging Guidelines */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-sm font-bold text-[#0D522F] mb-2">
                <Package className="w-4 h-4" />
                <span>Export Packaging Specifications</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
                Moisture & Pest Barrier Protection
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">High-Barrier Vacuum Pouching:</strong>
                  5kg & 10kg EVOH food-grade vacuum pouches with nitrogen flushing for high-value Cardamom.
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Multi-Layer PP / Kraft Bags:</strong>
                  25kg & 50kg poly-lined polypropylene bags for Black Pepper and Turmeric shipments.
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Textile Master Cartons:</strong>
                  Heavy-duty 5-ply export shippers with inner polybag moisture barrier and desiccant.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onOpenRfq()}
                className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <span>Request Lot Quality Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
