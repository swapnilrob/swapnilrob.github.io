// Outer card of a section. `id` is the scroll anchor.
// If `title` is missing, the small label itself becomes the <h2> (used by About).

export default function ParentBento({ id, num, label, title, lede, children }) {
  const headingId = `${id}-h`;
  return (
    <section id={id} className="parent" aria-labelledby={headingId}>
      <header className="parent-head">
        {title ? (
          <>
            <div className="eyebrow">{num} · {label}</div>
            <h2 id={headingId}>{title}</h2>
          </>
        ) : (
          <h2 id={headingId} className="eyebrow eyebrow-h">{num} · {label}</h2>
        )}
        {lede && <p className="lede">{lede}</p>}
      </header>
      {children}
    </section>
  );
}