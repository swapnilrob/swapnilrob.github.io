// Status pill with a dot. Amber for work not yet out; green for everything else
// (Ongoing, Pilot validated, Submitted, Accepted, Published).

const AMBER = ['In preparation', 'Under review', 'In progress'];

export default function Badge({ status }) {
  if (!status) return null;
  const tone = AMBER.includes(status) ? 'warn' : 'ok';
  return <span className={`badge ${tone}`}>{status}</span>;
}