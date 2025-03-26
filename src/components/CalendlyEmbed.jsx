// src/components/CalendlyEmbed.jsx
import { useEffect, useRef, useState } from "react";
import "./CalendlyEmbed.css";

export function CalendlyEmbed() {
  const [height, setHeight] = useState(650);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load the Calendly script
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    head.appendChild(script);

    // Setup event listener for Calendly messages
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        // Handle height changes from Calendly
        if (
          e.data.event === "calendly:scroll" ||
          e.data.event === "calendly:resize"
        ) {
          if (e.data.data && e.data.data.height) {
            setHeight(e.data.data.height + 10); // Add a little padding
          }
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="calendly-container" ref={containerRef}>
      <p className="calendly-text">
        Currently I'm just booking a bit less structured, just send me an email
        with a simple idea of what you're interested in and I will send you a
        link to my calendly if everything looks good! Please check out the info
        tab for more.
      </p>
      {/* <p className="calendly-text">
        If the calendly embed below fails to load here is a
        <a
          href="https://calendly.com/garden-t-sports"
          className="calendly-link"
        >
          direct link
        </a>
      </p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/garden-t-sports/?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: `${height}px` }}
      ></div> */}
    </div>
  );
}
