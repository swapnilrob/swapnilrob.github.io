import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import { TagList } from '../components/Tag.jsx';
import { skills } from '../data/content.js';

// One card per category. A category can have `items` (one pill row)
// or `groups` (several labelled pill rows in the same card, used for coursework).

export default function Skills() {
  const render = (s) => (
    <ChildBento key={s.id} as="div">
      <h3 className="small-head">{s.name}</h3>
      {s.items && <TagList items={s.items} />}
      {s.groups && s.groups.map((g) => (
        <div key={g.label} className="sub-group">
          <h4 className="sub-group-label">{g.label}</h4>
          <TagList items={g.items} />
        </div>
      ))}
    </ChildBento>
  );

  return (
    <ParentBento id="skills" num="07" label="Skills" title="Skills and foundations">
      <ShowMoreList items={skills} limit={4} render={render} noun={['category', 'categories']} anchorId="skills" />
    </ParentBento>
  );
}