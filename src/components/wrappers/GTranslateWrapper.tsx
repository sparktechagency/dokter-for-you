"use client";

import { useEffect } from "react";

// Extend window type to avoid TypeScript error
declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      languages: string[];
      wrapper_selector: string;
    };
  }
}

export default function GTranslateWrapper() {
  useEffect(() => {
    // Function to reinitialize GTranslate
    const loadGTranslate = () => {
      if (typeof window !== "undefined") {
        // Ensure gtranslateSettings exists
        window.gtranslateSettings = {
          default_language: "en",
          languages: ["en", "fr", "it", "es"],
          wrapper_selector: ".gtranslate_wrapper",
        };

        // Load the script dynamically
        const script = document.createElement("script");
        script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Delay execution to ensure content is loaded
    setTimeout(loadGTranslate, 1500);
  }, []);

  return <div className="gtranslate_wrapper"></div>;
}
