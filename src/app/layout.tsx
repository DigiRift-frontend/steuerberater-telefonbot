import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KI-Telefonbot für Steuerkanzleien | steuerberater-telefonbot.de",
    template: "%s | steuerberater-telefonbot.de",
  },
  description:
    "Der intelligente KI-Telefonbot für Steuerkanzleien. 24/7 Erreichbarkeit, automatische Terminvergabe, Frist-Erinnerungen — DSGVO-konform und steuergeheimniskonform. Full-Service von DigiRift.",
  metadataBase: new URL("https://steuerberater-telefonbot.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "steuerberater-telefonbot.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..800;1,6..72,300..800&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
