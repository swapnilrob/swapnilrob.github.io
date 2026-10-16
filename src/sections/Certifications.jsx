import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import Icon from '../components/icons.jsx';
import { certifications } from '../data/content.js';
import { readyItems } from '../utils/sortByPriority.js';
import { asset } from '../utils/asset.js';
import Badge from '../components/Badge.jsx';

const GROUPS = [['technical', 'Technical'], ['beyond', 'Beyond Academics']];

export default function Certifications({ openLightbox }) {
  // certificates with no issuer yet show "To be added" in dev and are hidden on the live site
  const list = readyItems(certifications, ['issuer']);
  const anyCredential = list.some((c) => c.credentialUrl);

  const render = (c) => {
    const subText = c.issuer
      ? `${c.issuer}${c.date ? ` · ${c.date}` : ''}`
      : null;
    return (
      <ChildBento
        key={c.id}
        as="div"
        className="cert"
        title={c.name}
        titleAs="h4"
        href={c.credentialUrl || undefined}
        sub={subText
          ? <>{subText}{c.status && <Badge status={c.status} />}</>
          : <span className="muted-italic">To be added</span>}
        action={c.file &&
          <button
            type="button"
            className="chip-link"
            aria-label={`View certificate: ${c.name}`}
            onClick={() => openLightbox({ title: c.name, sub: subText, src: asset(c.file), type: c.fileType })}
          >
            <Icon name="eye" size={15} />View
          </button>
        }
      />
    );
  };

  return (
    <ParentBento id="certifications" num="08" label="Certifications" title="Courses and recognitions">
      {GROUPS.map(([key, name]) => {
        const items = list.filter((c) => c.group === key);
        if (!items.length) return null;
        return (
          <div key={key} className="group">
            <h3 className="group-title">{name}<span className="count">{items.length}</span></h3>
            <ShowMoreList items={items} limit={2} render={render} noun={['certificate', 'certificates']} anchorId="certifications" />
          </div>
        );
      })}
      {!anyCredential && (
        <p className="hint">A certificate name becomes a link to its credential page once a URL is added.</p>
      )}
    </ParentBento>
  );
}