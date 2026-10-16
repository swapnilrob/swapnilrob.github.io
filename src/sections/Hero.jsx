import Icon from '../components/icons.jsx';
import { profile } from '../data/content.js';
import { copyText } from '../utils/copyText.js';
import { asset } from '../utils/asset.js';

// The teal card at the top: round photo, name, title, buttons.

export default function Hero({ notify }) {
  const onCv = (e) => {
    if (!profile.cvUrl) {
      e.preventDefault();
      notify('CV link not added yet');
    }
  };

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="avatar">
        <div className="avatar-inner">
          {profile.photo ? (
            <img src={asset(profile.photo)} alt={`Photo of ${profile.name}`} />
          ) : (
            <span role="img" aria-label="Photo placeholder">{profile.initials}</span>
          )}
        </div>
      </div>

      <div>
        <div className="hero-eyebrow">Portfolio · {profile.org}</div>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-meta">{profile.degreeLine} · {profile.location}</p>
        <div className="hero-actions">
          <a
            className="btn btn-light"
            href={profile.cvUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCv}
          >
            <Icon name="cv" size={16} />View CV
          </a>
          <a className="btn btn-glass icon" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Icon name="github" size={17} />
          </a>
          <a className="btn btn-glass icon" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Icon name="linkedin" size={17} />
          </a>
          <button
            type="button"
            className="btn btn-glass icon"
            aria-label="Copy email address"
            onClick={() => copyText(profile.email, 'contact-email', notify)}
          >
            <Icon name="mail" size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}