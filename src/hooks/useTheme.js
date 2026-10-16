import { useEffect, useState } from 'react';

// Returns [theme, toggle].
// First visit: follows the device. After a click: the saved choice wins.

const KEY = 'pf-theme';

function systemTheme() {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (e) {
    return 'light';
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || systemTheme()
  );

  // If the visitor has not picked a theme, follow device changes live.
  useEffect(() => {
    let mq;
    try {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
    } catch (e) {
      return undefined;
    }
    const onChange = () => {
      if (!document.documentElement.hasAttribute('data-theme')) setTheme(systemTheme());
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {
      /* storage blocked: the choice lasts for this visit only */
    }
    setTheme(next);
  };

  return [theme, toggle];
}