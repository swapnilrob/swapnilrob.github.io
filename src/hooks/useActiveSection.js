import { useEffect, useState } from 'react';

// Returns the id of the section currently in the middle of the screen.
// The navbar uses it to underline the matching link.

export default function useActiveSection(ids) {
  const [active, setActive] = useState('top');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-42% 0px -52% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // ids is a fixed list, so this only runs once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}