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
      </body>
    </html>
  );
}
