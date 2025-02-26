// src/components/Footer.jsx
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-social-container">
          <a
            href="https://instagram.com/gardensportstattoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="instagram-link"
          >
            <FaInstagram size={24} />
          </a>

          <button
            onClick={() =>
              window.open("https://gardensportstattoo.substack.com", "_blank")
            }
            className="subscribe-button"
          >
            Subscribe to Newsletter
          </button>

          <a href="mailto:youremail@example.com" className="email-link">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
