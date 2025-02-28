// src/components/Footer.jsx
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top-row">
          <a
            href="https://instagram.com/garden_sports"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="instagram-link"
          >
            <FaInstagram size={24} />
          </a>

          <button
            onClick={() =>
              window.open("https://substack.com/@turnipgarden", "_blank")
            }
            className="subscribe-button"
          >
            Subscribe to Newsletter
          </button>
        </div>

        <div className="footer-bottom-row">
          <span className="email-text">garden.t.sports@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
