import React, { useState } from 'react';
import { 
  Ship, Anchor, Plane, FileText, CheckCircle2, DollarSign, ArrowRight, Calculator 
} from 'lucide-react';
import { GATEWAY_PORTS, DOCUMENTATION_CHECKLIST } from '../data/productsData';

export default function ExportLogisticsPage({ onOpenRfq }) {
  const [calcCommodity, setCalcCommodity] = useState('cardamom');

  const containerEst = {
    cardamom: { name: 'Green Cardamom (Vacuum Master Cartons)', per20ft: 10, per40ft: 22, unit: 'Metric Tons' },
    pepper: { name: 'Tellicherry & Kolli Pepper (25kg PP Bags)', per20ft: 15, per40ft: 27, unit: 'Metric Tons' },
    turmeric: { name: 'Erode / Salem Turmeric Fingers (50kg Bags)', per20ft: 18, per40ft: 26, unit: 'Metric Tons' },
    tshirts: { name: 'Custom Cotton T-Shirts (Master Cartons)', per20ft: 28000, per40ft: 60000, unit: 'Pieces' },
    towels: { name: 'Terry Towels (Export Compressed Bales)', per20ft: 6.5, per40ft: 15.5, unit: 'Metric Tons' },
    bedsheets: { name: 'Cotton Bedsheet Sets (Bookfold Cartons)', per20ft: 5000, per40ft: 11000, unit: 'Sets' }
  };

  const selectedCalc = containerEst[calcCommodity];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 bg-sky-100 border border-sky-300 px-3.5 py-1 rounded-full text-xs font-bold text-sky-800 mb-3">
            <Ship className="w-3.5 h-3.5" />
            <span>International Sea Freight & Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
            Export Logistics, Ports & Incoterms
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Transparent shipping workflows from South Indian maritime hubs directly to the Persian Gulf, Southeast Asia, Europe, and North America.
          </p>
        </div>

        {/* Incoterms Explained Grid */}
        <div className="mb-16">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
              Incoterms 2020 Commercial Terms We Support
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select your preferred risk allocation and freight coordination model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#0D522F] transition-all shadow-sm">
              <span className="text-xs font-mono font-bold text-[#0D522F] bg-emerald-50 px-2.5 py-1 rounded-md block w-fit mb-3 border border-emerald-200">
                FOB (Free On Board)
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Tuticorin / Chennai / Cochin
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kavri Exim handles origin inland transport, export customs clearance, port terminal handling (THC), and container loading onto your nominated vessel.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#0D522F] transition-all shadow-sm">
              <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md block w-fit mb-3 border border-sky-200">
                CIF (Cost, Insurance & Freight)
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Destination Port of Discharge
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle ocean freight booking with premier shipping lines (Maersk, MSC, Hapag) plus Marine Cargo Insurance (Institute Cargo Clauses A) up to your port.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#0D522F] transition-all shadow-sm">
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md block w-fit mb-3 border border-amber-200">
                CFR (Cost and Freight)
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Ocean Transit Included
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We cover commodity procurement, port customs, and vessel carriage freight to your destination port. Buyer arranges their own marine insurance coverage.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#0D522F] transition-all shadow-sm">
              <span className="text-xs font-mono font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-md block w-fit mb-3 border border-purple-200">
                Air Freight (CPT / CIP)
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Chennai / Coimbatore Cargo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recommended for premium Green Cardamom batches, urgent garment sample consolidations, and high-value brassware consignments.
              </p>
            </div>
          </div>
        </div>

        {/* Gateway Ports Section */}
        <div className="mb-16">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
              Strategic Gateway Hubs & Transit Corridors
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Direct access to South India's major deepwater container terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GATEWAY_PORTS.map((port) => (
              <div key={port.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#0D522F] block font-bold">
                      {port.code} • {port.state}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                      {port.name}
                    </h3>
                    <span className="text-xs text-slate-500 italic">
                      {port.type}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0D522F] flex-shrink-0">
                    {port.type?.toLowerCase().includes('air') || port.name?.toLowerCase().includes('air') ? (
                      <Plane className="w-5 h-5" />
                    ) : (
                      <Anchor className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {port.highlights}
                </p>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <strong className="text-slate-900">Loading Advantage:</strong> {port.turnaround}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Checklist & Payment Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Documentation */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#0D522F] mb-2">
              <FileText className="w-4 h-4" />
              <span>Full Export Documentation Dossier</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
              Standard Documents Accompanying Every Shipment
            </h3>
            <div className="space-y-3">
              {DOCUMENTATION_CHECKLIST.map((doc) => (
                <div key={doc.title} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0D522F] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{doc.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Terms & Container Calculator */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Payment Terms Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 text-sm font-bold text-[#0D522F] mb-2">
                <DollarSign className="w-4 h-4" />
                <span>Commercial Payment Terms</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-3">
                Standard B2B Settlement Protocols
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Option A: Advance Telegraphic Transfer (TT)</strong>
                  30% Advance Deposit upon Proforma Invoice confirmation, balance 70% payable against scanned copies of original Bill of Lading (BL), Certificate of Origin, and Phytosanitary Certificate.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-0.5">Option B: 100% Irrevocable Letter of Credit (LC)</strong>
                  Confirmed Letter of Credit payable at sight issued through a prime international bank.
                </div>
              </div>
            </div>

            {/* Container Load Calculator */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 text-sm font-bold text-sky-700 mb-2">
                <Calculator className="w-4 h-4" />
                <span>Container Volume Estimator</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-4">
                Calculate Cargo Payload
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-600 block mb-1 font-semibold">Select Commodity / Product:</label>
                  <select
                    value={calcCommodity}
                    onChange={e => setCalcCommodity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-[#0D522F]"
                  >
                    <option value="cardamom">Alleppey Green Cardamom</option>
                    <option value="pepper">Tellicherry & Kolli Pepper</option>
                    <option value="turmeric">Erode & Salem Turmeric Fingers</option>
                    <option value="tshirts">Custom Cotton T-Shirts</option>
                    <option value="towels">Terry Bath & Face Towels</option>
                    <option value="bedsheets">Cotton Bedsheet Sets</option>
                  </select>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">20ft FCL Standard:</span>
                    <span className="font-mono font-bold text-[#0D522F]">
                      ~ {selectedCalc.per20ft} {selectedCalc.unit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">40ft HC Container:</span>
                    <span className="font-mono font-bold text-[#0D522F]">
                      ~ {selectedCalc.per40ft} {selectedCalc.unit}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenRfq()}
                  className="w-full bg-[#0D522F] hover:bg-[#083820] text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center space-x-2 transition-all shadow-sm mt-2"
                >
                  <span>Inquire Container Booking</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
