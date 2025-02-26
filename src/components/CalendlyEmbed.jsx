// src/components/CalendlyEmbed.jsx
import { useEffect, useRef, useState } from "react";

export function CalendlyEmbed() {
  // Reference to the container div
  const calendlyContainerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);

  useEffect(() => {
    // Function to initialize Calendly
    const initCalendly = () => {
      if (window.Calendly && calendlyContainerRef.current) {
        try {
          // Make sure the element has an ID and is in the DOM
          const container = calendlyContainerRef.current;
          container.id = "calendly-embed";

          // Inline approach instead of using the widget API
          const inlineEmbed = document.createElement("div");
          inlineEmbed.className = "calendly-inline-widget";
          inlineEmbed.dataset.url =
            "https://calendly.com/garden-t-sports/?hide_gdpr_banner=1";
          inlineEmbed.style.minWidth = "320px";
          inlineEmbed.style.height = "700px";

          // Make sure container is empty
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }

          container.appendChild(inlineEmbed);

          // Force Calendly to process the widget
          if (
            window.Calendly &&
            typeof window.Calendly.createInlineWidgets === "function"
          ) {
            window.Calendly.createInlineWidgets();
            setIsLoaded(true);
          }
        } catch (error) {
          console.error("Calendly initialization error:", error);
          if (loadAttempts < 3) {
            setTimeout(() => setLoadAttempts((prev) => prev + 1), 1000);
          }
        }
      } else if (loadAttempts < 3) {
        // Retry loading after a delay
        setTimeout(() => setLoadAttempts((prev) => prev + 1), 1000);
      }
    };

    // Check if Calendly script is already loaded
    if (window.Calendly) {
      initCalendly();
      return;
    }

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      console.log("Calendly script loaded");
      setTimeout(initCalendly, 500); // Give it a moment to initialize
    };
    script.onerror = (error) => {
      console.error("Error loading Calendly script:", error);
    };
    document.body.appendChild(script);

    // Clean up function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
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
