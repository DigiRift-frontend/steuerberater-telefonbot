import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "So funktioniert's — KI-Telefonbot für Steuerkanzleien",
  description:
    "In drei Phasen zum KI-Telefonbot: Erstgespräch, Konfiguration & Training, Testphase & Optimierung. Full-Service von DigiRift.",
};

const phases = [
  {
    nr: "01",
    icon: "handshake",
    title: "Kostenloses Erstgespräch",
    subtitle: "Ihre Kanzlei verstehen",
    text: "In einem persönlichen Gespräch analysieren wir Ihre aktuellen Telefonabläufe. Welche Anrufe kommen am häufigsten? Wo geht Zeit verloren? Welche Prozesse lassen sich automatisieren? Gemeinsam definieren wir den optimalen Einsatzbereich für Ihren Bot.",
    items: [
      "Analyse Ihrer typischen Anrufszenarien",
      "Identifikation von Automatisierungspotenzialen",
      "Definition der Bot-Persönlichkeit und Begrüßung",
      "Klärung technischer Voraussetzungen",
      "Festlegung von KPIs und Erfolgskriterien",
    ],
  },
  {
    nr: "02",
    icon: "tune",
    title: "Konfiguration & Training",
    subtitle: "Wir bauen Ihren Bot",
    text: "Unser Team konfiguriert den Bot exakt nach Ihren Vorgaben. Wir trainieren ihn mit kanzleispezifischen Begriffen, integrieren ihn in Ihre Telefonanlage und verbinden ihn mit Ihrem Kalendersystem. Sie müssen sich um nichts kümmern.",
    items: [
      "Individuelle Konfiguration der Gesprächsabläufe",
      "Training mit steuerrechtlichem Fachvokabular",
      "Integration in Ihre bestehende Telefonanlage",
      "Anbindung an DATEV und Kalendersysteme",
      "DSGVO-konforme Einrichtung und AVV",
    ],
  },
  {
    nr: "03",
    icon: "speed",
    title: "Testphase & Optimierung",
    subtitle: "Perfektionierung im Echtbetrieb",
    text: "Der Bot startet im Parallelbetrieb — Ihre Mitarbeiter können jederzeit eingreifen. Wir analysieren jedes Gespräch und optimieren kontinuierlich. Nach der Testphase läuft der Bot eigenständig und entlastet Ihr Team.",
    items: [
      "2-wöchiger Parallelbetrieb mit Ihrem Team",
      "Tägliche Analyse und Optimierung der Gespräche",
      "Feintuning der Erkennung und Weiterleitung",
      "Schulung Ihres Teams für die Zusammenarbeit mit dem Bot",
      "Go-Live mit persönlicher Betreuung",
    ],
  },
];

const afterLaunch = [
  {
    icon: "monitoring",
    title: "Kontinuierliche Optimierung",
    text: "Wir analysieren die Bot-Leistung regelmäßig und passen Gesprächsabläufe an veränderte Anforderungen an.",
  },
  {
    icon: "support_agent",
    title: "Persönlicher Ansprechpartner",
    text: "Ihr fester Ansprechpartner bei DigiRift steht Ihnen jederzeit für Fragen und Anpassungen zur Verfügung.",
  },
  {
    icon: "update",
    title: "Regelmäßige Updates",
    text: "Neue Funktionen und Verbesserungen werden automatisch eingespielt — ohne Aufwand für Ihre Kanzlei.",
  },
  {
    icon: "bar_chart",
    title: "Monatliches Reporting",
    text: "Sie erhalten einen detaillierten Bericht über alle Bot-Gespräche, Erfolgsquoten und Optimierungsvorschläge.",
  },
];

export default function SoFunktionierts() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            So funktioniert&apos;s
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold leading-tight">
            In drei Phasen zum{" "}
            <em className="text-gradient-brand">KI-Telefonbot</em>
          </h1>
          <p className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto">
            Wir übernehmen den gesamten Prozess — von der Analyse bis zum
            laufenden Betrieb. Sie lehnen sich zurück.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {phases.map((p) => (
            <div key={p.nr} className="relative">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 rounded-full cta-gradient flex items-center justify-center text-on-primary font-headline text-2xl font-bold">
                  {p.nr}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {p.subtitle}
                  </p>
                  <h2 className="font-headline text-2xl sm:text-3xl font-bold mt-1">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-on-surface-variant">{p.text}</p>
                  <ul className="mt-6 space-y-3">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                          check_circle
                        </span>
                        <span className="text-on-surface-variant">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* After Launch */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
            Nach dem Launch:{" "}
            <em className="text-primary">Wir bleiben an Ihrer Seite</em>
          </h2>
          <p className="mt-4 text-center text-on-surface-variant max-w-2xl mx-auto">
            Ein KI-Telefonbot ist kein Produkt, das man einmal installiert und
            vergisst. Wir betreuen Ihren Bot dauerhaft.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {afterLaunch.map((a) => (
              <div
                key={a.title}
                className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm"
              >
                <span className="material-symbols-outlined text-3xl text-primary">
                  {a.icon}
                </span>
                <h3 className="font-headline text-xl font-semibold mt-3">
                  {a.title}
                </h3>
                <p className="mt-2 text-on-surface-variant">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl cta-gradient rounded-3xl p-10 sm:p-14 text-center text-on-primary">
          <h2 className="font-headline text-3xl font-bold">
            Bereit für Phase 1?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Im kostenlosen Erstgespräch zeigen wir Ihnen, wie der Bot
            konkret in Ihrer Kanzlei aussehen kann.
          </p>
          <Link
            href="/beratung"
            className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-white/90 transition-colors"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
