import React, { useState, useEffect } from 'react';
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

/**
 * Route helpers for hash-based browser history synchronization
 */
function routeToHash(route) {
  if (!route || route === 'home') {
    return window.location.pathname + (window.location.search || '');
  }
  return `#/${route}`;
}

function hashToRoute(hash) {
  if (!hash || hash === '#' || hash === '#/' || hash === '#/home' || hash === '#home') {
    return 'home';
  }
  const clean = hash.replace(/^#\/?/, '').trim();
  return clean || 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      return hashToRoute(window.location.hash);
    }
    return 'home';
  });

  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [selectedProductForRfq, setSelectedProductForRfq] = useState(null);
  
  const [isTdsOpen, setIsTdsOpen] = useState(false);
  const [selectedProductForTds, setSelectedProductForTds] = useState(null);

  // Initialize browser history stack on load
  // If user opens a sub-page directly on mobile, anchor 'home' underneath so pressing back
  // returns to homepage rather than closing the browser/exiting the tab.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initialRoute = hashToRoute(window.location.hash);
    const cleanHomeUrl = window.location.pathname + (window.location.search || '');

    if (initialRoute && initialRoute !== 'home') {
      window.history.replaceState({ route: 'home' }, '', cleanHomeUrl);
      window.history.pushState({ route: initialRoute }, '', routeToHash(initialRoute));
      setCurrentRoute(initialRoute);
    } else {
      // Clean up '#/' or '#' from URL on home page so default URL is clean
      if (window.location.hash) {
        window.history.replaceState({ route: 'home' }, '', cleanHomeUrl);
      } else {
        window.history.replaceState({ route: 'home' }, '', window.location.href);
      }
      setCurrentRoute('home');
    }
  }, []);

  // Listen for mobile back button & browser navigation (popstate)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = (event) => {
      // 1. If RFQ modal drawer is open on mobile, dismiss it first
      if (isRfqOpen) {
        setIsRfqOpen(false);
        return;
      }

      // 2. If TDS modal is open on mobile, dismiss it first
      if (isTdsOpen) {
        setIsTdsOpen(false);
        return;
      }

      // 3. Resolve destination route from state or URL hash
      const targetRoute = event.state?.route || hashToRoute(window.location.hash);
      setCurrentRoute(targetRoute || 'home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isRfqOpen, isTdsOpen]);

  // Unified navigation handler that pushes history state for mobile & desktop
  const handleNavigate = (newRoute) => {
    if (!newRoute) newRoute = 'home';
    if (newRoute === currentRoute) return;

    // Push new entry onto browser history stack
    window.history.pushState({ route: newRoute }, '', routeToHash(newRoute));
    setCurrentRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenRfq = (product = null) => {
    setSelectedProductForRfq(product);
    setIsRfqOpen(true);
    // Push modal state so mobile back button cleanly dismisses drawer
    window.history.pushState({ modal: 'rfq', route: currentRoute }, '', window.location.hash);
  };

  const handleCloseRfq = () => {
    setIsRfqOpen(false);
    if (window.history.state?.modal === 'rfq') {
      window.history.back();
    }
  };

  const handleOpenTds = (product) => {
    setSelectedProductForTds(product);
    setIsTdsOpen(true);
    // Push modal state so mobile back button cleanly dismisses modal
    window.history.pushState({ modal: 'tds', route: currentRoute }, '', window.location.hash);
  };

  const handleCloseTds = () => {
    setIsTdsOpen(false);
    if (window.history.state?.modal === 'tds') {
      window.history.back();
    }
  };

  // Render active view
  const renderView = () => {
    if (currentRoute === 'home') {
      return (
        <HomePage 
          setCurrentRoute={handleNavigate} 
          onOpenRfq={handleOpenRfq} 
          onOpenTds={handleOpenTds} 
        />
      );
    }

    if (currentRoute.startsWith('products')) {
      let categoryMatch = 'spices';
      if (currentRoute.includes('?cat=')) {
        categoryMatch = currentRoute.split('?cat=')[1];
      } else if (currentRoute.startsWith('products-')) {
        categoryMatch = currentRoute.replace('products-', '');
      }
      if (categoryMatch === 'all') categoryMatch = 'spices';
      return (
        <ProductsPage 
          key={currentRoute}
          initialCategory={categoryMatch} 
          setCurrentRoute={handleNavigate} 
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
          setCurrentRoute={handleNavigate} 
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
            setCurrentRoute={handleNavigate} 
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
        setCurrentRoute={handleNavigate} 
        onOpenRfq={() => handleOpenRfq(null)} 
      />

      {/* 3. Dynamic Page View */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* 4. Global Legal Transparency Footer */}
      <Footer 
        setCurrentRoute={handleNavigate} 
        onOpenRfq={() => handleOpenRfq(null)} 
      />

      {/* 5. Interactive RFQ Drawer */}
      <RfqModal 
        isOpen={isRfqOpen} 
        onClose={handleCloseRfq} 
        initialProduct={selectedProductForRfq} 
      />

      {/* 6. Technical Data Sheet (TDS) Download Modal */}
      <TdsModal 
        isOpen={isTdsOpen} 
        onClose={handleCloseTds} 
        product={selectedProductForTds} 
        onOpenRfq={handleOpenRfq} 
      />

      {/* 7. Floating WhatsApp Trade Desk */}
      <FloatingWhatsApp />

    </div>
  );
}
