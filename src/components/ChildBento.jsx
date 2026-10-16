import Icon from './icons.jsx';

// Inner card. Optional slots:
//   media  → a column on the LEFT (logo square, publication number)
//   aside  → a column on the RIGHT (project photo)
//   action → a button on the right, vertically centred (certificate View)
// If `href` is set, the title becomes an external link with an icon.

export default function ChildBento({
  title,
  titleAs: TitleTag = 'h3',
  meta,
  sub,
  href,
  media,
  aside,
  action,
  as: Wrapper = 'article',
  className = '',
  children,
}) {
  const classes = [
    'child',
    media && 'has-media',
    aside && 'has-aside',
    action && 'has-action',
    className,
  ].filter(Boolean).join(' ');

  const head = title && (
    <div className="child-head">
      <TitleTag className="child-title">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
            <Icon name="ext" size={13} />
          </a>
        ) : (
          title
        )}
      </TitleTag>
      {meta && <span className="meta">{meta}</span>}
    </div>
  );

  return (
    <Wrapper className={classes}>
      {media && <div className="child-media">{media}</div>}
      <div className="child-body">
        {head}
        {sub && <div className="sub">{sub}</div>}
        {children}
      </div>
      {aside && <div className="child-aside">{aside}</div>}
      {action && <div className="child-action">{action}</div>}
    </Wrapper>
  );
}