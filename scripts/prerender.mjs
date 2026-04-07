import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const distDir = resolve(process.cwd(), 'dist');
const serverDir = resolve(distDir, 'server');
const templatePath = resolve(distDir, 'index.html');

const serverFiles = await readdir(serverDir);
const entryFile = serverFiles.find((file) => file.startsWith('entry-server') && file.endsWith('.js'));

if (!entryFile) {
  throw new Error('Could not find built SSR entry for prerendering.');
}

const { render } = await import(pathToFileURL(resolve(serverDir, entryFile)).href);
const appHtml = render().replace(/<link rel="preload" as="image"[^>]*\/>/g, '');
const template = await readFile(templatePath, 'utf8');
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

await writeFile(templatePath, html);
await rm(serverDir, { recursive: true, force: true });
