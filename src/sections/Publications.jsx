import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import Badge from '../components/Badge.jsx';
import Icon from '../components/icons.jsx';
import useFileExists from '../hooks/useFileExists.js';
import { publications, profile } from '../data/content.js';
import { asset } from '../utils/asset.js';

// Reference-list style: [1] Title. Authors. Venue, year. Status.
// When `url` is set in content.js, the title becomes a link.
// `abstract` (PDF) and `poster` (image or PDF) buttons appear only once
// the file exists in public/papers/.

// Author list with your own name in bold
function Authors({ list }) {
  if (!list || !list.length) return null;
  return (
    <p className="pub-authors">
      {list.map((a, i) => (
        <span key={a}>
          {a === profile.name ? <strong>{a}</strong> : a}
          {i < list.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}

function PubCard({ p, n, openLightbox }) {
  const abstract = asset(p.abstract);
  const poster = asset(p.poster);
  const hasAbstract = useFileExists(abstract);
  const hasPoster = useFileExists(poster);
  const posterIsPdf = /\.pdf$/i.test(p.poster || '');

  return (
    <ChildBento
      className="pub"
      title={p.title}
      href={p.url || undefined}
      media={<div className="pub-num">[{n}]</div>}
    >
      <Authors list={p.authors} />
      <p className="pub-venue">{p.venue}, {p.year}</p>
      <Badge status={p.status} />
      {(hasAbstract || hasPoster) && (
        <div className="links">
          {hasAbstract && (
            <a className="chip-link" href={abstract} target="_blank" rel="noopener noreferrer">
              <Icon name="file" size={15} />Extended abstract
            </a>
          )}
          {hasPoster && (
            <button
              type="button"
              className="chip-link"
              onClick={() => openLightbox({ title: p.title, sub: 'Conference poster', src: poster, type: posterIsPdf ? 'pdf' : 'image' })}
            >
              <Icon name="image" size={15} />Poster
            </button>
          )}
        </div>
      )}
    </ChildBento>
  );
}

export default function Publications({ openLightbox }) {
  const render = (p, i) => <PubCard key={p.id} p={p} n={i + 1} openLightbox={openLightbox} />;

  return (
    <ParentBento id="publications" num="04" label="Publications" title="Papers and Posters">
      <ShowMoreList items={publications} limit={3} render={render} noun={['paper', 'papers']} anchorId="publications" />
    </ParentBento>
  );
}