import React, { useState } from 'react';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RfqModal from './components/RfqModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TdsModal from './components/TdsModal';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import QualityCompliancePage from './pages/QualityCompliancePage';
import ExportLogisticsPage from './pages/ExportLogisticsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsOfTradePage from './pages/TermsOfTradePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [selectedProductForRfq, setSelectedProductForRfq] = useState(null);
  
  const [isTdsOpen, setIsTdsOpen] = useState(false);
  const [selectedProductForTds, setSelectedProductForTds] = useState(null);

  const handleOpenRfq = (product = null) => {
    setSelectedProductForRfq(product);
    setIsRfqOpen(true);
  };

  const handleOpenTds = (product) => {
    setSelectedProductForTds(product);
    setIsTdsOpen(true);
  };

  // Render active view
  const renderView = () => {
    if (currentRoute === 'home') {
      return (
        <HomePage 
          setCurrentRoute={setCurrentRoute} 
          onOpenRfq={handleOpenRfq} 
          onOpenTds={handleOpenTds} 
        />
      );
    }

    if (currentRoute.startsWith('products')) {
      let categoryMatch = 'all';
      if (currentRoute.includes('?cat=')) {
        categoryMatch = currentRoute.split('?cat=')[1];
      } else if (currentRoute.startsWith('products-')) {
        categoryMatch = currentRoute.replace('products-', '');
      }
      return (
        <ProductsPage 
          key={currentRoute}
          initialCategory={categoryMatch} 
          setCurrentRoute={setCurrentRoute} 
          onOpenRfq={handleOpenRfq} 
          onOpenTds={handleOpenTds} 
        />
      );
    }

    if (currentRoute.startsWith('product-')) {
      const slug = currentRoute.replace('product-', '');
      return (
        <ProductDetailPage 
          productSlug={slug} 
          setCurrentRoute={setCurrentRoute} 
          onOpenRfq={handleOpenRfq} 
          onOpenTds={handleOpenTds} 
        />
      );
    }

    switch (currentRoute) {
      case 'quality-compliance':
        return <QualityCompliancePage onOpenRfq={handleOpenRfq} />;
      case 'export-logistics':
        return <ExportLogisticsPage onOpenRfq={handleOpenRfq} />;
      case 'about-us':
        return <AboutPage onOpenRfq={handleOpenRfq} />;
      case 'contact':
        return <ContactPage onOpenRfq={handleOpenRfq} />;
      case 'terms-of-trade':
      case 'terms-conditions':
      case 'terms-and-conditions':
      case 'disclaimers':
        return <TermsOfTradePage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      default:
        return (
          <HomePage 
            setCurrentRoute={setCurrentRoute} 
            onOpenRfq={handleOpenRfq} 
            onOpenTds={handleOpenTds} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-[#0D522F] selection:text-white">
      
      {/* 1. Top Utility Credibility Bar */}
      <TopUtilityBar />

      {/* 2. Main Sticky Navigation with Official Transparent Logo */}
      <Navbar 
        currentRoute={currentRoute} 
        setCurrentRoute={setCurrentRoute} 
        onOpenRfq={() => handleOpenRfq(null)} 
      />

      {/* 3. Dynamic Page View */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* 4. Global Legal Transparency Footer */}
      <Footer 
        setCurrentRoute={setCurrentRoute} 
        onOpenRfq={() => handleOpenRfq(null)} 
      />

      {/* 5. Interactive RFQ Drawer */}
      <RfqModal 
        isOpen={isRfqOpen} 
        onClose={() => setIsRfqOpen(false)} 
        initialProduct={selectedProductForRfq} 
      />

      {/* 6. Technical Data Sheet (TDS) Download Modal */}
      <TdsModal 
        isOpen={isTdsOpen} 
        onClose={() => setIsTdsOpen(false)} 
        product={selectedProductForTds} 
        onOpenRfq={handleOpenRfq} 
      />

      {/* 7. Floating WhatsApp Trade Desk */}
      <FloatingWhatsApp />

    </div>
  );
}
