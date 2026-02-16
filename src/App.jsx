import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { routeLoaders } from './lib/routeLoader';

const HomePage = lazy(() =>
  routeLoaders['/']().then((module) => ({ default: module.HomePage })),
);
const ServicesPage = lazy(() =>
  routeLoaders['/services']().then((module) => ({ default: module.ServicesPage })),
);
const AustinTopMoversPage = lazy(() =>
  routeLoaders['/austin-top-movers']().then((module) => ({ default: module.AustinTopMoversPage })),
);
const AboutPage = lazy(() =>
  routeLoaders['/about']().then((module) => ({ default: module.AboutPage })),
);
const QuotePage = lazy(() =>
  routeLoaders['/quote']().then((module) => ({ default: module.QuotePage })),
);
const ContactPage = lazy(() =>
  routeLoaders['/contact']().then((module) => ({ default: module.ContactPage })),
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RouteFallback() {
  return (
    <div className="layout-container section-space-sm">
      <div className="surface-card p-6">
        <p className="text-sm uppercase tracking-[0.12em] text-fog/80">Loading page</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="site-shell flex min-h-dvh flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/austin-top-movers" element={<AustinTopMoversPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/quote" element={<QuotePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
