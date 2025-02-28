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
      <h3>
        I'm using calendly to book, let me know if you need another format
      </h3>
      <p>
        Please check the info section if you have not booked with me before and
        read the booking info
      </p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/garden-t-sports/?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: `${height}px` }}
      ></div>
    </div>
  );
}
