import type { Metadata } from "next";
import Link from "next/link";
import { AudioPlayer } from "@/components/AudioPlayer";

export const metadata: Metadata = {
  title: "Demo — KI-Telefonbot für Steuerkanzleien anhören",
  description:
    "Hören Sie sich an, wie der KI-Telefonbot typische Kanzlei-Szenarien meistert: Frist-Erinnerungen, Mandanten-Aufnahme, Status-Abfragen und mehr.",
};

const demos = [
  {
    title: "Terminvergabe",
    subtitle: "Eingehender Anruf — Häufigster Anruf",
    description:
      "Herr Lehmann braucht einen Termin für seine Einkommensteuererklärung. Der Bot prüft den Kalender von Herrn Weber, schlägt drei Optionen vor, bucht den Termin und sendet eine Bestätigungs-SMS.",
    duration: "1:17",
    audioSrc: "/audio/demo-terminvergabe.mp3",
  },
  {
    title: "Belegeinreichung koordinieren",
    subtitle: "Eingehender Anruf — Saisonale Spitze",
    description:
      "Ein Mandant fragt, welche Unterlagen für den Jahresabschluss noch fehlen. Der Bot gleicht mit der Checkliste ab, nennt die offenen Positionen und sendet einen sicheren Upload-Link per SMS oder E-Mail.",
    duration: "1:19",
    audioSrc: "/audio/demo-belegeinreichung.mp3",
  },
  {
    title: "Steuerbescheid-Status",
    subtitle: "Eingehender Anruf — Bestandsmandant",
    description:
      "Herr Bauer fragt nach dem Stand seiner Steuererklärung. Der Bot schaut in die Akte, informiert ihn dass der Bescheid gestern eingegangen ist und bei Sachbearbeiter Herrn Fischer zur Prüfung liegt.",
    duration: "1:08",
    audioSrc: "/audio/demo-status-abfrage.mp3",
  },
  {
    title: "Neu-Mandanten Aufnahme",
    subtitle: "Eingehender Anruf — Lead-Generierung",
    description:
      "Herr Yilmaz hat eine UG gegründet und sucht einen Steuerberater. Der Bot erfasst Branche (Gastronomie), Mitarbeiterzahl und Bedarf, leitet den Lead an die Spezialistin für Existenzgründer weiter und sendet eine Willkommens-E-Mail.",
    duration: "1:29",
    audioSrc: "/audio/demo-mandanten-aufnahme.mp3",
  },
  {
    title: "Frist-Erinnerung",
    subtitle: "Ausgehender Anruf — Proaktiv",
    description:
      "Der Bot ruft Frau Meier an und erinnert sie an zwei fehlende Unterlagen für die Einkommensteuererklärung. Er nennt die Frist und sendet einen sicheren Upload-Link per SMS und E-Mail.",
    duration: "1:17",
    audioSrc: "/audio/demo-frist-erinnerung.mp3",
  },
];

export default function Demo() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Live-Demo
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold leading-tight">
            Hören Sie den Bot{" "}
            <em className="text-gradient-brand">in Aktion</em>
          </h1>
          <p className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto">
            Fünf typische Szenarien aus dem Kanzleialltag — so klingt der
            KI-Telefonbot im echten Gespräch mit Mandanten.
          </p>
        </div>
      </section>

      {/* Demo cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          {demos.map((d, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {d.subtitle}
                </span>
              </div>
              <h2 className="font-headline text-2xl font-bold">{d.title}</h2>
              <p className="mt-2 text-on-surface-variant mb-6">
                {d.description}
              </p>
              <AudioPlayer src={d.audioSrc} duration={d.duration} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl cta-gradient rounded-3xl p-10 sm:p-14 text-center text-on-primary">
          <h2 className="font-headline text-3xl font-bold">
            Überzeugt? Lassen Sie uns sprechen.
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Im Erstgespräch konfigurieren wir einen Demo-Bot speziell für
            Ihre Kanzlei — kostenlos und unverbindlich.
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
