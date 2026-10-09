import React from 'react';
import { MapPin, Award, Mail, MessageCircle, Globe2 } from 'lucide-react';

export default function TopUtilityBar() {
  const whatsappNumber = "919842317000"; // Official Kavri Exim trade desk
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Kavri Exim Trade Desk, I am interested in exploring export supply.')}`;

  return (
    <aside aria-label="Export Compliance & Trade Contact Utility Bar" className="bg-[#0D522F] text-emerald-50 text-[11px] xl:text-xs border-b border-[#083820] hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between w-full whitespace-nowrap overflow-x-auto gap-3 xl:gap-0">
          
          {/* 1. Location Pin & Erode, Tamilnadu, India */}
          <div className="flex items-center space-x-1.5 text-emerald-100 flex-shrink-0">
            <MapPin className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
            <span className="font-medium tracking-wide">Erode, Tamilnadu, India</span>
          </div>

          {/* Separator 1 */}
          <span className="text-emerald-400/50 select-none flex-shrink-0">|</span>

          {/* 2. Direct Sourcing Advantage */}
          <span className="text-emerald-200 flex-shrink-0">
            Direct Farm-Gate & Port Gateway
          </span>

          {/* Separator 2 */}
          <span className="text-emerald-400/50 select-none flex-shrink-0">|</span>

          {/* 3. Statutory Registration */}
          <div className="flex items-center space-x-1.5 text-amber-300 font-medium flex-shrink-0">
            <Award className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
            <span>IEC and Spices Board Registered</span>
          </div>

          {/* Separator 3 */}
          <span className="text-emerald-400/50 select-none flex-shrink-0">|</span>

          {/* 4. Corporate Contact Email */}
          <a
            href="mailto:connect@kavriexim.com"
            className="group flex items-center space-x-1.5 text-emerald-100 hover:text-white transition-colors flex-shrink-0"
            title="Official Corporate Communication Desk"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-100 group-hover:text-white flex-shrink-0 transition-colors" />
            <span>connect@kavriexim.com</span>
          </a>

          {/* Separator 4 */}
          <span className="text-emerald-400/50 select-none flex-shrink-0">|</span>

          {/* 5. WhatsApp Trade Desk */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-white hover:text-amber-200 font-semibold transition-colors flex-shrink-0"
            title="Instant WhatsApp Desk (+91 98423 17000)"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
            <span>WhatsApp (+91 98423 17000)</span>
          </a>

          {/* Separator 5 */}
          <span className="text-emerald-400/50 select-none flex-shrink-0">|</span>

          {/* 6. Language & Global B2B */}
          <div className="flex items-center space-x-1.5 text-emerald-200 flex-shrink-0">
            <Globe2 className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
            <span>EN | Global B2B</span>
          </div>

        </div>
      </div>
    </aside>
  );
}
