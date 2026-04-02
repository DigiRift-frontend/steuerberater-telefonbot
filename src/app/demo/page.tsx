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
    title: "Frist-Erinnerung",
    subtitle: "Ausgehender Anruf",
    description:
      "Der Bot ruft eine Mandantin an und erinnert sie an die ausstehende Einreichung der Unterlagen für die Einkommensteuererklärung. Er bietet einen Upload-Link per SMS an.",
    duration: "1:42",
    audioSrc: "/audio/demo-frist-erinnerung.mp3",
  },
  {
    title: "Mandanten-Aufnahme",
    subtitle: "Eingehender Anruf — Neukunde",
    description:
      "Ein potenzieller Mandant ruft an und möchte sich über die Kanzlei informieren. Der Bot erfasst seine Daten, stellt Vorqualifizierungs-Fragen und leitet den Lead weiter.",
    duration: "2:15",
    audioSrc: "/audio/demo-mandanten-aufnahme.mp3",
  },
  {
    title: "Status-Abfrage",
    subtitle: "Eingehender Anruf — Bestandsmandant",
    description:
      "Ein Mandant möchte wissen, wie der Stand seiner Steuererklärung ist. Der Bot identifiziert ihn und gibt eine aktuelle Auskunft zum Bearbeitungsstatus.",
    duration: "1:28",
    audioSrc: "/audio/demo-status-abfrage.mp3",
  },
  {
    title: "Terminvergabe",
    subtitle: "Eingehender Anruf",
    description:
      "Eine Mandantin möchte einen Besprechungstermin vereinbaren. Der Bot prüft die Verfügbarkeiten und bucht direkt im Kanzleikalender ein.",
    duration: "1:55",
    audioSrc: "/audio/demo-terminvergabe.mp3",
  },
  {
    title: "Allgemeine Auskunft",
    subtitle: "Eingehender Anruf — außerhalb der Sprechzeiten",
    description:
      "Jemand ruft abends an und fragt nach den Öffnungszeiten und ob die Kanzlei auch Lohnbuchhaltung anbietet. Der Bot beantwortet die Fragen und nimmt einen Rückrufwunsch auf.",
    duration: "1:18",
    audioSrc: "/audio/demo-oeffnungszeiten.mp3",
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
