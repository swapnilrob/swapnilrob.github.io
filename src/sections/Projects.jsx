import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import LinkRow from '../components/LinkRow.jsx';
import { TagList } from '../components/Tag.jsx';
import useFileExists from '../hooks/useFileExists.js';
import { projects } from '../data/content.js';
import { asset } from '../utils/asset.js';

// One project card. The photo column only appears once the file exists in public/projects/.
function ProjectCard({ p, openLightbox, notify }) {
  const img = asset(p.image);
  const hasImage = useFileExists(img);
  // the card photo first, then any extra images (e.g. a circuit diagram)
  const gallery = [
    { src: img, caption: p.imageCaption },
    ...(p.moreImages || []).map((m) => ({ src: asset(m.src), caption: m.caption })),
  ];
  const openPhoto = () => openLightbox({ title: p.title, sub: p.subtitle, type: 'image', gallery });

  const photo = hasImage ? (
    <button type="button" className="media" aria-label={`View photo of ${p.title}`} onClick={openPhoto}>
      <img src={img} alt={`${p.title}: ${p.subtitle}`} loading="lazy" style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined} />
    </button>
  ) : null;

  return (
    <ChildBento title={p.title} meta={p.year} sub={p.subtitle} aside={photo}>
      {p.context && <p className="proj-context">{p.context}</p>}
      <p className="summary">{p.summary}</p>
      {p.myPart && <p className="my-part"><strong>My part:</strong> {p.myPart}</p>}
      <TagList items={p.tags} />
      <LinkRow item={p} onPhotos={openPhoto} notify={notify} />
    </ChildBento>
  );
}

export default function Projects({ openLightbox, notify }) {
  const render = (p) => <ProjectCard key={p.id} p={p} openLightbox={openLightbox} notify={notify} />;
  return (
    <ParentBento
      id="projects"
      num="06"
      label="Projects"
      title="Things I have built"
    >
      <ShowMoreList items={projects} limit={3} render={render} noun={['project', 'projects']} anchorId="projects" />
    </ParentBento>
  );
}