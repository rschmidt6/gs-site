// src/components/CalendlyEmbed.jsx
import { useEffect, useRef, useState } from "react";

export function CalendlyEmbed() {
  // Reference to the container div
  const calendlyContainerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);

  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly && calendlyContainerRef.current) {
        try {
          const container = calendlyContainerRef.current;

          // Clear existing content
          container.innerHTML = "";

          // Create and configure widget
          const widget = document.createElement("div");
          widget.className = "calendly-inline-widget";
          widget.style.minWidth = "320px";
          widget.style.height = "700px";
          widget.setAttribute(
            "data-url",
            "https://calendly.com/garden-t-sports/?hide_gdpr_banner=1"
          );

          container.appendChild(widget);

          // Force widget creation
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/garden-t-sports/?hide_gdpr_banner=1",
            parentElement: container,
          });

          setIsLoaded(true);
        } catch (error) {
          console.error("Calendly initialization error:", error);
          if (loadAttempts < 3) {
            setTimeout(() => setLoadAttempts((prev) => prev + 1), 1000);
          }
        }
      }
    };

    // Load Calendly script if not already loaded
    if (!window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initCalendly;
      document.head.appendChild(script);
    } else {
      initCalendly();
    }

    return () => {
      if (calendlyContainerRef.current) {
        calendlyContainerRef.current.innerHTML = "";
      }
    };
  }, [loadAttempts]);

  return (
    <div className="calendly-container">
      <p className="booking-note">
        Please check the info section if you have not booked with me before and
        read the booking info
      </p>

      <div ref={calendlyContainerRef} className="calendly-wrapper">
        {!isLoaded && loadAttempts >= 3 && (
          <div className="calendly-fallback">
            <p>
              If the booking calendar doesn't load, please visit my Calendly
              directly:
            </p>
            <a
              href="https://calendly.com/garden-t-sports/"
              target="_blank"
              rel="noopener noreferrer"
              className="fallback-link"
            >
              Book Appointment on Calendly
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
