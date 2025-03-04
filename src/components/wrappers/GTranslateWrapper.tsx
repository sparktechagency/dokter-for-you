"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    // Remove old script if exists
    document.querySelectorAll("script[src*='gtranslate.net']").forEach((s) => s.remove());

    // Define gtranslateSettings
    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "fr", "it", "es"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Load the script dynamically after a 3-second delay
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.async = true;
      document.body.appendChild(script);
    }, 3000); // Delay of 3 seconds

    return () => clearTimeout(timeout); // Cleanup previous timeout
  }, [pathname]); // Run on route change

  return <div className="gtranslate_wrapper"></div>;
}
