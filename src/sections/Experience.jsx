import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import LogoMark from '../components/LogoMark.jsx';
import { TagList } from '../components/Tag.jsx';
import { experience } from '../data/content.js';

export default function Experience() {
  const render = (x) => (
    <ChildBento
      key={x.id}
      title={x.org}
      href={x.url || undefined}
      meta={x.period}
      sub={x.role}
      media={<LogoMark src={x.logo} initials={x.initials} name={x.org} />}
    >
      {x.context && <p className="ctx">{x.context}</p>}
      <ul className="points">
        {x.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <TagList items={x.tags} />
    </ChildBento>
  );

  return (
    <ParentBento id="experience" num="05" label="Experience" title="Where I have worked">
      <ShowMoreList items={experience} limit={2} render={render} noun={['role', 'roles']} anchorId="experience" />
    </ParentBento>
  );
}