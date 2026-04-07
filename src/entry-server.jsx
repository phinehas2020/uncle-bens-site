import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { ROUTES, buildStaticPath, getRoute, renderHeadMarkup, renderSitemapXml } from './site.js';

export function renderPage(path = '/') {
  const route = getRoute(path);

  return {
    route,
    headHtml: renderHeadMarkup(route),
    appHtml: renderToString(<App initialPath={route.path} />),
  };
}

export { ROUTES, buildStaticPath, renderSitemapXml };
