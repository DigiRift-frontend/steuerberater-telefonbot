import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KI-Telefonbot für Steuerkanzleien | steuerberater-telefonbot.de",
  description:
    "Der intelligente KI-Telefonbot für Steuerkanzleien. 24/7 Erreichbarkeit, automatische Terminvergabe, Frist-Erinnerungen — DSGVO-konform. Full-Service von DigiRift.",
};

const trustItems = [
  { icon: "verified_user", label: "DSGVO-konform" },
  { icon: "dns", label: "Deutsche Server" },
  { icon: "support_agent", label: "Persönlicher Ansprechpartner" },
  { icon: "event_available", label: "Monatlich kündbar" },
];

const features = [
  {
    icon: "handshake",
    title: "Full-Service",
    text: "Wir übernehmen alles — von der Konzeption über die Einrichtung bis zur laufenden Optimierung. Sie müssen sich um nichts kümmern.",
  },
  {
    icon: "lock",
    title: "Steuergeheimnis-konform",
    text: "Unser Bot ist nach §203 StGB und den Anforderungen der Steuerberaterkammer konzipiert. Mandantendaten bleiben geschützt.",
  },
  {
    icon: "sync",
    title: "DATEV-kompatibel",
    text: "Nahtlose Integration mit Ihrer bestehenden Kanzleisoftware — Termine, Fristen und Mandantendaten werden automatisch synchronisiert.",
  },
];

const benefits = [
  "24/7 Erreichbarkeit — auch außerhalb der Sprechzeiten",
  "Automatische Terminvergabe direkt im Kanzleikalender",
  "Frist-Erinnerungen per Telefon an Ihre Mandanten",
  "Unterlagen-Einsammlung vor Steuererklärungsterminen",
  "Status-Auskünfte zu laufenden Vorgängen",
  "Entlastung Ihres Sekretariats um bis zu 70 %",
];

const steps = [
  {
    nr: "01",
    title: "Kostenloses Erstgespräch",
    text: "Wir analysieren Ihre Kanzleiabläufe und identifizieren, welche Anrufszenarien der Bot übernehmen kann.",
  },
  {
    nr: "02",
    title: "Konfiguration & Training",
    text: "Unser Team richtet den Bot ein, trainiert ihn auf Ihre Kanzlei und integriert ihn in Ihre Telefonanlage.",
  },
  {
    nr: "03",
    title: "Testphase & Optimierung",
    text: "Der Bot läuft parallel zu Ihrem Team. Wir optimieren kontinuierlich, bis alles perfekt sitzt.",
  },
];

const dsgvoChecks = [
  "Verarbeitung ausschließlich auf deutschen Servern",
  "Auftragsverarbeitungsvertrag (AVV) inklusive",
  "Konform mit §203 StGB (Steuergeheimnis)",
  "Keine Weitergabe von Mandantendaten an Dritte",
  "Automatische Löschung nach konfigurierbarer Frist",
  "Regelmäßige Sicherheitsaudits und Penetrationstests",
];

const faqs = [
  {
    q: "Wie funktioniert der KI-Telefonbot für meine Steuerkanzlei?",
    a: "Der Bot nimmt eingehende Anrufe entgegen, erkennt das Anliegen des Mandanten und bearbeitet es selbstständig — z. B. Terminvergabe, Frist-Erinnerungen oder Status-Auskünfte. Komplexe Anliegen leitet er an Ihr Team weiter.",
  },
  {
    q: "Ist der Bot DSGVO-konform und mit dem Steuergeheimnis vereinbar?",
    a: "Ja. Alle Daten werden ausschließlich auf deutschen Servern verarbeitet. Der Bot ist nach §203 StGB konzipiert und erfüllt die Anforderungen der Steuerberaterkammer. Ein Auftragsverarbeitungsvertrag ist inklusive.",
  },
  {
    q: "Muss ich mich selbst um die Technik kümmern?",
    a: "Nein. Wir sind ein Full-Service-Dienstleister. Von der Einrichtung über die Integration in Ihre Telefonanlage bis zur laufenden Optimierung — wir übernehmen alles.",
  },
  {
    q: "Kann der Bot mit meiner Kanzleisoftware zusammenarbeiten?",
    a: "Ja. Der Bot ist mit gängigen Kanzleisystemen wie DATEV kompatibel. Termine werden direkt in Ihren Kalender eingetragen, Fristen automatisch überwacht.",
  },
  {
    q: "Was passiert, wenn der Bot eine Frage nicht beantworten kann?",
    a: "Bei komplexen oder sensiblen Anliegen leitet der Bot den Anruf nahtlos an einen Mitarbeiter weiter. Der Mandant merkt kaum einen Unterschied.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            KI-Telefonie für Steuerkanzleien
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient-brand">Ihr KI-Telefonbot</span>
            <br />
            für Steuerkanzleien
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto">
            Wir bauen Ihren intelligenten Telefonassistenten — DSGVO-konform,
            steuergeheimniskonform, voll integriert. Sie müssen sich um nichts
            kümmern.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="cta-gradient text-on-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:opacity-90 transition-opacity"
            >
              Kostenloses Erstgespräch vereinbaren
            </Link>
            <Link
              href="/check"
              className="border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-primary/5 transition-colors"
            >
              Kosten-Rechner starten
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-surface-container-low border-y border-outline-variant/30">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-primary">
                {t.icon}
              </span>
              <span className="text-sm font-medium text-on-surface-variant">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
            Das Problem:{" "}
            <em className="text-primary">Steuerkanzleien am Limit</em>
          </h2>
          <p className="mt-4 text-center text-on-surface-variant max-w-2xl mx-auto">
            Die Steuerbranche steht unter Druck — Fachkräftemangel,
            steigende Mandantenansprüche und ein Telefon, das nicht stillsteht.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "64,6 %",
                label: "der Kanzleien leiden unter Fachkräftemangel",
                source: "BStBK-Umfrage 2024",
              },
              {
                stat: "3 Std.",
                label: "pro Tag verbringt eine Kanzlei-Mitarbeiterin am Telefon",
                source: "DATEV-Studie",
              },
              {
                stat: "59 %",
                label: "der Mandanten legen auf, wenn niemand abnimmt",
                source: "Branchenstudie Telefonie",
              },
            ].map((s) => (
              <div
                key={s.stat}
                className="bg-surface-container rounded-2xl p-8 text-center"
              >
                <p className="font-headline text-4xl font-bold text-primary">
                  {s.stat}
                </p>
                <p className="mt-2 text-on-surface-variant">{s.label}</p>
                <p className="mt-1 text-xs text-outline">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl cta-gradient rounded-3xl p-10 sm:p-14 text-center text-on-primary">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold">
            Was kosten Sie verpasste Mandantenanrufe?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Unser Kosten-Rechner zeigt Ihnen in 60 Sekunden, wie viel Umsatz
            Ihrer Kanzlei durch verpasste Anrufe entgeht.
          </p>
          <Link
            href="/check"
            className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-white/90 transition-colors"
          >
            Jetzt berechnen
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
            Warum <em className="text-primary">unser</em> KI-Telefonbot?
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm"
              >
                <span className="material-symbols-outlined text-4xl text-primary">
                  {f.icon}
                </span>
                <h3 className="font-headline text-xl font-semibold mt-4">
                  {f.title}
                </h3>
                <p className="mt-2 text-on-surface-variant">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
              Das bringt der Bot{" "}
              <em className="text-primary">Ihrer Kanzlei</em>
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    check_circle
                  </span>
                  <span className="text-on-surface-variant">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-container rounded-3xl p-10 text-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">
              phone_in_talk
            </span>
            <p className="mt-4 font-headline text-2xl font-semibold">
              Bis zu 70 % weniger Telefonlast
            </p>
            <p className="mt-2 text-on-surface-variant">
              Ihr Team kann sich auf die fachliche Arbeit konzentrieren — der
              Bot kümmert sich um den Rest.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
            In drei Schritten <em className="text-primary">zur Kanzlei der Zukunft</em>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.nr} className="text-center">
                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-primary text-on-primary font-headline text-2xl font-bold">
                  {s.nr}
                </div>
                <h3 className="font-headline text-xl font-semibold mt-4">
                  {s.title}
                </h3>
                <p className="mt-2 text-on-surface-variant">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DSGVO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 justify-center mb-8">
            <span className="material-symbols-outlined text-5xl text-primary">
              shield
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">
              DSGVO &amp; <em className="text-primary">Steuergeheimnis</em>
            </h2>
          </div>
          <p className="text-center text-on-surface-variant max-w-2xl mx-auto">
            Datenschutz ist für Steuerkanzleien nicht verhandelbar. Unser Bot
            erfüllt alle Anforderungen — von der DSGVO bis zum
            Steuergeheimnis nach §203 StGB.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {dsgvoChecks.map((c) => (
              <div key={c} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  check
                </span>
                <span className="text-sm text-on-surface-variant">{c}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/datenschutz-ki-telefonie"
              className="text-primary font-semibold hover:underline"
            >
              Mehr zu DSGVO &amp; KI-Telefonie erfahren &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12">
            Häufige Fragen
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm"
              >
                <summary className="font-headline text-lg font-semibold cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-on-surface-variant">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl cta-gradient rounded-3xl p-10 sm:p-14 text-center text-on-primary">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold">
            Bereit für die Kanzlei der Zukunft?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch — wir zeigen
            Ihnen, wie der KI-Telefonbot Ihre Kanzlei entlastet.
          </p>
          <Link
            href="/kontakt"
            className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-white/90 transition-colors"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
