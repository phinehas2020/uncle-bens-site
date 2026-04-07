import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const distDir = resolve(process.cwd(), 'dist');
const serverDir = resolve(distDir, 'server');
const templatePath = resolve(distDir, 'index.html');

const serverFiles = await readdir(serverDir);
const entryFile = serverFiles.find((file) => file.startsWith('entry-server') && file.endsWith('.js'));

if (!entryFile) {
  throw new Error('Could not find built SSR entry for prerendering.');
}

const template = await readFile(templatePath, 'utf8');
const { ROUTES, buildStaticPath, renderPage, renderSitemapXml } = await import(
  pathToFileURL(resolve(serverDir, entryFile)).href
);

for (const route of ROUTES) {
  const { appHtml, headHtml } = renderPage(route.path);
  const cleanAppHtml = appHtml.replace(/<link rel="preload" as="image"[^>]*\/>/g, '');
  const html = template
    .replace('<!--app-head-->', headHtml)
    .replace('<div id="root"></div>', `<div id="root">${cleanAppHtml}</div>`);
  const outputPath = resolve(distDir, buildStaticPath(route.path));

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

const notFound = renderPage('/not-found/');
await writeFile(
  resolve(distDir, '404.html'),
  template
    .replace('<!--app-head-->', notFound.headHtml)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${notFound.appHtml.replace(/<link rel="preload" as="image"[^>]*\/>/g, '')}</div>`,
    ),
);

await writeFile(resolve(distDir, 'sitemap.xml'), renderSitemapXml());
await rm(serverDir, { recursive: true, force: true });
