// src/components/CalendlyEmbed.jsx
import { InlineWidget } from "react-calendly";
import { useMemo } from "react";

export function CalendlyEmbed() {
  // Actual Calendly URL
  const calendlyUrl = "https://calendly.com/garden-t-sports/";

  // Set up prefilled information (optional)
  const prefill = useMemo(
    () => ({
      email: "",
      firstName: "",
      lastName: "",
      customAnswers: {
        a1: "Referred from Garden Sports website",
      },
    }),
    []
  );

  return (
    <div className="calendly-container">
      <h3>
        I'm using calendly to book, let me know if you need another format
      </h3>
      <p>
        Please check the info section if you have not booked with me before and
        read the booking info
      </p>
      <div className="calendly-inline-widget">
        <InlineWidget
          url={calendlyUrl}
          prefill={prefill}
          styles={{
            height: "650px",
          }}
        />
      </div>
    </div>
  );
}
