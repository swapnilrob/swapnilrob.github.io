import useTheme from '../hooks/useTheme.js';
import Icon from './icons.jsx';

// Moon in light mode, sun in dark mode.

export default function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={17} />
    </button>
  );
}