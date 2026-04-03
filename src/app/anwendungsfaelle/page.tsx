import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anwendungsfälle — KI-Telefonbot für Steuerkanzleien",
  description:
    "Frist-Erinnerungen, Mandanten-Aufnahme, Status-Abfragen, Terminvergabe und mehr — so unterstützt der KI-Telefonbot Ihre Steuerkanzlei.",
};

const useCases = [
  {
    icon: "calendar_month",
    badge: "Häufigster Anruf",
    title: "Automatische Terminbuchung",
    scenario:
      "Frau Müller ruft abends um 19:30 an, um einen Termin für ihre Einkommensteuererklärung zu vereinbaren. Der Bot prüft die Verfügbarkeit von Steuerberater Herrn Weber, schlägt drei Optionen vor und bucht den Termin — inklusive Bestätigungs-SMS.",
    details: [
      "Mandanten buchen Beratungstermine rund um die Uhr direkt im Kanzleikalender",
      "Bot prüft Verfügbarkeiten in Echtzeit und schlägt passende Optionen vor",
      "Versendet Terminbestätigung und Erinnerung per SMS/E-Mail",
      "Fragt vorab benötigte Unterlagen ab — Mandant kommt vorbereitet",
      "Integriert sich nahtlos mit DATEV und gängigen Kalendersystemen",
    ],
  },
  {
    icon: "schedule",
    badge: "Zeitersparnis",
    title: "Fristenauskunft & Erinnerungen",
    scenario:
      "Herr Schmidt, Einzelunternehmer, ruft an und fragt, bis wann seine Steuererklärung 2025 abgegeben werden muss. Der Bot informiert ihn: 31. Juli 2026 bei Selbstabgabe, 28. Februar 2027 bei Steuerberater-Vertretung — und bietet an, eine Erinnerung 4 Wochen vorher zu senden.",
    details: [
      "Automatische Auskunft über alle relevanten Abgabefristen (ESt, USt-VA, Jahresabschluss)",
      "Proaktive Erinnerungsanrufe vor nahenden Fristen",
      "Individuelle Fristen je nach Mandantentyp (Selbstabgabe vs. Steuerberater)",
      "Eskaliert an Sachbearbeiter, wenn Frist kritisch wird",
      "Dokumentiert jeden Kontaktversuch automatisch",
    ],
  },
  {
    icon: "upload_file",
    badge: "Saisonale Spitze",
    title: "Belegeinreichung koordinieren",
    scenario:
      "Die GmbH-Geschäftsführerin Frau Klein ruft an, weil sie wissen will, welche Belege für den Jahresabschluss noch fehlen. Der Bot gleicht mit der Checkliste ab, nennt die drei fehlenden Positionen (BWA Dezember, Bankbelege Q4, Inventarliste) und sendet ihr einen sicheren Upload-Link.",
    details: [
      "Bot informiert Mandanten über fehlende Unterlagen aus der Checkliste",
      "Sendet sichere Upload-Links per SMS oder E-Mail",
      "Automatische Erinnerung bei ausstehenden Belegen",
      "Reduziert Rückfragen an Sachbearbeiter um bis zu 70%",
      "Besonders wertvoll während der Jahresabschluss-Hochphase (Januar–März)",
    ],
  },
  {
    icon: "fact_check",
    badge: "Entlastet das Team",
    title: "Steuerbescheid-Status abfragen",
    scenario:
      "Herr Bauer ruft zum dritten Mal diese Woche an, um zu fragen, ob sein Einkommensteuerbescheid 2024 schon da ist. Der Bot prüft den Status und teilt mit, dass der Bescheid am Vortag eingegangen ist und zur Prüfung beim Sachbearbeiter liegt — ohne dass ein Mitarbeiter unterbrochen wird.",
    details: [
      "Bot identifiziert den Mandanten anhand seiner Telefonnummer",
      "Gibt Auskunft über den aktuellen Bearbeitungsstatus",
      "Informiert über voraussichtliche Fertigstellungstermine",
      "Leitet komplexe Rückfragen an den zuständigen Sachbearbeiter weiter",
      "Protokolliert die Anfrage für die Kanzlei-Dokumentation",
    ],
  },
  {
    icon: "person_add",
    badge: "Lead-Generierung",
    title: "Neu-Mandanten Vorqualifizierung",
    scenario:
      "Herr Yilmaz möchte seine neu gegründete UG steuerlich betreuen lassen. Der Bot fragt nach Gründungsdatum, Branche (Gastronomie), Mitarbeiterzahl und aktuellem Umsatz — und leitet den qualifizierten Lead mit allen Daten an die Kanzlei weiter.",
    details: [
      "Strukturierte Erfassung: Unternehmensform, Branche, Beratungsbedarf",
      "Vorqualifizierung nach Kanzlei-Kriterien (Umsatzgröße, Komplexität)",
      "Automatische Willkommens-E-Mail mit nächsten Schritten",
      "Kein potenzieller Mandant geht mehr verloren — auch außerhalb der Bürozeiten",
      "Qualifizierte Leads werden direkt an den passenden Steuerberater weitergeleitet",
    ],
  },
  {
    icon: "payments",
    badge: "Hohes Volumen",
    title: "Lohnbuchhaltung-Anfragen",
    scenario:
      "Die Büro-Managerin Frau Richter vom Mandanten Autohaus Engel ruft an, weil ein Mitarbeiter eine Verdienstbescheinigung für die Bank braucht. Der Bot nimmt die Anfrage auf, identifiziert den zuständigen Lohnbuchhalter und erstellt ein Ticket mit Priorität.",
    details: [
      "Anfragen zu Gehaltsabrechnungen, Krankmeldungen oder Bescheinigungen",
      "Bot erkennt den Mandanten und ordnet den zuständigen Sachbearbeiter zu",
      "Erstellt automatisch priorisierte Tickets im Kanzlei-System",
      "Reduziert Unterbrechungen für das Lohnbuchhaltungs-Team erheblich",
      "Besonders relevant für Kanzleien mit vielen Lohn-Mandanten",
    ],
  },
  {
    icon: "call_split",
    badge: "Mandantenzufriedenheit",
    title: "Intelligente Weiterleitung an Fachbereiche",
    scenario:
      "Frau Dr. Berger, langjährige Mandantin, ruft an. Der Bot erkennt sie anhand der Rufnummer, begrüßt sie namentlich und fragt nach ihrem Anliegen. Da es um eine Erbschaftsteuer-Frage geht, verbindet der Bot direkt zu Frau Koch, der Spezialistin — ohne Warteschleife am Empfang.",
    details: [
      "Anrufer-Erkennung anhand der Telefonnummer — persönliche Begrüßung",
      "Themenbasierte Weiterleitung an den richtigen Fachbereich",
      "Keine Warteschleife am Empfang — direkter Durchstieg",
      "Rückruf-Vereinbarung wenn der Ansprechpartner nicht verfügbar ist",
      "VIP-Mandanten können priorisiert behandelt werden",
    ],
  },
  {
    icon: "nights_stay",
    badge: "Saisonale Spitze",
    title: "24/7 Erreichbarkeit & Saisonspitzen",
    scenario:
      "Während der Jahresabschluss-Hochphase im März klingelt das Telefon 40-mal am Tag. Der Bot fängt 70% der Anrufe ab — Terminbuchungen, Fristenauskunft, Belegstatus — und das dreiköpfige Kanzleiteam kann sich auf die Bilanzierung konzentrieren.",
    details: [
      "Rund-um-die-Uhr-Erreichbarkeit — auch abends, am Wochenende und an Feiertagen",
      "Entlastet das Team in Spitzenzeiten (Januar–Juli) erheblich",
      "Fängt Routine-Anrufe ab, damit Fachkräfte ungestört arbeiten können",
      "Nimmt Rückrufwünsche entgegen und priorisiert nach Dringlichkeit",
      "Kein Mandant hört mehr ein Besetztzeichen oder landet auf dem Anrufbeantworter",
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
