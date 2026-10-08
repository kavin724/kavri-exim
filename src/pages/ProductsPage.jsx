import React, { useState, useEffect } from 'react';
import { 
  Search, Download, FileText, ArrowRight, Compass 
} from 'lucide-react';
import { PRODUCTS_DATA, COMMODITY_CATEGORIES } from '../data/productsData';

const CATEGORY_META = {
  all: {
    badge: 'Standardized International Trade Catalog',
    title: 'Export Commodities & Product Lines',
    desc: 'Browse our complete catalog across all three specialized export divisions. Complete technical data sheets (TDS) and instant proforma quotations available.'
  },
  spices: {
    badge: 'Division 01 • Spices Board of India Registered',
    title: 'Spices & Seasonings Export Catalog',
    desc: 'Direct farm-origin harvesting from South India’s Western Ghats and Kaveri basin. Standardized Sortex-cleaned grades of Alleppey Green Cardamom, Tellicherry & Kolli Pepper, and GI-certified Erode & Salem Turmeric with laboratory test benchmarks.'
  },
  textiles: {
    badge: 'Division 02 • Tirupur & Karur Manufacturing Hubs',
    title: 'Textiles & Garments Export Catalog',
    desc: 'Custom OEM apparel, luxury terry towels, hotel-grade bedsheets, and industrial woven fabrics manufactured to rigorous international colorfastness and AATCC/ISO standards.'
  },
  handicrafts: {
    badge: 'Division 03 • Heritage Artisan Clusters',
    title: 'Indian Heritage Handicrafts Catalog',
    desc: 'Authentic South Indian lost-wax cast bronze & brass idols, hand-carved teakwood decorative artefacts, and traditional architectural terracotta pottery.'
  }
};

export default function ProductsPage({ initialCategory = 'all', setCurrentRoute, onOpenRfq, onOpenTds }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const navigateTo = (route, e) => {
    if (e) e.preventDefault();
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    if (setCurrentRoute) {
      if (catId === 'all') {
        setCurrentRoute('products');
      } else {
        setCurrentRoute(`products?cat=${catId}`);
      }
    }
  };

  const filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchesCat = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.grades?.some(g => g.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const currentMeta = CATEGORY_META[selectedCategory] || CATEGORY_META.all;

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold text-[#0D522F] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{currentMeta.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
            {currentMeta.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {currentMeta.desc}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-10 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {COMMODITY_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0D522F] text-white shadow-md shadow-[#0D522F]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search grade (e.g. 8mm, Erode, T-shirt, 400 TC)..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D522F] focus:bg-white"
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(prod => (
            <div 
              key={prod.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0D522F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Product Image */}
                {/* Product Image - Click to view Full Technical Specification Page */}
                <button
                  type="button"
                  onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                  className="relative w-full h-56 overflow-hidden bg-slate-100 cursor-pointer block text-left group/img focus:outline-none"
                  title={`View Full Technical Specification Page for ${prod.name}`}
                >
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover/img:scale-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/15 transition-colors pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-slate-800 border border-slate-200 font-bold shadow-sm">
                    HSN: {prod.hsnCode}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-emerald-50/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-[#0D522F] border border-emerald-200 shadow-sm">
                    {prod.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#0D522F]/90 text-white backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
                    <span>Full Technical Specs</span>
                    <ArrowRight className="w-3 h-3 text-amber-300" />
                  </div>
                </button>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#0D522F] font-bold block">
                      {prod.origin}
                    </span>
                    <h3 
                      onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                      className="text-xl font-bold text-slate-900 group-hover:text-[#0D522F] transition-colors cursor-pointer"
                    >
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 italic mt-0.5 font-medium">
                      {prod.botanicalName}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prod.shortDesc}
                  </p>

                  {/* Grades Specs List */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                      Export Specifications & Options:
                    </span>
                    <div className="space-y-1.5">
                      {prod.grades?.slice(0, 3).map(g => (
                        <div key={g.name} className="text-xs flex items-center justify-between text-slate-700 border-b border-slate-200/60 pb-1 last:border-0 last:pb-0">
                          <span className="font-semibold text-slate-900">{g.name.split('(')[0]}</span>
                          <span className="text-[11px] text-[#0D522F] font-mono font-bold">{g.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenTds(prod)}
                    className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl py-2.5 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#0D522F]" />
                    <span>Download TDS</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenRfq(prod)}
                    className="w-full bg-[#0D522F] hover:bg-[#083820] text-white rounded-xl py-2.5 text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-[#0D522F]/20 transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-300" />
                    <span>Request Quote</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={(e) => navigateTo(`product-${prod.slug}`, e)}
                  className="w-full text-center text-xs text-slate-500 hover:text-[#0D522F] transition-colors py-1 flex items-center justify-center gap-1 cursor-pointer font-semibold"
                >
                  <span>View Full Technical Specification Page</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 shadow-sm">
            <p className="text-base font-bold text-slate-800">No products matched your search.</p>
            <p className="text-xs mt-1">Try searching for Cardamom, Black Pepper, Turmeric, T-shirts, or Towels.</p>
          </div>
        )}

      </div>
    </div>
  );
}
