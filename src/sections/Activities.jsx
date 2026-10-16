import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import { activities } from '../data/content.js';
import { readyItems } from '../utils/sortByPriority.js';

const GROUPS = [['technical', 'Technical'], ['beyond', 'Beyond Academics']];
const TBA = <span className="muted-italic">To be added</span>;

export default function Activities() {
  // activities with no role yet show "To be added" in dev and are hidden on the live site
  const list = readyItems(activities, ['role', 'period']);

  const render = (a) => (
    <ChildBento
      key={a.id}
      title={a.org}
      href={a.url || undefined}
      meta={a.period || TBA}
      sub={a.role || TBA}
    >
      {a.points.length > 0 && (
        <ul className="points">
          {a.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
    </ChildBento>
  );

  return (
    <ParentBento id="activities" num="09" label="Activities" title="Clubs and community">
      {GROUPS.map(([key, name]) => {
        const items = list.filter((a) => a.group === key);
        if (!items.length) return null;
        return (
          <div key={key} className="group">
            <h3 className="group-title">{name}<span className="count">{items.length}</span></h3>
            <ShowMoreList items={items} limit={2} render={render} noun={['activity', 'activities']} anchorId="activities" />
          </div>
        );
      })}
    </ParentBento>
  );
}