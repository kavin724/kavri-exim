import React from 'react';
import { 
  Mail, MapPin, Phone, ShieldCheck, 
  ArrowUpRight, Award, Anchor, CheckCircle2, MessageCircle 
} from 'lucide-react';
import { TRUST_BADGES } from '../data/productsData';

export default function Footer({ setCurrentRoute, onOpenRfq }) {
  const navigateTo = (route, e) => {
    if (e) e.preventDefault();
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200">
      
      {/* Statutory Trust Ribbon Strip */}
      <div className="border-b border-slate-200 bg-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-slate-800 text-xs sm:text-sm font-bold">
              <Award className="w-5 h-5 text-[#0D522F]" />
              <span>Statutory Trade Registrations & Government Authorities:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.name} className="inline-flex items-center space-x-1.5 bg-slate-100/80 border border-slate-200 rounded-full px-3 py-1 text-xs text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F]" />
                  <span className="font-semibold">{badge.name}</span>
                  <span className="text-[10px] text-amber-700 font-mono">({badge.code})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Entity & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="./assets/images/kavri_logo_transparent.png" 
                alt="Kavri Exim" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              South Indian merchant exporter connecting origin-grade GI spices, premium export textiles & garments, and handcrafted artefacts directly with B2B importers, hotel chains, and retail brands worldwide.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-700">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#0D522F] mt-0.5 flex-shrink-0" />
                <span>Registered Merchant Office: Erode, Tamil Nadu, India (VOC Port Tuticorin / Chennai Hub)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0D522F] flex-shrink-0" />
                <a href="mailto:trade@kavriexim.com" className="text-[#0D522F] font-semibold hover:underline">trade@kavriexim.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-[#0D522F] flex-shrink-0" />
                <a href="https://wa.me/919842317000" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-[#0D522F]">
                  WhatsApp Desk: +91 98423 17000
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Anchor className="w-4 h-4 text-[#0D522F] flex-shrink-0" />
                <span>Primary Sea Gateways: Tuticorin (VOC Port), Chennai, Cochin</span>
              </div>
            </div>
          </div>

          {/* Col 3: Spices Division (Strict Order) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 border-l-2 border-[#0D522F] pl-2">
              Spices & Seasonings
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button type="button" onClick={(e) => navigateTo('product-green-cardamom', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  1. Alleppey Green Cardamom (8mm+)
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-black-pepper', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  2. Tellicherry & Malabar Black Pepper
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-kolli-pepper', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  3. Kolli Hills Black Pepper (High Piperine)
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-salem-turmeric', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  4. Salem Turmeric Fingers & Bulbs
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-erode-turmeric', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  5. Erode Turmeric Fingers & Bulbs (GI-Certified)
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-turmeric-powder', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  6. Pure Ground Turmeric Powder
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Textiles & Garments */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 border-l-2 border-[#0D522F] pl-2">
              Textiles & Garments
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button type="button" onClick={(e) => navigateTo('product-t-shirts', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Custom Combed Cotton T-Shirts
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-terry-towels', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Hospitality Terry Towels (Bath & Face)
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-bedsheets', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Luxury Cotton Bedsheet Sets & Duvets
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-linens', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Table, Dining & Kitchen Linens
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-shirting-fabrics', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Yarn-Dyed Shirting Fabrics (Rolls)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Trade, Handicrafts & Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 border-l-2 border-[#0D522F] pl-2">
              Artefacts & Trade Desk
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button type="button" onClick={(e) => navigateTo('product-traditional-metalcraft', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Artisanal Brassware & Bronze
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-modern-home-decor', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Modern Home Decors & Artefacts
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('product-oem-private-label', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  B2B Private Label & Custom Sourcing
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('quality-compliance', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Quality Assurance & Lab Protocols
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('export-logistics', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Incoterms 2020 & Port Freight
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('privacy-policy', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={(e) => navigateTo('terms-conditions', e)} className="hover:text-[#0D522F] transition-colors text-left">
                  Terms & Conditions / Disclaimers
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenRfq()}
                  className="w-full bg-[#0D522F] hover:bg-[#083820] text-white rounded-lg px-3 py-2 text-xs font-bold text-center transition-colors shadow-sm block"
                >
                  Submit Official RFQ
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Mandatory Legal Disclosure & Transparent Entity Hierarchy */}
      <div className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-[#0D522F] block sm:inline mr-2">
                Legal Entity Transparency Notice:
              </span>
              Kavri Exim is the international trading portal operated by <strong className="text-slate-900">Kavri Spice Exim</strong>, an Indian merchant exporter founded in Erode, Tamil Nadu. 
              <span className="block mt-1 font-mono text-[11px] text-slate-500">
                IEC: ANNPR0870K | GSTIN: 33ANNPR0870K1ZM | Spices Board CRES: [CRES-NUMBER]
              </span>
            </div>
            <div className="text-[11px] text-slate-500 whitespace-nowrap flex-shrink-0 flex items-center gap-2">
              <button type="button" onClick={(e) => navigateTo('privacy-policy', e)} className="hover:text-[#0D522F] underline cursor-pointer">Privacy</button>
              <span>•</span>
              <button type="button" onClick={(e) => navigateTo('terms-conditions', e)} className="hover:text-[#0D522F] underline cursor-pointer">Terms & Disclaimers</button>
              <span>•</span>
              <span>© {new Date().getFullYear()} Kavri Exim.</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
