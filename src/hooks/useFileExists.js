import { useEffect, useState } from 'react';

// Checks whether a file in public/ really exists (e.g. /projects/libbot.jpg).
// Returns true / false, or null while still checking.
// Used to hide a photo or report link until you add the file.

const cache = new Map();

export function checkFile(path) {
  if (!path || path === 'pending') return Promise.resolve(false);
  if (cache.has(path)) return cache.get(path);
  const p = fetch(path, { method: 'HEAD' })
    .then((r) => {
      const type = r.headers.get('content-type') || '';
      // a missing file can come back as the HTML page, so treat HTML as "missing"
      return r.ok && !type.includes('text/html');
    })
    .catch(() => false);
  cache.set(path, p);
  return p;
}

export default function useFileExists(path) {
  const [exists, setExists] = useState(path ? null : false);
  useEffect(() => {
    let alive = true;
    checkFile(path).then((ok) => { if (alive) setExists(ok); });
    return () => { alive = false; };
  }, [path]);
  return exists;
}