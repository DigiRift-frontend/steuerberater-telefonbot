import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "KI-Telefonbot für Steuerkanzleien | steuerberater-telefonbot.de",
  description:
    "Der intelligente KI-Telefonbot für Steuerkanzleien. 24/7 Erreichbarkeit, DSGVO-konform, Full-Service — wir bauen, konfigurieren und betreuen Ihren Bot.",
};

export default function Home() {
  return <HomeContent />;
}
