import type { Metadata } from "next";
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
      </head> 
      <body
        className={`antialiased`}
      > 
      <ReduxProvider > 
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </ReduxProvider>
      <div class="gtranslate_wrapper"></div>
<script>window.gtranslateSettings = {"default_language":"en","languages":["en","fr","it","es"],"wrapper_selector":".gtranslate_wrapper"}</script>
<script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
      </body>
      
    </html>
  );
}
