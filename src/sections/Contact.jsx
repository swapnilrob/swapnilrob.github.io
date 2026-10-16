import ParentBento from '../components/ParentBento.jsx';
import Icon from '../components/icons.jsx';
import { profile } from '../data/content.js';
import { copyText } from '../utils/copyText.js';

// Email spans the first row; GitHub and LinkedIn sit side by side under it.
// Copy is the main action. No contact form.

const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '');

export default function Contact({ notify }) {
  const rows = [
    { key: 'email', label: 'Email', value: profile.email, icon: 'mail' },
    { key: 'github', label: 'GitHub', value: shortUrl(profile.github), href: profile.github, icon: 'github' },
    { key: 'linkedin', label: 'LinkedIn', value: shortUrl(profile.linkedin), href: profile.linkedin, icon: 'linkedin' },
  ];

  return (
    <ParentBento id="contact" num="10" label="Contact" title="Get in touch" lede="Email is the quickest way to reach me.">
      <div className="contact-grid">
        {rows.map((r) => (
          <div key={r.key} className="child contact">
            <span className="contact-ic"><Icon name={r.icon} size={18} /></span>
            <div className="contact-body">
              <div className="contact-label">{r.label}</div>
              <div className="contact-value" id={`contact-${r.key}`}>{r.value}</div>
            </div>
            <div className="contact-actions">
              <button
                type="button"
                className="icon-btn sm"
                aria-label={`Copy ${r.label}`}
                onClick={() => copyText(r.value, `contact-${r.key}`, notify)}
              >
                <Icon name="copy" size={15} />
              </button>
              {r.href && (
                <a className="icon-btn sm" href={r.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${r.label}`}>
                  <Icon name="ext" size={15} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </ParentBento>
  );
}