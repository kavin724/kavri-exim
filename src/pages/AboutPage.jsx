import React from 'react';
import { 
  Building2, Compass, ShieldCheck, HeartHandshake, 
  Globe, ArrowRight, Target, CheckCircle2 
} from 'lucide-react';

export default function AboutPage({ onOpenRfq }) {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold text-[#0D522F] mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Identity & Trade Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
            Bridging South India's Harvest & Manufacturing with Global Markets
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Kavri Exim represents the international export brand operated by <strong>Kavri Spice Exim</strong>, a legally registered Indian merchant export enterprise based in Tamil Nadu.
          </p>
        </div>

        {/* Corporate Profile & Legal Transparency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
              The Kavri Spice Exim Story
            </h2>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-800 space-y-1.5 shadow-xs">
              <span className="font-bold text-[#0D522F] block font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
                Origin of Our Name: The River Kaveri
              </span>
              <p className="leading-relaxed">
                The company name <strong>"Kavri"</strong> is derived from a stylized version of the sacred <strong>River Kaveri</strong>, on whose banks the historic city of <strong>Erode</strong> is located and where the company was founded. Rooted in Erode—famed worldwide as South India’s turmeric capital—our enterprise draws inspiration from the perennial Kaveri river that has sustained the region’s rich soil, agricultural heritage, and merchant trade for generations.
              </p>
            </div>

            <p>
              South India's agrarian heartlands—from the Cardamom Hills of Idukki and the Kolli Hills of Tamil Nadu to the fertile Kaveri river basin—produce some of the planet's most aromatic, potent spices. Parallelly, Tamil Nadu's industrial belts in Tirupur, Coimbatore, and Karur constitute global powerhouses of export knitwear, home textiles, and cotton fabrics.
            </p>
            <p>
              <strong>Kavri Spice Exim</strong> was established to provide international buyers with a transparent, direct origin-to-port export bridge across both agricultural commodities and manufactured goods. Operating under our global trade brand <strong>Kavri Exim</strong>, we eliminate speculative middlemen by coordinating directly with verified cultivator cooperatives, spinning mills, and artisan clusters.
            </p>
            
            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 text-xs shadow-sm">
              <span className="text-[#0D522F] font-bold uppercase tracking-wider block font-mono">
                Statutory Corporate Registration Credentials:
              </span>
              <div><strong className="text-slate-900">Registered Entity:</strong> Kavri Spice Exim (Founded in Erode, Tamil Nadu, India)</div>
              <div><strong className="text-slate-900">Trade Division Portal:</strong> Kavri Exim (kavriexim.com)</div>
              <div><strong className="text-slate-900">DGFT Importer-Exporter Code (IEC):</strong> ANNPR0870K</div>
              <div><strong className="text-slate-900">Spices Board of India CRES:</strong> [CRES-NUMBER]</div>
              <div><strong className="text-slate-900">Goods & Services Tax (GSTIN):</strong> 33ANNPR0870K1ZM</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img 
                  src="./assets/images/competencies-collage.jpg" 
                  alt="Kavri Exim Core Competencies: Spices, Textiles, and Heritage Handicrafts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-[#0D522F] uppercase tracking-wider block">
                    Integrated Export Divisions
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">
                    Spices • Textiles & Garments • Heritage Handicrafts
                  </span>
                </div>
                <span className="text-[10px] bg-emerald-50 text-[#0D522F] border border-emerald-200 font-bold px-2.5 py-1 rounded-full whitespace-nowrap hidden sm:inline-block">
                  Direct Origin
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Our Vision & Our Mission */}
        <div className="mb-20">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <div className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#0D522F] bg-emerald-100 px-3 py-1 rounded-full mb-2">
              Corporate Direction
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
              Our Vision & Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white border-2 border-emerald-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0D522F] border border-emerald-200 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D522F] block mb-2">
                  Long-Term Horizon
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  To be the benchmark export partner bridging South India and the world—delivering origin-certified spices, custom textiles, and authentic heritage handicrafts through radical transparency, ethical sourcing, and uncompromising international compliance.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-[#0D522F]">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Global Quality Leadership • Sustainable Trade • Traceable Provenance</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white border-2 border-emerald-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block mb-2">
                  Operational Core
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  To empower global importers, institutional repackers, and enterprise brands with direct-origin traceability, lab-verified purity, and seamless port-to-port logistics—delivering unwavering quality, transparent pricing, and contractual dependability in every consignment.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-[#0D522F]">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Standardized Lab Testing • 100% Contract Integrity • Direct Port Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
              Our Merchant Trade Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">1. Origin Provenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct traceability from plantation auction blocks and regional cultivator clusters. Zero adulteration, zero artificial polishing.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">2. Standardized Grading</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mechanical screening, optical Sortex sorting, and guaranteed physical parameters (moisture, density, GSM, thread count).
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">3. Ethical Commerce</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fair cultivator compensation empowering regional producers while delivering reliable, competitive pricing to B2B buyers.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">4. Turnkey Customization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete OEM private labeling, custom garment manufacturing, and multi-commodity export consolidation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-3">
            Partner with a Legally Compliant Indian Exporter
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            We welcome long-term supply contracts, annual distributor quotas, and institutional procurement partnerships.
          </p>
          <button
            type="button"
            onClick={() => onOpenRfq()}
            className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-8 py-3.5 rounded-xl text-sm inline-flex items-center space-x-2 shadow-lg shadow-[#0D522F]/20 transition-all cursor-pointer"
          >
            <span>Initiate Direct Trade Inquiry</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </div>
  );
}
