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
