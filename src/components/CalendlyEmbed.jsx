// src/components/CalendlyEmbed.jsx
import { useEffect, useRef } from "react";

export function CalendlyEmbed() {
  // Reference to the container div
  const calendlyContainerRef = useRef(null);

  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly widget after script loads
    script.onload = () => {
      if (calendlyContainerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/garden-t-sports/?hide_gdpr_banner=1",
          parentElement: calendlyContainerRef.current,
          prefill: {
            customAnswers: {
              a1: "Referred from Garden Sports website",
            },
          },
          resize: true, // Enable auto-resize to prevent scrollbars
        });
      }
    };

    // Clean up function
    return () => {
      // Remove the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="calendly-container">
      <h3>
        I'm using calendly to book, let me know if you need another format
      </h3>
      <p>
        Please check the info section if you have not booked with me before and
        read the booking info
      </p>
      <div
        ref={calendlyContainerRef}
        id="calendly-embed"
        className="calendly-inline-widget"
        style={{ minHeight: "650px" }}
      ></div>
    </div>
  );
}
