"use client"; // Ensure it's a client component

import { useEffect } from "react";

export default function GTranslateWrapper() {
  useEffect(() => {
    // Function to reinitialize GTranslate
    const loadGTranslate = () => {
      if (typeof window !== "undefined" && window.gtranslateSettings) {
        window.gtranslateSettings.wrapper_selector = ".gtranslate_wrapper";
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
