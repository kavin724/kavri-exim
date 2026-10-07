import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ShieldCheck, 
  Truck, Building2, PhoneCall, FileText, ArrowRight 
} from 'lucide-react';

export default function Navbar({ currentRoute, setCurrentRoute, onOpenRfq }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (route, e) => {
    if (e) e.preventDefault();
    setCurrentRoute(route);
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', route: 'home' },
    { 
      label: 'Products', 
      route: 'products',
      hasDropdown: true,
      subItems: [
        { label: 'All Export Divisions', route: 'products', desc: 'Full multi-commodity B2B catalog' },
        { label: 'Spices & Seasonings', route: 'products?cat=spices', desc: 'Cardamom, Tellicherry & Kolli Pepper, Erode & Salem Turmeric' },
        { label: 'Textiles & Garments', route: 'products?cat=textiles', desc: 'Custom T-Shirts, Terry Towels, Bedsheets, Linens & Shirting' },
        { label: 'Indian Heritage Handicrafts', route: 'products?cat=handicrafts', desc: 'Brassware, Modern Home Decors & Terracotta Artefacts' },
      ]
    },
    { label: 'Quality & Compliance', route: 'quality-compliance', icon: ShieldCheck },
    { label: 'Export Logistics', route: 'export-logistics', icon: Truck },
    { label: 'About Us', route: 'about-us', icon: Building2 },
    { label: 'Contact', route: 'contact', icon: PhoneCall },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' : 'bg-white py-3.5 border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Display: Official High-Definition Logo */}
          <button 
            type="button"
            onClick={(e) => navigateTo('home', e)}
            className="flex items-center group text-left cursor-pointer focus:outline-none"
            aria-label="Kavri Exim Home"
          >
            <img 
              src="./assets/images/kavri_logo_transparent.png" 
              alt="Kavri Exim — International Merchant Exporters" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-opacity"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={(e) => navigateTo(link.route, e)}
                      className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1 cursor-pointer ${
                        currentRoute.startsWith('product') 
                          ? 'text-[#0D522F] bg-emerald-50' 
                          : 'text-slate-700 hover:text-[#0D522F] hover:bg-slate-50'
                      }`}
                      aria-expanded={isProductsDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180 text-[#0D522F]' : 'text-slate-400'}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isProductsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 animate-fadeIn z-50">
                        <div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-2.5">
                          <div className="text-[11px] font-bold text-[#0D522F] uppercase tracking-wider px-3 py-1.5 border-b border-slate-100 mb-1">
                            Export Trading Divisions
                          </div>
                          {link.subItems.map((sub) => (
                            <button
                              key={sub.label}
                              type="button"
                              onClick={(e) => navigateTo(sub.route, e)}
                              className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group/sub cursor-pointer flex flex-col"
                            >
                              <span className="text-sm font-bold text-slate-800 group-hover/sub:text-[#0D522F] flex items-center justify-between">
                                {sub.label}
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#0D522F]" />
                              </span>
                              <span className="text-xs text-slate-500 font-normal mt-0.5">
                                {sub.desc}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={(e) => navigateTo(link.route, e)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#0D522F] bg-emerald-50' 
                      : 'text-slate-700 hover:text-[#0D522F] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA: RFQ Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              id="header-rfq-button"
              onClick={() => onOpenRfq()}
              className="bg-[#0D522F] hover:bg-[#083820] text-white font-bold px-4.5 py-2.5 rounded-xl text-sm shadow-md shadow-[#0D522F]/20 hover:shadow-lg hover:shadow-[#0D522F]/30 transition-all flex items-center space-x-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4 stroke-[2.2] text-amber-300" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              type="button"
              onClick={() => onOpenRfq()}
              className="bg-[#0D522F] text-white font-bold px-3 py-1.5 rounded-lg text-xs sm:hidden"
            >
              RFQ
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation drawer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={(e) => navigateTo(link.route, e)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  currentRoute === link.route ? 'bg-emerald-50 text-[#0D522F]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-2.5 rounded-xl text-sm flex items-center justify-center space-x-2 shadow-md"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Request Instant B2B Quote</span>
            </button>
            <div className="text-center text-[11px] text-slate-500 mt-2">
              WhatsApp Desk: +91 98423 17000
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
