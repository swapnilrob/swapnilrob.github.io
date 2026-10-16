import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import { TagList } from '../components/Tag.jsx';
import { skills } from '../data/content.js';

export default function Skills() {
  const render = (s) => (
    <ChildBento key={s.id} as="div">
      <h3 className="small-head">{s.name}</h3>
      <TagList items={s.items} />
    </ChildBento>
  );

  return (
    <ParentBento id="skills" num="07" label="Skills" title="Tools I work with">
      <ShowMoreList items={skills} limit={3} render={render} noun={['category', 'categories']} anchorId="skills" />
    </ParentBento>
  );
}