import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — KI-Telefonie für Steuerkanzleien",
  description:
    "Fachartikel rund um KI-Telefonie, DSGVO und Digitalisierung in der Steuerberatung.",
};

export default function Blog() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="material-symbols-outlined text-7xl text-primary/30 mb-6">
          article
        </span>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold mb-4">
          Blog-Artikel sind in Vorbereitung
        </h1>
        <p className="text-on-surface-variant text-lg mb-8">
          Hier erscheinen bald Fachartikel rund um KI-Telefonie, DSGVO und
          Digitalisierung in der Steuerberatung. Schauen Sie in Kürze wieder
          vorbei.
        </p>
        <Link
          href="/"
          className="cta-gradient text-on-primary font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
}
