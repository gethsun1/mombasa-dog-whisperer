"use client";

import React from "react";
import Script from "next/script";

export default function CalendlyLoader() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: "https://calendly.com/jumakelly199/30min",
              text: "Schedule time with me",
              color: "#669be8",
              textColor: "#ffffff",
            });
          }
        }}
      />
    </>
  );
}
