import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anwendungsfälle — KI-Telefonbot für Steuerkanzleien",
  description:
    "Frist-Erinnerungen, Mandanten-Aufnahme, Status-Abfragen, Terminvergabe und mehr — so unterstützt der KI-Telefonbot Ihre Steuerkanzlei.",
};

const useCases = [
  {
    icon: "notifications_active",
    badge: "Automatisierung",
    title: "Frist-Erinnerungen & Unterlagen-Einsammlung",
    scenario:
      "Steuererklärungsfristen rücken näher, aber viele Mandanten haben ihre Unterlagen noch nicht eingereicht. Ihr Team müsste jeden einzeln abtelefonieren.",
    details: [
      "Bot ruft Mandanten automatisch an und erinnert an offene Fristen",
      "Fragt ab, welche Unterlagen noch fehlen",
      "Bietet direkt einen Upload-Link per SMS an",
      "Eskaliert an Sachbearbeiter, wenn Frist kritisch wird",
      "Dokumentiert den Kontaktversuch automatisch",
    ],
  },
  {
    icon: "person_add",
    badge: "Neugeschäft",
    title: "Mandanten-Aufnahme & Vorqualifizierung",
    scenario:
      "Ein potenzieller Mandant ruft an, aber alle Mitarbeiter sind in Besprechungen. Ohne den Bot: verpasster Anruf, verlorener Mandant.",
    details: [
      "Bot begrüßt Anrufer professionell mit Kanzleinamen",
      "Erfasst Name, Kontaktdaten und Anliegen",
      "Stellt Vorqualifizierungs-Fragen (Privat/Gewerbe, Umsatzgröße)",
      "Leitet qualifizierte Leads direkt an den zuständigen Steuerberater",
      "Versendet automatisch eine Willkommens-E-Mail mit nächsten Schritten",
    ],
  },
  {
    icon: "query_stats",
    badge: "Service",
    title: "Status-Abfragen zu laufenden Vorgängen",
    scenario:
      "Mandanten rufen regelmäßig an, um den Status ihrer Steuererklärung, ihres Jahresabschlusses oder eines Einspruchs zu erfragen. Das kostet Ihr Team wertvolle Zeit.",
    details: [
      "Bot identifiziert den Mandanten anhand seiner Telefonnummer",
      "Gibt Auskunft über den aktuellen Bearbeitungsstatus",
      "Informiert über voraussichtliche Fertigstellungstermine",
      "Leitet komplexe Rückfragen an den Sachbearbeiter weiter",
      "Protokolliert die Anfrage für die Kanzlei-Dokumentation",
    ],
  },
  {
    icon: "calendar_month",
    badge: "Effizienz",
    title: "Terminvergabe & Vorbereitung",
    scenario:
      "Ein Mandant möchte einen Besprechungstermin. Statt E-Mail-Pingpong oder Rückruf übernimmt der Bot die komplette Terminkoordination.",
    details: [
      "Bot prüft Verfügbarkeiten im Kanzleikalender in Echtzeit",
      "Schlägt passende Termine vor und bucht direkt ein",
      "Versendet Terminbestätigung und Erinnerung per SMS/E-Mail",
      "Fragt vorab benötigte Unterlagen ab",
      "Integriert sich nahtlos mit DATEV und gängigen Kalendersystemen",
    ],
  },
  {
    icon: "info",
    badge: "Entlastung",
    title: "Öffnungszeiten, Fristen & allgemeine Infos",
    scenario:
      "Viele Anrufe betreffen einfache Fragen: Wann hat die Kanzlei geöffnet? Bis wann muss die Steuererklärung abgegeben werden? Diese Routine-Anfragen binden Kapazitäten.",
    details: [
      "Bot beantwortet Fragen zu Öffnungszeiten und Erreichbarkeit",
      "Informiert über aktuelle Steuerfristen und Änderungen",
      "Gibt allgemeine Auskünfte zu Leistungen der Kanzlei",
      "Verweist bei Bedarf auf die Kanzlei-Website oder das Mandantenportal",
      "Außerhalb der Sprechzeiten: nimmt Rückrufwünsche entgegen",
    ],
  },
];

export default function Anwendungsfaelle() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Anwendungsfälle
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold leading-tight">
            So unterstützt der Bot{" "}
            <em className="text-gradient-brand">Ihre Kanzlei</em>
          </h1>
          <p className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto">
            Von der Frist-Erinnerung bis zur Mandanten-Aufnahme — unser
            KI-Telefonbot deckt die häufigsten Szenarien im Kanzleialltag ab.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-3xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">
                  {uc.icon}
                </span>
                <div>
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {uc.badge}
                  </span>
                  <h2 className="font-headline text-2xl font-bold mt-1">
                    {uc.title}
                  </h2>
                </div>
              </div>
              <p className="text-on-surface-variant italic mb-6">
                Szenario: {uc.scenario}
              </p>
              <ul className="space-y-3">
                {uc.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                      check_circle
                    </span>
                    <span className="text-on-surface-variant">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl cta-gradient rounded-3xl p-10 sm:p-14 text-center text-on-primary">
          <h2 className="font-headline text-3xl font-bold">
            Welcher Anwendungsfall passt zu Ihrer Kanzlei?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Im kostenlosen Erstgespräch analysieren wir gemeinsam, welche
            Szenarien den größten Effekt für Ihre Kanzlei haben.
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
