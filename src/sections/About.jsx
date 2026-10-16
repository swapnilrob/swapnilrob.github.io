import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import LogoMark from '../components/LogoMark.jsx';
import { TagList } from '../components/Tag.jsx';
import Icon from '../components/icons.jsx';
import { profile, education } from '../data/content.js';
import { sortByPriority } from '../utils/sortByPriority.js';

// No headline on purpose: the "02 · About" label is the heading.

export default function About({ notify }) {
  const onCv = (e) => {
    if (!profile.cvUrl) {
      e.preventDefault();
      notify('CV link not added yet');
    }
  };

  return (
    <ParentBento id="about" num="02" label="About">
      <div className="stack">
        <ChildBento as="div">
          <div className="bio-row">
            <p>{profile.bio}</p>
            <a
              className="chip-link primary"
              href={profile.cvUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCv}
            >
              <Icon name="cv" size={15} />View CV
            </a>
          </div>
        </ChildBento>

        <ChildBento as="div">
          <h3 className="small-head">Research interests</h3>
          <TagList items={profile.interests} />
        </ChildBento>

        {sortByPriority(education).map((e) => (
          <ChildBento
            key={e.id}
            title={e.name}
            meta={e.period}
            sub={`${e.degree} · ${e.place}`}
            media={<LogoMark src={e.logo} initials={e.initials} name={e.name} />}
          >
            <ul className="points">
              {e.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </ChildBento>
        ))}
      </div>
    </ParentBento>
  );
}