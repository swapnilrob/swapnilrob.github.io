import { useEffect, useRef, useState } from 'react';
import Icon from './icons.jsx';
import { checkFile } from '../hooks/useFileExists.js';

// Modal for a certificate or project photo.
// item = { title, sub, src, type: 'image' | 'pdf' }
// or, for several photos: item = { title, sub, type: 'image', gallery: [{ src, caption }] }
// A gallery shows one image at a time with Previous / Next buttons (and ← → keys).
// Missing file → "Preview coming soon" card.
// Closes on ×, Esc or backdrop click. Focus is trapped inside and
// returns to the button that opened it.

export default function Lightbox({ item, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const gallery = item.gallery && item.gallery.length ? item.gallery : null;
  const [index, setIndex] = useState(0);
  const src = gallery ? gallery[index].src : item.src;
  const caption = gallery ? gallery[index].caption : null;
  const [status, setStatus] = useState(src ? 'loading' : 'missing');

  const countRef = useRef(gallery ? gallery.length : 1);
  const step = (d) => setIndex((i) => (i + d + countRef.current) % countRef.current);

  // check the file exists before showing it
  useEffect(() => {
    let alive = true;
    setStatus(src ? 'loading' : 'missing');
    if (src) checkFile(src).then((ok) => { if (alive) setStatus(ok ? 'ready' : 'missing'); });
    return () => { alive = false; };
  }, [src]);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current && closeRef.current.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (countRef.current > 1 && e.key === 'ArrowRight') { step(1); return; }
      if (countRef.current > 1 && e.key === 'ArrowLeft') { step(-1); return; }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll('a[href], button, iframe, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!panelRef.current.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    };

    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      opener && opener.focus && opener.focus();
    };
  }, [onClose]);

  let body;
  if (status === 'missing') {
    body = (
      <div className="lb-placeholder">
        <div>
          <Icon name={item.type === 'pdf' ? 'file' : 'image'} size={28} />
          <strong>Preview coming soon</strong>
          <span>The file has not been added yet.</span>
        </div>
      </div>
    );
  } else if (status === 'loading') {
    body = <div className="lb-placeholder" aria-busy="true"><span>Loading…</span></div>;
  } else if (item.type === 'pdf') {
    body = (
      <>
        <iframe className="lb-pdf" src={src} title={item.title} />
        <a className="chip-link lb-fallback" href={src} target="_blank" rel="noopener noreferrer">
          <Icon name="ext" size={15} />Open in new tab
        </a>
      </>
    );
  } else {
    body = (
      <img
        className="lb-img"
        src={src}
        alt={caption ? `${item.title}: ${caption}` : item.title}
        onError={() => setStatus('missing')}
      />
    );
  }

  return (
    <div className="lb-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={panelRef} className="lb" role="dialog" aria-modal="true" aria-label={item.title}>
        <div className="lb-head">
          <div>
            <div className="lb-title">{item.title}</div>
            {item.sub && <div className="lb-sub">{item.sub}</div>}
          </div>
          <button ref={closeRef} type="button" className="icon-btn sm" aria-label="Close" onClick={onClose}>
            <Icon name="x" size={16} />
          </button>
        </div>
        {body}
        {gallery && gallery.length > 1 && (
          <div className="lb-nav">
            <button type="button" className="chip-link" onClick={() => step(-1)} aria-label="Previous image">
              <Icon name="chevron-left" size={15} />Previous
            </button>
            <span className="lb-count">
              {caption && <strong>{caption}</strong>}
              {index + 1} / {gallery.length}
            </span>
            <button type="button" className="chip-link" onClick={() => step(1)} aria-label="Next image">
              Next<Icon name="chevron-right" size={15} />
            </button>
          </div>
        )}
        {gallery && gallery.length === 1 && caption && <p className="lb-caption">{caption}</p>}
      </div>
    </div>
  );
}