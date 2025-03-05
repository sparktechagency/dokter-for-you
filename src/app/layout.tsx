"use client";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry"; 
import ReduxProvider from "@/redux/lib/ReduxProvider";
import GTranslateWrapper from "@/components/wrappers/GTranslateWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> 
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.gtranslateSettings = {"default_language":"en","languages":["en","fr","it","es"],"wrapper_selector":".gtranslate_wrapper"}`,
          }}
        />
      </head> 

      <body className="antialiased"> 
        <ReduxProvider> 
          <AntdRegistry>
            {children}
            <GTranslateWrapper /> 
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
