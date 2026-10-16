import Icon from './icons.jsx';
import useFileExists from '../hooks/useFileExists.js';
import { asset } from '../utils/asset.js';

// Shows only the links that exist, always in this order:
// GitHub → Live demo → Demo video → Paper → Project report → Photos
// A report or photo file that is not in public/ yet stays hidden.

export default function LinkRow({ item, onPhotos, notify }) {
  const L = item.links || {};
  const report = asset(L.report);
  const reportIsUrl = /^https?:\/\//.test(L.report || '');
  const reportExists = useFileExists(reportIsUrl ? null : report) || reportIsUrl;
  const imageExists = useFileExists(asset(item.image));

  const out = [];
  if (L.github) {
    out.push(
      <a key="gh" className="chip-link" href={L.github} target="_blank" rel="noopener noreferrer">
        <Icon name="github" size={15} />GitHub
      </a>
    );
  }
  if (L.demo) {
    out.push(
      <a key="demo" className="chip-link primary" href={L.demo} target="_blank" rel="noopener noreferrer">
        <Icon name="globe" size={15} />Live demo
      </a>
    );
  }
  if (L.video) {
    out.push(
      <a key="video" className="chip-link" href={L.video} target="_blank" rel="noopener noreferrer">
        <Icon name="play" size={15} />Demo video
      </a>
    );
  }
  if (L.paper) {
    if (L.paper === 'pending') {
      out.push(
        <button key="paper" type="button" className="chip-link" onClick={() => notify && notify('Paper link not added yet')}>
          <Icon name="file" size={15} />Paper
        </button>
      );
    } else {
      out.push(
        <a key="paper" className="chip-link" href={L.paper} target="_blank" rel="noopener noreferrer">
          <Icon name="file" size={15} />Paper
        </a>
      );
    }
  }
  if (L.report && reportExists) {
    out.push(
      <a key="rep" className="chip-link" href={report} target="_blank" rel="noopener noreferrer">
        <Icon name="file" size={15} />Project report
      </a>
    );
  }
  if (item.image && imageExists && onPhotos) {
    out.push(
      <button key="img" type="button" className="chip-link" onClick={onPhotos}>
        <Icon name="image" size={15} />Photos
      </button>
    );
  }

  return out.length ? <div className="links">{out}</div> : null;
}