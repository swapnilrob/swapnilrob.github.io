// Small message at the bottom of the screen ("Copied ...").
// App.jsx controls `visible` and hides it after 2 seconds.

export default function Toast({ message, visible }) {
  return (
    <div className={`toast${visible ? ' show' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}