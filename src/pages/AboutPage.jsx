import React from 'react';
import { 
  Building2, Compass, ShieldCheck, HeartHandshake, 
  Globe, ArrowRight 
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
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white aspect-square">
              <img 
                src="/assets/images/hero-spices.jpg" 
                alt="South Indian Export Heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md">
                <span className="text-xs text-[#0D522F] font-mono font-bold block">Direct Origin Networks</span>
                <span className="text-sm font-bold text-slate-900">Verified Sourcing Across Tamil Nadu & Kerala</span>
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
