"use client";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReduxProvider from "@/redux/lib/ReduxProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider>
          <AntdRegistry>
            {children}      
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
