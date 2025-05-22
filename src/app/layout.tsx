"use client";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReduxProvider from "@/redux/lib/ReduxProvider";
import Script from "next/script";
import { CountryProvider } from "./(website)/CountryContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 

          <head>
        {/* Google Translate Meta */}
        <meta
          name="google-translate-customization"
          content="9f841e7780177523-3214ceb76f765f38-gc38c6fe6f9d06436-c"
        />

        {/* Google Translate Script */}
        <Script
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {
                    pageLanguage: 'en',
                    includedLanguages: 'en,nl,de,fr,pl,pt,es,sv',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                  },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
      </head> 

      <body className="antialiased">
        <ReduxProvider> 
            <CountryProvider> 
          <AntdRegistry>
            {children}      
          </AntdRegistry> 
          </CountryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
