import React from 'react';
import { 
  ArrowRight, ShieldCheck, Compass, Anchor, 
  Package, FileText, CheckCircle2, Award, 
  Sparkles, Download, Scissors, Shirt, Home as HomeIcon
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import TrustRibbon from '../components/TrustRibbon';

export default function HomePage({ setCurrentRoute, onOpenRfq, onOpenTds }) {
  const navigateTo = (route, e) => {
    if (e) e.preventDefault();
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Strictly ordered Spices (6 products)
  const spiceProducts = PRODUCTS_DATA.filter(p => p.category === 'spices');
  // Textiles & Garments
  const textileProducts = PRODUCTS_DATA.filter(p => p.category === 'textiles');
  // Handicrafts
  const handicraftProducts = PRODUCTS_DATA.filter(p => p.category === 'handicrafts');

  return (
    <div className="bg-white text-slate-800">
      
      {/* 1. HERO SECTION (Bright, Prestigious Merchant Aesthetic) */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden py-14 lg:py-20">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0D522F_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Origin Chip */}
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D522F] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0D522F] animate-pulse"></span>
                <span>Direct Origin Sourcing • Tamil Nadu & South India</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 font-['Plus_Jakarta_Sans']">
                Premium Indian Spices & <br />
                <span className="text-[#0D522F]">
                  Global Merchant Export
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                Direct origin-grade farm sourcing from South India with standardized lab-tested grading, certified textiles manufacturing, and worldwide delivery under statutory Spices Board and DGFT accreditation.
              </p>

              {/* Dual Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  id="hero-explore-catalog-btn"
                  onClick={(e) => navigateTo('products?cat=spices', e)}
                  className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg shadow-[#0D522F]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Explore Spice Catalog</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] text-amber-300" />
                </button>

                <button
                  type="button"
                  id="hero-instant-quote-btn"
                  onClick={() => onOpenRfq()}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base border border-slate-300 hover:border-[#0D522F] flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#0D522F]" />
                  <span>Request Instant Quote</span>
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
                  <span className="font-semibold text-slate-800">Direct Port Loading (Tuticorin / Chennai / Cochin)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Feature */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img 
                  src="./assets/images/hero-spices.jpg" 
                  alt="Kavri Exim Premium Spices" 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0D522F] uppercase tracking-wider">
                      Export Ready Commodities
                    </span>
                    <span className="text-[10px] bg-emerald-50 text-[#0D522F] border border-emerald-200 font-bold px-2 py-0.5 rounded-full">
                      Origin Certified
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-slate-500 block text-[11px]">Cardamom:</span>
                      <strong className="text-slate-900 font-bold">8mm+ AGEB Extra Bold</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-slate-500 block text-[11px]">Tellicherry Pepper:</span>
                      <strong className="text-slate-900 font-bold">570 GL Density (TGEB)</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-slate-500 block text-[11px]">Turmeric:</span>
                      <strong className="text-slate-900 font-bold">GI Erode & Salem Fingers</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="text-slate-500 block text-[11px]">Textiles:</span>
                      <strong className="text-slate-900 font-bold">Custom OEM Apparel</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. STATUTORY TRUST RIBBON */}
      <TrustRibbon />

      {/* 3. CORE COMMODITY CARDS (3 DIVISIONS) */}
      <section className="py-20 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D522F] block mb-2 font-mono">
              Export Trading Divisions
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
              Standardized Merchant Export Lines
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Export-ready grading, strict phytosanitary quarantine compliance, textile laboratory testing, and complete containerization for commercial buyers worldwide.
            </p>
          </div>

          {/* DIVISION 1: SPICES & SEASONINGS (Strict order: Cardamom, Tellicherry Pepper, Kolli Pepper, Salem Turmeric, Erode Turmeric, Turmeric Powder) */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-8 border-b border-slate-200 gap-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0D522F] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    Spices & Seasonings
                  </h3>
                  <p className="text-xs text-slate-500">
                    Primary Active Line • 6 Standardized Origin Grades with Dedicated TDS
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="inline-block bg-emerald-50 text-[#0D522F] text-xs px-3 py-1 rounded-full border border-emerald-200 font-semibold">
                  Export Ready | Origin Certified
                </span>
                <button
                  type="button"
                  onClick={(e) => navigateTo('products?cat=spices', e)}
                  className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1 cursor-pointer"
                >
                  View All Spices <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spiceProducts.map((prod, idx) => (
                <div 
                  key={prod.id} 
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0D522F] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <button
                      type="button"
                      onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                      className="relative w-full h-56 overflow-hidden bg-slate-100 cursor-pointer block text-left group/img focus:outline-none"
                      title={`View Full Technical Specification Page for ${prod.name}`}
                    >
                      <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-800 border border-slate-200 font-bold shadow-sm">
                        #{idx + 1} • {prod.hsnCode}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-emerald-50/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#0D522F] border border-emerald-200 shadow-sm">
                        {prod.tag}
                      </div>
                    </button>

                    <div className="p-5 space-y-3">
                      <div>
                        <span className="text-[11px] text-[#0D522F] uppercase tracking-wider font-bold block font-mono">
                          {prod.origin}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#0D522F] transition-colors">
                          {prod.name}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {prod.shortDesc}
                      </p>

                      {/* Grades Quick Chips */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5 font-bold">
                          Commercial Grades:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {prod.grades?.slice(0, 3).map(g => (
                            <span key={g.name} className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                              {g.name.split('(')[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="p-5 pt-0 space-y-2 mt-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenTds(prod)}
                        className="bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs py-2 px-3 rounded-lg border border-slate-200 flex items-center justify-center space-x-1 font-semibold transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#0D522F]" />
                        <span>View TDS</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenRfq(prod)}
                        className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center space-x-1 transition-all cursor-pointer shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-300" />
                        <span>Inquire Quote</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                      className="w-full text-center text-[11px] text-slate-500 hover:text-[#0D522F] py-0.5 flex items-center justify-center gap-1 cursor-pointer font-medium"
                    >
                      <span>Full Technical Specification</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* DIVISION 2: TEXTILES & GARMENTS (Requirement #7) */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-8 border-b border-slate-200 gap-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0D522F] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    Textiles & Garments
                  </h3>
                  <p className="text-xs text-slate-500">
                    New Product Range • 100% Customizable Cotton Apparel & Linens with Dedicated TDS
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="inline-block bg-sky-50 text-sky-800 text-xs px-3 py-1 rounded-full border border-sky-200 font-semibold">
                  Customizable | OEM Export
                </span>
                <button
                  type="button"
                  onClick={(e) => navigateTo('products?cat=textiles', e)}
                  className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1 cursor-pointer"
                >
                  View All Textiles <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {textileProducts.map((prod) => (
                <div 
                  key={prod.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0D522F] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <button
                      type="button"
                      onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                      className="relative w-full h-56 overflow-hidden bg-slate-100 cursor-pointer block text-left group/img focus:outline-none"
                      title={`View Full Technical Specification Page for ${prod.name}`}
                    >
                      <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-800 border border-slate-200 font-bold shadow-sm">
                        {prod.hsnCode}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-sky-50/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-sky-800 border border-sky-200 shadow-sm">
                        Custom Client Specs
                      </div>
                    </button>

                    <div className="p-5 space-y-3">
                      <div>
                        <span className="text-[11px] text-[#0D522F] uppercase tracking-wider font-bold block font-mono">
                          {prod.origin}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#0D522F] transition-colors">
                          {prod.name}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {prod.shortDesc}
                      </p>

                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5 font-bold">
                          Manufacturing Options:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {prod.grades?.slice(0, 3).map(g => (
                            <span key={g.name} className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                              {g.name.split('(')[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-2 mt-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenTds(prod)}
                        className="bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs py-2 px-3 rounded-lg border border-slate-200 flex items-center justify-center space-x-1 font-semibold transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#0D522F]" />
                        <span>View TDS</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenRfq(prod)}
                        className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center space-x-1 transition-all cursor-pointer shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-300" />
                        <span>Inquire OEM</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                      className="w-full text-center text-[11px] text-slate-500 hover:text-[#0D522F] py-0.5 flex items-center justify-center gap-1 cursor-pointer font-medium"
                    >
                      <span>Full Technical Specification</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* DIVISION 3: INDIAN HANDICRAFTS & ARTEFACTS */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-8 border-b border-slate-200 gap-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0D522F] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    Indian Heritage Handicrafts
                  </h3>
                  <p className="text-xs text-slate-500">
                    Artisanal Trade • Brassware, modern home decors, wooden artefacts & terracotta crafts
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="inline-block bg-purple-50 text-purple-800 text-xs px-3 py-1 rounded-full border border-purple-200 font-semibold">
                  Custom Sourcing Available
                </span>
                <button
                  type="button"
                  onClick={(e) => navigateTo('products?cat=handicrafts', e)}
                  className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1 cursor-pointer"
                >
                  View Crafts Line <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {handicraftProducts.map((prod) => (
                <div 
                  key={prod.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0D522F] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <button
                      type="button"
                      onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                      className="relative w-full h-56 overflow-hidden bg-slate-100 cursor-pointer block text-left group/img focus:outline-none"
                      title={`View Full Technical Specification Page for ${prod.name}`}
                    >
                      <img 
                        src={prod.image} 
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-slate-800 border border-slate-200 font-bold shadow-sm">
                        {prod.tag}
                      </div>
                    </button>

                    <div className="p-5 space-y-3">
                      <div>
                        <span className="text-[11px] text-[#0D522F] uppercase tracking-wider font-bold block font-mono">
                          {prod.origin}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#0D522F] transition-colors">
                          {prod.name}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {prod.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-2 mt-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenTds(prod)}
                        className="bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs py-2 px-3 rounded-lg border border-slate-200 flex items-center justify-center space-x-1 font-semibold transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#0D522F]" />
                        <span>Specs / TDS</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenRfq(prod)}
                        className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center space-x-1 transition-all cursor-pointer shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-300" />
                        <span>Inquire Sourcing</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                      className="w-full text-center text-[11px] text-slate-500 hover:text-[#0D522F] py-0.5 flex items-center justify-center gap-1 cursor-pointer font-medium"
                    >
                      <span>Full Technical Specification</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. VISUAL 5-STEP QUALITY WORKFLOW TEASER */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D522F] font-mono block mb-1">
                Standardized Processing
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
                5-Step Farm-to-Port Quality Lifecycle
              </h2>
            </div>
            <button
              type="button"
              onClick={(e) => navigateTo('quality-compliance', e)}
              className="text-xs text-[#0D522F] hover:text-[#083820] font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Full Quality Lab Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Farm-Gate Sourcing', desc: 'Direct procurement from verified South Indian cultivator cooperatives.' },
              { step: '02', title: 'Destoning & Cleaning', desc: 'Triple vibrating screen gravity separation removing physical admixtures.' },
              { step: '03', title: 'Optical Color Sorting', desc: 'Sortex high-resolution cameras removing discolored grains and pods.' },
              { step: '04', title: 'Metal Detection', desc: 'Ferrous, non-ferrous and stainless steel inline magnetic detection.' },
              { step: '05', title: 'Vacuum Packaging', desc: 'Food-grade barrier pouches and nitrogen-flushed export carton packing.' }
            ].map((st) => (
              <div key={st.step} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-[#0D522F]/40 transition-colors shadow-sm">
                <span className="text-2xl font-black text-[#0D522F] font-['Plus_Jakarta_Sans'] block mb-2">
                  {st.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{st.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. HOMEPAGE RFQ CONVERSION SECTION */}
      <section className="py-20 bg-white border-t border-slate-200 text-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full text-xs text-[#0D522F] font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Immediate Proforma Quotation</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
                  Ready to Source Direct from South India?
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Submit your required commodity specifications, volume, and discharge port. Our Tamil Nadu trade desk prepares formal Proforma Invoices within 12 business hours with full laboratory analysis breakdown.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700 pt-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D522F] flex-shrink-0" />
                    <span>FOB / CIF / CFR Rates</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D522F] flex-shrink-0" />
                    <span>SGS / COA Supported</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D522F] flex-shrink-0" />
                    <span>Air & Sea Freight Ready</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => onOpenRfq()}
                  className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-black py-4 px-6 rounded-xl text-base shadow-lg shadow-[#0D522F]/20 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <FileText className="w-5 h-5 stroke-[2.2] text-amber-300" />
                  <span>Launch Official RFQ Form</span>
                </button>

                <div className="text-center">
                  <span className="text-xs text-slate-500">or inquire directly via</span>
                  <a
                    href="https://wa.me/919842317000?text=Hello%20Kavri%20Exim,%20I%20have%20an%20instant%20trade%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#0D522F] hover:underline text-xs font-bold mt-1"
                  >
                    WhatsApp Live Merchant Desk (+91 98423 17000)
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. STATUTORY COMPLIANCE & LEGAL LINKS (ONE BELOW THE OTHER) */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0D522F] font-bold block mb-1">
                Statutory Governance & Compliance
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Export Transparency & Commercial Governance
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md">
                Review our international trade secret safeguards, data handling guidelines, export contract terms, and regulatory disclaimers.
              </p>
            </div>

            {/* Links stacked strictly ONE BELOW THE OTHER */}
            <div className="flex flex-col gap-3 w-full sm:w-auto min-w-[280px]">
              <button
                type="button"
                onClick={(e) => navigateTo('privacy-policy', e)}
                className="w-full inline-flex items-center justify-between gap-3 text-xs font-bold text-[#0D522F] hover:text-[#083820] bg-slate-50 hover:bg-emerald-50/60 border border-emerald-200/90 px-4 py-3 rounded-xl shadow-xs transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0D522F]" />
                  <span>Privacy Policy</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0D522F] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={(e) => navigateTo('terms-conditions', e)}
                className="w-full inline-flex items-center justify-between gap-3 text-xs font-bold text-[#0D522F] hover:text-[#083820] bg-slate-50 hover:bg-emerald-50/60 border border-emerald-200/90 px-4 py-3 rounded-xl shadow-xs transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0D522F]" />
                  <span>Terms & Conditions / Disclaimers</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0D522F] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
