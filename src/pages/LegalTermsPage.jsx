import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, FileText, Lock, EyeOff, Award, 
  AlertTriangle, Scale, CheckCircle2, ChevronRight, Mail 
} from 'lucide-react';

export default function LegalTermsPage({ initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab]);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0D522F] font-bold block mb-1">
                Statutory Governance & Compliance
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
                Legal Policies & Commercial Governance
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Kavri Spice Exim • Tamil Nadu, India • IEC: ANNPR0870K • Spices Board Registered
              </p>
            </div>

            {/* Quick Switch Tabs */}
            <div className="inline-flex p-1 bg-slate-100 border border-slate-200 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveTab('privacy')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'privacy' 
                    ? 'bg-[#0D522F] text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('terms')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'terms' 
                    ? 'bg-[#0D522F] text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Terms & Conditions / Disclaimers</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0D522F]" />
              Official DGFT & Spices Board Merchant Exporter
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Effective Date: Current Export Fiscal Year 2024–2026</span>
            <span className="hidden sm:inline">•</span>
            <span>Direct Inquiries: <a href="mailto:connect@kavriexim.com" className="text-[#0D522F] font-semibold underline">connect@kavriexim.com</a></span>
          </div>
        </div>

        {/* SECTION 1: PRIVACY POLICY */}
        {(activeTab === 'privacy' || activeTab === 'all') && (
          <div id="privacy-policy" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 mb-8">
            <div className="border-b border-slate-100 pb-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0D522F] uppercase tracking-wider mb-1">
                <Lock className="w-4 h-4" />
                Data Protection & Confidentiality
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
                Privacy Policy
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                How Kavri Spice Exim collects, protects, and governs corporate trade data, buyer specifications, and commercial communications.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">1.</span> Scope & Corporate Commitment
                </h3>
                <p>
                  This Privacy Policy applies to all international buyers, corporate importers, buying houses, and commercial partners interacting with Kavri Exim (<code className="text-slate-800 font-mono bg-slate-100 px-1 py-0.5 rounded">kavriexim.com</code>), operated exclusively by <strong>Kavri Spice Exim</strong> (Tamil Nadu, India). We recognize that international B2B commerce relies upon absolute trust, mutual respect, and rigorous trade secret preservation.
                </p>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">2.</span> Commercial Information We Collect
                </h3>
                <p>
                  When you submit a Request for Quotation (RFQ), request Technical Data Sheets (TDS), communicate via our official WhatsApp Trade Desk, or negotiate sales contracts, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Corporate Identity:</strong> Company legal name, registered country, business registration or VAT/Tax ID number.</li>
                  <li><strong>Representative Coordinates:</strong> Official trade officer name, job title, corporate email address, and direct telephone/WhatsApp number.</li>
                  <li><strong>Order Specifications:</strong> Desired commodity grades, volumes (MT/FCL), delivery terms (Incoterms 2020), destination discharge port, and customized packaging requirements.</li>
                  <li><strong>OEM / Private Label Data:</strong> Buyer private label artwork, vector logos, barcode mappings, and custom apparel sizing specifications.</li>
                </ul>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-[#0D522F]" />
                  <span className="text-[#0D522F] font-mono">3.</span> Protection of Buyer Trade Secrets & Proprietary Formulations
                </h3>
                <p>
                  All proprietary information, including OEM product recipes, textile weaves, custom embroidery coordinates, and private label artworks submitted to Kavri Spice Exim are treated as strict commercial trade secrets. We maintain a strict non-disclosure standard:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>We <strong>never sell, lease, monetize, or disclose</strong> buyer information to third-party marketing firms, commercial brokers, or competing traders.</li>
                  <li>Access to proprietary product files is strictly restricted to senior trade desk officers, certified quality chemists, and contracted export production supervisors.</li>
                  <li>Custom dye formulations and private brand moulds are reserved exclusively for the originating buyer.</li>
                </ul>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0D522F]" />
                  <span className="text-[#0D522F] font-mono">4.</span> Statutory Regulatory Disclosures
                </h3>
                <p>
                  Buyer information is shared solely where required by legal and statutory mandate to execute legitimate export shipments:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Indian Customs & DGFT:</strong> To file shipping bills, generate Electronic Bank Realization Certificates (e-BRC), and comply with the Indian Foreign Trade Policy.</li>
                  <li><strong>Spices Board of India & Plant Quarantine Authorities:</strong> For phytosanitary inspections and mandatory export clearance certificates.</li>
                  <li><strong>Independent Surveyors:</strong> Accredited testing agencies (e.g., SGS, Eurofins, Bureau Veritas) authorized to conduct pre-shipment sampling and emit formal Certificates of Analysis (COA).</li>
                  <li><strong>Nominated Shipping Lines:</strong> Issuance of Sea Waybills, Master Bills of Lading (MBL), and container manifest declarations.</li>
                </ul>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">5.</span> Digital Cookies & Website Analytics
                </h3>
                <p>
                  Our web portal utilizes lightweight functional cookies and secure analytics solely to ensure smooth navigation, preserve user interface preferences (such as selected commodity category filters), and analyze portal performance. We do not engage in intrusive cross-site behavioural tracking or third-party ad retargeting.
                </p>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">6.</span> Data Retention & Importer Rights
                </h3>
                <p>
                  Commercial order histories, customs documentation, and invoices are preserved for the statutory duration mandated by Indian taxation and foreign trade regulations. Buyers may at any time request an update, verification, or deletion of non-statutory communication records by writing to our trade desk at <a href="mailto:connect@kavriexim.com" className="text-[#0D522F] font-semibold underline">connect@kavriexim.com</a>.
                </p>
              </section>
            </div>
          </div>
        )}

        {/* SECTION 2: TERMS & CONDITIONS / DISCLAIMERS */}
        {(activeTab === 'terms' || activeTab === 'all') && (
          <div id="terms-conditions" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0D522F] uppercase tracking-wider mb-1">
                <Scale className="w-4 h-4" />
                Commercial Governance & Legal Terms
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">
                Terms & Conditions / Disclaimers
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Governing all website use, commercial quotations, proforma invoices, sales contracts, and international export shipments.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">1.</span> Website Terms of Use
                </h3>
                <p>
                  Welcome to the official export portal of <strong>Kavri Spice Exim</strong> (accessible at <code className="text-slate-800 font-mono bg-slate-100 px-1 py-0.5 rounded">kavriexim.com</code>). By browsing this portal, downloading Technical Data Sheets (TDS), or submitting inquiries, you agree to comply with these terms. All trademarks, digital photography, product descriptions, and technical specifications are the exclusive intellectual property of Kavri Spice Exim. Unauthorized reproduction, automated scraping, or commercial misuse is strictly prohibited.
                </p>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">2.</span> Contract Formation & Proforma Invoices
                </h3>
                <p>
                  All catalog displays, price indicators, and web RFQ estimates are strictly non-binding invitations to treat, reflecting indicative wholesale valuations subject to physical spice crop arrivals and currency fluctuations.
                </p>
                <p>
                  A legally binding export sales contract comes into existence solely upon the mutual execution and authorized sign-off of our formal <strong>Proforma Invoice (PI)</strong> or Sales Confirmation, accompanied by the agreed financial instrument (Advance TT or confirmed Letter of Credit).
                </p>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">3.</span> International Trade Rules & Incoterms 2020
                </h3>
                <p>
                  Unless specifically agreed otherwise in writing within the signed Proforma Invoice, all sales are governed by the <strong>ICC Incoterms® 2020</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>FOB (Free On Board):</strong> Risk transfers to the buyer as soon as the cargo is loaded on board the vessel at the nominated Indian departure port (V.O. Chidambaranar Port Tuticorin, Chennai, or Cochin).</li>
                  <li><strong>CIF (Cost, Insurance and Freight):</strong> Kavri Spice Exim arranges ocean freight and basic marine cargo insurance under Institute Cargo Clauses (A). The buyer assumes risk upon loading on board.</li>
                  <li><strong>CFR (Cost and Freight):</strong> Ocean freight is covered to the designated port of destination; marine insurance is arranged directly by the buyer.</li>
                </ul>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">4.</span> Agricultural & Textile Tolerances
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Spices & Agricultural Produce:</strong> Natural origin commodities (cardamom, black pepper, turmeric) are subject to minor climatic and harvest variations. Quality specifications (moisture %, volatile oil, curcumin content, bulk density) conform strictly to contractual Spices Board parameters and approved pre-shipment reference samples.</li>
                  <li><strong>Textiles & Garments:</strong> Manufactured cotton textiles, towels, and fabrics are subject to standard international textile tolerances (+/- 3% to 5% on fabric weight/GSM, and industry-standard dimensional shrinkage guidelines under ISO/AATCC standards).</li>
                </ul>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="text-[#0D522F] font-mono">5.</span> General Disclaimers & Technical Specifications
                </h3>
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p className="font-semibold text-amber-950">
                    Technical Specification & Regulatory Disclaimer:
                  </p>
                  <p>
                    Technical Data Sheets (TDS), laboratory parameters, and nutritional profiles presented on this portal represent representative averages from certified production lots. While Kavri Spice Exim guarantees that dispatched container lots strictly match mutually countersigned contract specifications, buyers are solely responsible for ensuring that imported commodities comply with the local food safety, labelling, and chemical residue regulations of their destination country (e.g., US FDA, EU EFSA, GCC GSO).
                  </p>
                </div>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">6.</span> Limitation of Liability & Port Demurrage
                </h3>
                <p>
                  Kavri Spice Exim shall not be liable for indirect, incidental, special, or consequential damages, including loss of anticipated commercial profit or brand goodwill. In all circumstances, our maximum aggregate liability arising out of or in connection with any commercial order shall be strictly limited to the net commercial invoice value of the specific defective or non-conforming goods lot.
                </p>
                <p>
                  Kavri Spice Exim is not responsible for port storage, demurrage, or container detention charges incurred at the destination port due to buyer delay in customs clearance, import license non-availability, or local phytosanitary quarantine holds.
                </p>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#0D522F] font-mono">7.</span> Force Majeure
                </h3>
                <p>
                  Neither party shall be held liable for failure or delay in fulfilling export obligations caused by circumstances beyond reasonable control, including but not limited to Acts of God, severe cyclones, maritime monsoons, naval blockades, pandemics, civil unrest, war, governmental trade embargoes, or spontaneous port longshoreman strikes.
                </p>
              </section>

              <section className="space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#0D522F]" />
                  <span className="text-[#0D522F] font-mono">8.</span> Governing Law & Arbitration Jurisdiction
                </h3>
                <p>
                  All commercial agreements, proforma invoices, and international trade disputes shall be governed by and construed in accordance with the laws of the Republic of India.
                </p>
                <p>
                  Any controversy or claim arising out of or relating to commercial shipments that cannot be resolved amicably shall be submitted to binding arbitration under the rules of the <strong>Indian Council of Arbitration (ICA)</strong>. The legal seat of arbitration shall be Tamil Nadu, India, and proceedings shall be conducted in the English language. Competent courts in Tamil Nadu, India shall have exclusive judicial jurisdiction.
                </p>
              </section>

              <section className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  For formal legal notices or commercial arbitration correspondence:
                </div>
                <a
                  href="mailto:connect@kavriexim.com"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D522F] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>connect@kavriexim.com</span>
                </a>
              </section>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
