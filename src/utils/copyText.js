// Copies text to the clipboard and shows a toast.
// If the clipboard is blocked, selects the text on the page instead.
//   text   → what to copy
//   elId   → id of the element showing that text (for the fallback)
//   notify → function that shows a toast

export function copyText(text, elId, notify) {
  const fallback = () => {
    const el = elId && document.getElementById(elId);
    if (el) {
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    notify('Selected. Press Ctrl+C to copy');
  };

  try {
    const p = navigator.clipboard && navigator.clipboard.writeText(text);
    if (p) p.then(() => notify(`Copied ${text}`), fallback);
    else fallback();
  } catch (e) {
    fallback();
  }
}