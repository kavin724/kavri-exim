import React from 'react';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';
import { TRUST_BADGES } from '../data/productsData';

export default function TrustRibbon() {
  return (
    <section aria-label="Statutory Trade Accreditations" className="bg-slate-50/70 border-y border-slate-200 py-10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold text-[#0D522F] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Statutory Export Accreditations & Transparency</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
            Certified by Government of India Export Authorities
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
            Every shipment processed through Kavri Spice Exim satisfies stringent phytosanitary, pesticide residue, textile quality, and trade documentation benchmarks.
          </p>
        </div>

        {/* 5 Accreditations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TRUST_BADGES.map((badge) => (
            <div 
              key={badge.name}
              className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0D522F]/40 rounded-xl p-4 transition-all duration-300 group flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-[#0D522F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0D522F] transition-colors">
                  {badge.name}
                </h3>
                <div className="text-[11px] font-mono text-amber-700 font-semibold mt-0.5">
                  {badge.code}
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100 leading-normal">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trade Assurance Stats Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-black text-[#0D522F] font-['Plus_Jakarta_Sans']">100%</div>
            <div className="text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">Origin-Traceable Lots</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-black text-amber-600 font-['Plus_Jakarta_Sans']">&lt; 10-11%</div>
            <div className="text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">Guaranteed Moisture Max</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">3 Sea Ports</div>
            <div className="text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">Tuticorin • Chennai • Cochin</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-black text-[#0D522F] font-['Plus_Jakarta_Sans']">FOB / CIF</div>
            <div className="text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">Flexible Global Incoterms</div>
          </div>
        </div>

      </div>
    </section>
  );
}
