export const routeLoaders = {
  '/': () => import('../pages/HomePage'),
  '/services': () => import('../pages/ServicesPage'),
  '/austin-top-movers': () => import('../pages/AustinTopMoversPage'),
  '/about': () => import('../pages/AboutPage'),
  '/quote': () => import('../pages/QuotePage'),
  '/contact': () => import('../pages/ContactPage'),
};

export function preloadRoute(pathname) {
  const loader = routeLoaders[pathname];
  if (loader) {
    loader();
  }
}
