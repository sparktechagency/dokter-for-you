import type { Metadata } from "next";
import Script from "next/script"; // Import Next.js Script component
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry"; 
import ReduxProvider from "@/redux/lib/ReduxProvider";

export const metadata: Metadata = {
  title: "Dokter For You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        
        {/* GTranslate Settings */}
        <Script id="gtranslate-settings" strategy="afterInteractive">
          {`window.gtranslateSettings = {"default_language":"en","languages":["en","fr","it","es","bn","nl","hi","ja","ko","da","la","el"],"wrapper_selector":".gtranslate_wrapper"}`}
        </Script>
        

        {/* GTranslate Script */}
        <Script 
          src="https://cdn.gtranslate.net/widgets/latest/float.js" 
          strategy="afterInteractive" 
        />
      </head> 

      <body className="antialiased"> 
        <ReduxProvider> 
          <AntdRegistry>
            {children}
            <div className="gtranslate_wrapper"></div>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
