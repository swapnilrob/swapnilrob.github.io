import { useCallback, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Lightbox from './components/Lightbox.jsx';
import Toast from './components/Toast.jsx';
import Icon from './components/icons.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Research from './sections/Research.jsx';
import Publications from './sections/Publications.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Certifications from './sections/Certifications.jsx';
import Activities from './sections/Activities.jsx';
import Contact from './sections/Contact.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import { scrollToId } from './utils/scroll.js';
import { profile } from './data/content.js';

// Navbar links: [section id, label]
const SECTIONS = [
  ['about', 'About'],
  ['research', 'Research'],
  ['publications', 'Publications'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['certifications', 'Certifications'],
  ['activities', 'Activities'],
  ['contact', 'Contact'],
];

export default function App() {
  const activeId = useActiveSection(['top', ...SECTIONS.map((s) => s[0])]);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [toast, setToast] = useState({ message: '', visible: false });
  const timer = useRef(null);

  // shows a message at the bottom for 2 seconds
  const notify = useCallback((message) => {
    setToast({ message, visible: true });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2000);
  }, []);

  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  return (
    <>
      <Navbar name={profile.name} sections={SECTIONS} activeId={activeId} />

      <main className="wrap">
        <Hero notify={notify} />
        <About notify={notify} />
        <Research notify={notify} />
        <Publications openLightbox={setLightboxItem} />
        <Experience />
        <Projects openLightbox={setLightboxItem} notify={notify} />
        <Skills />
        <Certifications openLightbox={setLightboxItem} />
        <Activities />
        <Contact notify={notify} />
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name} · Built with React</span>
        <button type="button" className="linkish" onClick={() => scrollToId('top')}>
          <Icon name="arrow-up" size={14} />Back to top
        </button>
      </footer>

      {lightboxItem && <Lightbox item={lightboxItem} onClose={closeLightbox} />}
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}