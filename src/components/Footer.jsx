import "./Footer.css";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">KeenKeeper</h2>

      <p className="footer-tagline">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <h4 className="footer-social-title">Social Links</h4>

      <div className="footer-social">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaXTwitter /></a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 KeenKeeper. All rights reserved.</span>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
