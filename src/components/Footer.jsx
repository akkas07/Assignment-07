import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/timeline">Timeline</a>
        <a href="/stats">Stats</a>
        <a href="/add">Add Friend</a>
      </div>

      <small>© {new Date().getFullYear()} KeenKeeper — Stay Close, Stay Connected</small>
    </footer>
  );
}
