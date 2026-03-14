import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyCallBar } from './components/MobileStickyCallBar';
import { AboutPage } from './pages/AboutPage';
import { AustinTopMoversPage } from './pages/AustinTopMoversPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuotePage } from './pages/QuotePage';
import { ServicesPage } from './pages/ServicesPage';

const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then((m) => ({ default: m.AdminPage })));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/austin-top-movers" element={<AustinTopMoversPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/admin/login" element={<Suspense fallback={null}><AdminLoginPage /></Suspense>} />
              <Route path="/admin" element={<Suspense fallback={null}><AdminPage /></Suspense>} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <MobileStickyCallBar />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
