import { asset } from '../utils/asset.js';

// Rounded square logo. Shows the image if `src` is set, otherwise initials.

export default function LogoMark({ src, initials, name }) {
  return (
    <div className="logo">
      {src ? (
        <img src={asset(src)} alt={`${name} logo`} loading="lazy" />
      ) : (
        <span role="img" aria-label={`${name} logo placeholder`}>{initials}</span>
      )}
    </div>
  );
}