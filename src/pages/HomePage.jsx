import React from 'react';
import { 
  ArrowRight, ShieldCheck, Compass, Target, 
  FileText, CheckCircle2, Award, Sparkles
} from 'lucide-react';

export default function HomePage({ setCurrentRoute, onOpenRfq }) {
  const navigateTo = (route, e) => {
    if (e) e.preventDefault();
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-slate-800">
      
      {/* 1. HERO SECTION & SHORT INTRO ABOUT THE COMPANY */}
      <section className="relative min-h-[75vh] flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden py-14 lg:py-20">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0D522F_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Company Intro & Positioning */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Origin Chip */}
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D522F] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0D522F] animate-pulse"></span>
                <span>South Indian Merchant Exporters • Tamil Nadu & Kerala</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 font-['Plus_Jakarta_Sans']">
                Global Quality Sourcing, <br />
                <span className="text-[#0D522F]">
                  Rooted in South India
                </span>
              </h1>

              {/* Company Introduction Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                <strong>Kavri Exim</strong> is an international merchant export enterprise headquartered in Tamil Nadu. We bridge South India’s most prized agrarian harvest and manufacturing hubs with global importers across three core divisions: origin-grade <strong>Spices & Seasonings</strong>, precision-crafted <strong>Textiles & Garments</strong>, and authentic <strong>Indian Heritage Handicrafts</strong>.
              </p>

              {/* Dual Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#core-competencies"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('core-competencies')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg shadow-[#0D522F]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Explore Core Competencies</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] text-amber-300" />
                </a>

                <button
                  type="button"
                  id="hero-instant-quote-btn"
                  onClick={() => onOpenRfq()}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base border border-slate-300 hover:border-[#0D522F] flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#0D522F]" />
                  <span>Request Instant Proforma Quote</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D522F]" />
                  <span className="font-semibold text-slate-800">Spices Board Registered (CRES)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D522F]" />
                  <span className="font-semibold text-slate-800">DGFT Validated IEC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D522F]" />
                  <span className="font-semibold text-slate-800">FSSAI Central Export Licensed</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Feature Banner */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img 
                  src="./assets/images/hero-spices.jpg" 
                  alt="Kavri Exim Multi-Commodity Export Line" 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0D522F] uppercase tracking-wider">
                      Export Divisions
                    </span>
                    <span className="text-[10px] bg-emerald-50 text-[#0D522F] border border-emerald-200 font-bold px-2 py-0.5 rounded-full">
                      Direct Farm & Mill Origin
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-slate-500 block text-[11px] font-medium">Division 01</span>
                      <strong className="text-slate-900 font-bold text-xs">Spices</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-slate-500 block text-[11px] font-medium">Division 02</span>
                      <strong className="text-slate-900 font-bold text-xs">Textiles</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-slate-500 block text-[11px] font-medium">Division 03</span>
                      <strong className="text-slate-900 font-bold text-xs">Handicrafts</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. OUR VISION & OUR MISSION SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D522F] font-mono block mb-2">
              Corporate Direction & Values
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
              Our Vision & Our Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5">
              The foundational principles driving our merchant trade operations, global customer relationships, and quality commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* OUR VISION CARD */}
            <div className="bg-white border-2 border-emerald-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0D522F] mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7 stroke-[2]" />
                </div>
                <div className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#0D522F] bg-emerald-50 px-3 py-1 rounded-full mb-3">
                  Long-Term Outlook
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  To be globally recognized as South India’s premier and most transparent merchant export partner—connecting international markets with pristine, origin-certified spices, export-grade custom textiles, and authentic heritage handicrafts while championing grower welfare, environmental integrity, and uncompromising international regulatory benchmarks.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-[#0D522F]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Global Quality Leadership • Sustainable Trade • Traceable Provenance</span>
              </div>
            </div>

            {/* OUR MISSION CARD */}
            <div className="bg-white border-2 border-emerald-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 stroke-[2]" />
                </div>
                <div className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full mb-3">
                  Operational Commitment
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  To empower global importers, institutional repackers, and corporate brands with direct farm-gate and mill-floor traceability, standardized laboratory-tested grading, zero-chemical processing, and seamless containerized port logistics, ensuring unwavering consistency, honest pricing, and contractual dependability in every export consignment.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-[#0D522F]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Standardized Lab Testing • 100% Contract Integrity • Direct Port Delivery</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR CORE COMPETENCIES SECTION (Interactive 3 Product Lines with Popping Hover Animation) */}
      <section id="core-competencies" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D522F] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Commodity Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
              Our Core Competencies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore our three dedicated export product lines. Click any division below to view its complete commercial grade catalog, laboratory benchmarks, and technical data sheets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            
            {/* COMPETENCY CARD 1: SPICES & SEASONINGS */}
            <div 
              onClick={(e) => navigateTo('products?cat=spices', e)}
              className="group relative bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0D522F] transform hover:-translate-y-3 hover:scale-[1.025] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src="./assets/images/hero-spices.jpg" 
                    alt="Spices and Seasonings" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0D522F] border border-emerald-200 shadow-sm">
                    Division 01
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block font-mono">
                      Spices Board of India CRES
                    </span>
                    <h3 className="text-2xl font-black text-white font-['Plus_Jakarta_Sans']">
                      Spices & Seasonings
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Direct origin sourcing from Western Ghats and Kaveri basin plantations. Fully cleaned, destoned, Sortex-graded, and free from synthetic dyes or chemical adulteration.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                      Key Standardized Products:
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>Alleppey Green Cardamom (8mm+ Extra Bold AGEB)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>Tellicherry & Kolli High-Piperine Black Pepper</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>GI Erode & Salem Turmeric Fingers & Ground Powder</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="w-full bg-[#0D522F] group-hover:bg-[#083820] text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition-all">
                  <span>Enter Spices Dedicated Catalog</span>
                  <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* COMPETENCY CARD 2: TEXTILES & GARMENTS */}
            <div 
              onClick={(e) => navigateTo('products?cat=textiles', e)}
              className="group relative bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0D522F] transform hover:-translate-y-3 hover:scale-[1.025] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src="./assets/images/tshirts.jpg" 
                    alt="Textiles & Garments" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0D522F] border border-emerald-200 shadow-sm">
                    Division 02
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block font-mono">
                      Tirupur & Karur Manufacturing Hubs
                    </span>
                    <h3 className="text-2xl font-black text-white font-['Plus_Jakarta_Sans']">
                      Textiles & Garments
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Custom OEM manufacturing in India's textile heartlands. High color fastness, Oeko-Tex compliant dyes, premium ring-spun cotton, and global retail packaging.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                      Key Standardized Products:
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>Export-Grade Combed Cotton T-Shirts (OEM / Custom GSM)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>400 - 650 GSM Premium Terry Bath & Hand Towels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>300 - 600 TC Luxury Cotton Bedsheets & Home Linens</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="w-full bg-[#0D522F] group-hover:bg-[#083820] text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition-all">
                  <span>Enter Textiles Dedicated Catalog</span>
                  <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* COMPETENCY CARD 3: INDIAN HERITAGE HANDICRAFTS */}
            <div 
              onClick={(e) => navigateTo('products?cat=handicrafts', e)}
              className="group relative bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#0D522F] transform hover:-translate-y-3 hover:scale-[1.025] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img 
                    src="./assets/images/handicrafts.jpg" 
                    alt="Indian Heritage Handicrafts" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0D522F] border border-emerald-200 shadow-sm">
                    Division 03
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block font-mono">
                      GI-Certified Artisan Clusters
                    </span>
                    <h3 className="text-2xl font-black text-white font-['Plus_Jakarta_Sans']">
                      Heritage Handicrafts
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Preserving South India's millennia-old artisan traditions. Authentic lost-wax brass castings, hand-carved natural woods, and kiln-fired architectural terracotta artefacts.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                      Key Standardized Products:
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>Traditional Brass Idols, Urli Bowls & Temple Diya Lamps</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>Hand-Carved Teakwood Decorative Panels & Relief Crafts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F] flex-shrink-0" />
                        <span>Architectural Terracotta Pottery & Indoor/Outdoor Planters</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="w-full bg-[#0D522F] group-hover:bg-[#083820] text-white font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition-all">
                  <span>Enter Handicrafts Dedicated Catalog</span>
                  <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. STATUTORY EXPORT ACCREDITATIONS & TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D522F] font-mono block mb-2">
              Government Accreditation & Compliance
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
              Statutory Export Accreditations & Transparency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5">
              Operating under strict regulatory supervision and verified international trade protocols established by the Government of India.
            </p>
          </div>

          {/* Accreditations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Spices Board of India</h3>
              <p className="text-xs text-[#0D522F] font-mono font-bold">CRES Registered Exporter</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mandatory statutory registration for authentic, laboratory-verified spice exports from India.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">DGFT (Govt. of India)</h3>
              <p className="text-xs text-[#0D522F] font-mono font-bold">IEC Certified: ANNPR0870K</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Authorized Importer-Exporter Code under the Directorate General of Foreign Trade, Ministry of Commerce.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">FSSAI Central License</h3>
              <p className="text-xs text-[#0D522F] font-mono font-bold">Central Export Licensed</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Certified by the Food Safety and Standards Authority of India for hygienic processing and export.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0D522F] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">GST Zero-Rated LUT</h3>
              <p className="text-xs text-[#0D522F] font-mono font-bold">GSTIN: 33ANNPR0870K1ZM</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fully compliant cross-border commercial invoicing under official Letter of Undertaking for zero-rated export duties.
              </p>
            </div>

          </div>

          {/* Legal Governance & Policy Access Banner */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0D522F] font-bold block mb-1">
                Commercial Transparency & Trade Terms
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Export Governance, Terms of Trade & Privacy Protections
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Review our comprehensive international trade terms, Incoterms rules, payment terms (L/C & Escrow), client confidentiality, and data handling policies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={(e) => navigateTo('privacy-policy', e)}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0D522F] hover:text-[#083820] bg-slate-50 hover:bg-emerald-50 border border-emerald-200 px-5 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-[#0D522F]" />
                <span>Privacy Policy</span>
              </button>

              <button
                type="button"
                onClick={(e) => navigateTo('terms-conditions', e)}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#0D522F] hover:bg-[#083820] px-5 py-3 rounded-xl transition-all cursor-pointer shadow-sm shadow-[#0D522F]/20"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Terms of Trade & Disclaimers</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
