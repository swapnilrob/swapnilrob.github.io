import ParentBento from '../components/ParentBento.jsx';
import ChildBento from '../components/ChildBento.jsx';
import ShowMoreList from '../components/ShowMoreList.jsx';
import Badge from '../components/Badge.jsx';
import LinkRow from '../components/LinkRow.jsx';
import { TagList } from '../components/Tag.jsx';
import { research } from '../data/content.js';

export default function Research({ notify }) {
  const render = (r) => (
    <ChildBento
      key={r.id}
      title={r.title}
      meta={r.period}
      sub={<><span>{r.role}</span><Badge status={r.status} /></>}
    >
      <p className="summary">{r.summary}</p>
      <TagList items={r.tags} />
      <LinkRow item={r} notify={notify} />
    </ChildBento>
  );

  return (
    <ParentBento id="research" num="03" label="Research" title="My Research works">
      <ShowMoreList items={research} limit={2} render={render} noun={['entry', 'entries']} anchorId="research" />
    </ParentBento>
  );
}