// src/components/InfoPage.jsx
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export function InfoPage() {
  return (
    <div className="info-page">
      <div className="info-header">
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

      <div className="info-sections">
        <section className="info-section">
          <h3>Pricing</h3>
          <p>
            Flash designs start at $150. Custom work is priced based on size,
            detail, and placement.
          </p>
          <p>Minimum booking is $100.</p>
        </section>

        <section className="info-section">
          <h3>Location</h3>
          <p>123 Main Street</p>
          <p>Portland, OR 97214</p>
          <p>By appointment only</p>
        </section>

        <section className="info-section">
          <h3>Flash Questions</h3>
          <p>Flash designs are available for immediate booking.</p>
          <p>Small adjustments to color and size are possible.</p>
          <p>Flash designs are first come, first served.</p>
        </section>
      </div>

      <div className="about-section">
        <h3>About</h3>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/IMG_0835.jpg" alt="Artist photo" />
          </div>
          <div className="about-text">
            <p>
              Traditional tattooer focusing on bold, readable designs that will
              stand the test of time. Specializing in American Traditional,
              Japanese, and Bold Blackwork.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
