import { useEffect, useState } from 'react';
import Icon from './icons.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { scrollToId } from '../utils/scroll.js';

// Sticky top bar. `sections` is a list of [id, label] pairs.
// Below 960 px the links move into a drawer behind the hamburger.

export default function Navbar({ name, sections, activeId }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setDrawerOpen(false);
    scrollToId(id);
  };

  const link = ([id, label]) => (
    <a
      key={id}
      href={`#${id}`}
      className={activeId === id ? 'active' : undefined}
      aria-current={activeId === id ? 'true' : undefined}
      onClick={(e) => go(e, id)}
    >
      {label}
    </a>
  );

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <button
          type="button"
          className="brand"
          onClick={() => { setDrawerOpen(false); scrollToId('top'); }}
        >
          {name}<span>.</span>
        </button>

        <nav aria-label="Sections">
          <ul className="nav-links">
            {sections.map((s) => <li key={s[0]}>{link(s)}</li>)}
          </ul>
        </nav>

        <ThemeToggle />

        <button
          type="button"
          className="icon-btn menu-btn"
          aria-expanded={drawerOpen ? 'true' : 'false'}
          aria-controls="drawer"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawerOpen((d) => !d)}
        >
          <Icon name={drawerOpen ? 'x' : 'menu'} size={18} />
        </button>
      </div>

      <nav id="drawer" className={`drawer${drawerOpen ? ' open' : ''}`} aria-label="Sections menu">
        {sections.map(link)}
      </nav>
    </header>
  );
}