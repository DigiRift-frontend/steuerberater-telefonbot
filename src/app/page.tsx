import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "KI-Telefonbot für Steuerkanzleien | steuerberater-telefonbot.de",
  description:
    "Der intelligente KI-Telefonbot für Steuerkanzleien. 24/7 Erreichbarkeit, DSGVO-konform, Full-Service — wir bauen, konfigurieren und betreuen Ihren Bot.",
};

const faqs = [
  {
    q: "Wie funktioniert der KI-Telefonbot für meine Steuerkanzlei?",
    a: "Der Bot nimmt eingehende Anrufe entgegen, erkennt das Anliegen des Mandanten und bearbeitet es selbstständig — z. B. Terminvergabe, Frist-Erinnerungen oder Status-Auskünfte. Komplexe Anliegen leitet er nahtlos an Ihr Team weiter.",
  },
  {
    q: "Ist der Bot DSGVO-konform und mit dem Steuergeheimnis vereinbar?",
    a: "Ja. Alle Daten werden ausschließlich auf deutschen Servern verarbeitet. Der Bot ist nach §203 StGB konzipiert und erfüllt die Anforderungen der Steuerberaterkammer. Ein Auftragsverarbeitungsvertrag ist inklusive.",
  },
  {
    q: "Muss ich mich selbst um die Technik kümmern?",
    a: "Nein. Wir sind ein Full-Service-Dienstleister. Von der Einrichtung über die Integration in Ihre Telefonanlage bis zur laufenden Optimierung — wir übernehmen alles. Sie müssen nichts konfigurieren.",
  },
  {
    q: "Kann der Bot mit meiner Kanzleisoftware zusammenarbeiten?",
    a: "Ja. Der Bot ist mit gängigen Kanzleisystemen wie DATEV kompatibel. Termine werden direkt in Ihren Kalender eingetragen, Fristen automatisch überwacht.",
  },
  {
    q: "Was passiert, wenn der Bot eine Frage nicht beantworten kann?",
    a: "Bei komplexen oder sensiblen Anliegen leitet der Bot den Anruf nahtlos an einen Mitarbeiter weiter. Der Mandant merkt kaum einen Unterschied — und Ihr Team erhält alle relevanten Infos vorab.",
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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="z-10 text-left">
            <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-on-surface mb-6">
              Ihr KI-Telefonbot für Steuerkanzleien:{" "}
              <span className="italic text-gradient-brand">
                Entlastung, die ankommt.
              </span>
            </h1>
            <p className="text-on-secondary-container text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Wir bauen, konfigurieren und betreuen Ihren KI-Telefonbot. Sie
              kümmern sich um Ihre Mandanten — wir kümmern uns um den Rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="cta-gradient px-8 py-4 rounded-full text-white text-lg font-medium shadow-xl shadow-blue-900/20 hover:opacity-95 transition-all transform active:scale-95 text-center"
              >
                Kostenloses Erstgespräch vereinbaren
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 rounded-full bg-surface-container-high text-on-surface text-lg font-medium hover:bg-slate-200 transition-all text-center"
              >
                Demo anhören
              </Link>
            </div>

            {/* Social proof: stacked avatars */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Image
                    key={n}
                    src={`/images/avatar-${n}.jpg`}
                    alt={`Kanzlei ${n}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-primary text-white text-xs font-semibold">
                  +250
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">
                  Vertrauensvolle Kanzleien
                </p>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Hero image + floating quote */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl transform lg:translate-x-12 ring-1 ring-slate-200">
              <Image
                src="/images/hero-woman.jpg"
                alt="Steuerberaterin in moderner Kanzlei"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 p-8 glass-nav rounded-2xl shadow-xl max-w-xs border border-slate-200">
              <p className="font-headline text-2xl italic text-primary mb-2">
                &ldquo;Endlich Ruhe für komplexe Fälle.&rdquo;
              </p>
              <p className="text-sm text-on-secondary-container">
                — Dr. Elena Schmidt, Steuerberaterin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      {/* ── Top 3 Anwendungsfälle ── */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-4">
              Was Ihr Telefonbot kann
            </h2>
            <p className="text-on-secondary-container">
              Die drei häufigsten Anwendungsfälle, die zusammen über 60% aller Kanzlei-Anrufe abdecken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "calendar_month",
                badge: "Häufigster Anruf",
                title: "Automatische Terminbuchung",
                text: "Mandanten buchen Beratungstermine rund um die Uhr direkt im Kanzleikalender — auch abends und am Wochenende. Inklusive Bestätigungs-SMS.",
              },
              {
                icon: "schedule",
                badge: "Zeitersparnis",
                title: "Fristenauskunft & Erinnerungen",
                text: "Automatische Auskunft über Abgabefristen und proaktive Erinnerungsanrufe. Kein Mandant verpasst mehr eine Frist.",
              },
              {
                icon: "upload_file",
                badge: "Saisonale Spitze",
                title: "Belegeinreichung koordinieren",
                text: "Der Bot informiert Mandanten über fehlende Unterlagen und sendet sichere Upload-Links per SMS — besonders wertvoll während der Jahresabschluss-Hochphase.",
              },
            ].map((uc) => (
              <div
                key={uc.title}
                className="bg-surface-container-lowest p-8 rounded-3xl transition-transform hover:-translate-y-1 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">{uc.icon}</span>
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {uc.badge}
                  </span>
                </div>
                <h3 className="font-headline text-xl text-on-surface font-bold mb-3">{uc.title}</h3>
                <p className="text-on-secondary-container leading-relaxed text-sm">{uc.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/anwendungsfaelle"
              className="inline-flex items-center gap-2 text-primary font-headline font-semibold hover:underline"
            >
              Alle 8 Anwendungsfälle ansehen
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Full-Service ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-4">
              Full-Service statt Selbstbau
            </h2>
            <p className="text-on-secondary-container">
              Wir übernehmen die komplette Einrichtung, Konfiguration und
              Betreuung — Sie lehnen sich zurück.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl transition-transform hover:-translate-y-1 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  schedule
                </span>
              </div>
              <h3 className="font-headline text-2xl text-on-surface mb-3">
                Rund um die Uhr erreichbar
              </h3>
              <p className="text-on-secondary-container leading-relaxed">
                Ihr KI-Bot nimmt Anrufe 24/7 an — auch nach Feierabend, am
                Wochenende und in der Urlaubszeit. Kein Mandant geht mehr
                verloren.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl transition-transform hover:-translate-y-1 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  shield
                </span>
              </div>
              <h3 className="font-headline text-2xl text-on-surface mb-3">
                🇩🇪 Hosting in Deutschland
              </h3>
              <p className="text-on-secondary-container leading-relaxed">
                Deutsche Server, volle DSGVO-Konformität und Schutz des
                Steuergeheimnisses nach §203 StGB. Ihre Mandantendaten bleiben
                sicher.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl transition-transform hover:-translate-y-1 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  handshake
                </span>
              </div>
              <h3 className="font-headline text-2xl text-on-surface mb-3">
                Full-Service von A bis Z
              </h3>
              <p className="text-on-secondary-container leading-relaxed">
                Wir bauen, konfigurieren und betreuen Ihren KI-Telefonbot
                komplett. Sie müssen nichts selbst einrichten — das ist unser
                Job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quiz Teaser ── */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto cta-gradient rounded-3xl p-10 sm:p-14 text-center text-white">
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

      {/* ── Benefits ── */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image left */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/office-lobby.jpg"
                  alt="Moderne Kanzlei-Lobby"
                  width={800}
                  height={450}
                  className="rounded-3xl shadow-lg w-full object-cover aspect-[16/9] ring-1 ring-slate-100"
                />
              </div>
            </div>

            {/* Checklist right */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="text-primary font-medium tracking-widest uppercase text-xs mb-4 block">
                Der Vorsprung
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6 leading-tight">
                Warum Kanzleien uns vertrauen
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-semibold text-on-surface">
                      Keine Konfiguration nötig
                    </h4>
                    <p className="text-on-secondary-container">
                      Wir richten alles ein — von der Telefonanlage bis zur
                      Kanzleisoftware-Integration. Sie müssen keinen Finger
                      rühren.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-semibold text-on-surface">
                      Branchenexperten statt generische KI
                    </h4>
                    <p className="text-on-secondary-container">
                      Unser Bot ist spezialisiert auf Steuerberater — er kennt
                      die Fachbegriffe, Fristen und typischen Mandantenanliegen.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-semibold text-on-surface">
                      Persönlicher Ansprechpartner
                    </h4>
                    <p className="text-on-secondary-container">
                      Kein Ticket-System, kein Warteschleifen-Support. Ein
                      Mensch, der sich um Ihre Kanzlei kümmert.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 mb-24 mt-24">
        <div className="bg-[#001b3e] text-surface-container-lowest rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl mb-8">
              Bereit für die Kanzlei der Zukunft?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Starten Sie noch heute und erleben Sie, wie KI Ihren
              Arbeitsalltag spürbar entlastet. Unser Team berät Sie
              individuell.
            </p>
            <Link
              href="/kontakt"
              className="cta-gradient px-10 py-5 rounded-full text-white text-xl font-medium shadow-2xl shadow-black/20 hover:opacity-95 transition-all transform hover:scale-105 active:scale-95 inline-block"
            >
              Jetzt Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
