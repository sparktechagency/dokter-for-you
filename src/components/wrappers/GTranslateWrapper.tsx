"use client";

import { useEffect, useState } from "react";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return; // Prevent multiple loads

    const timeout = setTimeout(() => {
      // Define gtranslateSettings
      window.gtranslateSettings = {
        default_language: "en",
        languages: ["en", "fr", "it", "es"],
        wrapper_selector: ".gtranslate_wrapper",
      };

      // Load the script dynamically
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.async = true;
      script.onload = () => setLoaded(true); // Mark script as loaded
      document.body.appendChild(script);
    }, 3000); // Delay of 3 seconds

    return () => clearTimeout(timeout); // Cleanup if component unmounts
  }, [loaded]); // Only runs once

  return <div className="gtranslate_wrapper"></div>;
}
