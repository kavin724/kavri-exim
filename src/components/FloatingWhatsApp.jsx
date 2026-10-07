import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "919842317000";
  const defaultText = "Hello Kavri Exim Trade Desk, I have a B2B export inquiry for Indian spices, textiles, or handicrafts.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      
      {/* Tooltip prompt */}
      <div className={`mr-3 hidden md:block transition-all duration-300 transform ${
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
      }`}>
        <div className="bg-white border border-slate-200 text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-xl flex items-center space-x-2 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <div>
            <div className="font-bold text-[#0D522F]">WhatsApp Trade Desk</div>
            <div className="text-[11px] text-slate-500">+91 98423 17000</div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-108 active:scale-95 transition-all duration-200"
        aria-label="Direct WhatsApp Trade Inquiry"
        id="floating-whatsapp-btn"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-slate-950 shadow-sm">
          1
        </span>
        {/* Authentic WhatsApp Icon */}
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.95.556 3.77 1.524 5.31L2 22l4.825-1.484a9.96 9.96 0 0 0 5.179 1.388c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 18.239c-1.68 0-3.238-.506-4.545-1.378l-.326-.217-2.865.882.894-2.793-.238-.344a8.17 8.17 0 0 1-1.444-4.385c0-4.7 3.824-8.524 8.524-8.524 4.7 0 8.524 3.824 8.524 8.524 0 4.7-3.824 8.524-8.524 8.524zm4.673-6.195l-.01.075c-.267-.133-1.579-.779-1.824-.868-.245-.089-.423-.133-.601.133-.178.267-.689.868-.845 1.045-.156.178-.312.2-.579.067-.267-.133-1.127-.416-2.147-1.325-.794-.708-1.33-1.583-1.486-1.85-.156-.267-.016-.412.117-.544.12-.12.267-.312.4-.468.133-.156.178-.267.267-.445.089-.178.045-.334-.022-.468-.067-.133-.601-1.448-.824-1.983-.217-.521-.438-.45-.601-.458l-.512-.01c-.178 0-.468.067-.712.334-.245.267-.935.913-.935 2.226 0 1.313.957 2.583 1.09 2.761.133.178 1.884 2.877 4.566 4.035.638.276 1.136.441 1.524.565.64.204 1.223.175 1.684.106.514-.077 1.579-.646 1.802-1.27.223-.624.223-1.159.156-1.27-.067-.111-.245-.178-.512-.311z"/>
        </svg>
      </a>

    </div>
  );
}
