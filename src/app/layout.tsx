import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReduxProvider from "@/redux/lib/ReduxProvider";
import { CountryProvider } from "./(website)/CountryContext";
import { GoogleTranslateScript } from "@/components/shared/GoogleTranslateScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <GoogleTranslateScript />
        <ReduxProvider>
          <CountryProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </CountryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

