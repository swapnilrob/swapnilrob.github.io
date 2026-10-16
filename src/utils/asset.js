// Turns a path from content.js (e.g. '/projects/libbot.jpg') into the right URL
// for wherever the site is hosted. On GitHub Pages the site lives at
// /<repo-name>/, so '/projects/libbot.jpg' must become '/<repo-name>/projects/libbot.jpg'.
// Full links (https://...) are returned unchanged.

export function asset(path) {
  if (!path || path === 'pending') return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}