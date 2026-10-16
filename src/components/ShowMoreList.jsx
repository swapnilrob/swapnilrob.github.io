import { useState } from 'react';
import Icon from './icons.jsx';
import { sortByPriority } from '../utils/sortByPriority.js';
import { scrollToId } from '../utils/scroll.js';

// Sorts items by priority, shows the first `limit`, and folds the rest
// behind a "Show N more ..." button. No button if items <= limit.
// render(item, index) returns the card for one item.

export default function ShowMoreList({ items, limit, render, noun, anchorId }) {
  const [open, setOpen] = useState(false);
  const sorted = sortByPriority(items);
  const head = sorted.slice(0, limit);
  const rest = sorted.slice(limit);

  const toggle = () => {
    if (open) {
      setOpen(false);
      const el = document.getElementById(anchorId);
      if (el && el.getBoundingClientRect().top < 0) scrollToId(anchorId);
    } else {
      setOpen(true);
    }
  };

  const word = rest.length === 1 ? noun[0] : noun[1];

  return (
    <>
      <div className="stack">{head.map((item, i) => render(item, i))}</div>
      {rest.length > 0 && (
        <>
          <div className={`fold${open ? ' open' : ''}`}>
            <div className="fold-inner">
              <div className="stack">{rest.map((item, i) => render(item, i + limit))}</div>
            </div>
          </div>
          <button
            type="button"
            className="more"
            aria-expanded={open ? 'true' : 'false'}
            onClick={toggle}
          >
            {open ? 'Show less' : `Show ${rest.length} more ${word}`}
            <Icon name="chevron" size={16} />
          </button>
        </>
      )}
    </>
  );
}