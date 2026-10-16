// Pill used for tech stacks, interests and skills.

export default function Tag({ label }) {
  return <li className="tag">{label}</li>;
}

// A row of pills: <TagList items={['React', 'Vite']} />
export function TagList({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="tags">
      {items.map((t) => <Tag key={t} label={t} />)}
    </ul>
  );
}