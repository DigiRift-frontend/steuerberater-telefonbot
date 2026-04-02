"use client";

import { useState } from "react";
import Link from "next/link";

const chapters = [
  "Einführung: KI-Telefonie in der Steuerkanzlei",
  "Rechtsgrundlagen: DSGVO, §203 StGB und AO",
  "Auftragsverarbeitung: Was der AVV regeln muss",
  "Technische Anforderungen: Server, Verschlüsselung, Löschfristen",
  "Mandantengeheimnis: Besonderheiten für Steuerberater",
  "Einwilligungspflichten: Wann müssen Mandanten zustimmen?",
  "Praxisleitfaden: Schritt-für-Schritt zur DSGVO-konformen KI-Telefonie",
  "Checkliste: 20 Punkte vor dem Go-Live",
];

export default function Ratgeber() {
  const [email, setEmail] = useState("");
  const [kanzlei, setKanzlei] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;

    setLoading(true);
    try {
      const res = await fetch("/api/ebook-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, praxisName: kanzlei }),
      });

      const data = await res.json();
      if (data.alreadyConfirmed && data.downloadUrl) {
        setRedirectUrl(data.downloadUrl);
      }
      setSubmitted(true);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Kostenloser Leitfaden
            </p>
            <h1 className="font-headline text-3xl sm:text-4xl font-bold leading-tight">
              DSGVO-Leitfaden für{" "}
              <em className="text-gradient-brand">KI-Telefonie</em> in der
              Steuerkanzlei
            </h1>
            <p className="mt-6 text-on-surface-variant">
              Alles, was Sie über den datenschutzkonformen Einsatz von
              KI-Telefonbots in Ihrer Kanzlei wissen müssen — von §203 StGB
              über den AVV bis zur praktischen Umsetzung.
            </p>

            <div className="mt-8">
              <h2 className="font-headline text-lg font-semibold mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2">
                {chapters.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-sm text-on-surface-variant">{c}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
            {!submitted ? (
              <>
                <h2 className="font-headline text-xl font-semibold mb-2">
                  Jetzt kostenlos herunterladen
                </h2>
                <p className="text-sm text-on-surface-variant mb-6">
                  Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie den
                  Leitfaden als PDF.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse *"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Kanzleiname (optional)"
                    value={kanzlei}
                    onChange={(e) => setKanzlei(e.target.value)}
                    className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cta-gradient text-on-primary font-semibold py-3.5 rounded-full text-lg hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? "Wird gesendet..." : "Leitfaden anfordern"}
                  </button>
                  <p className="text-xs text-outline text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <Link href="/datenschutz" className="underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    zu.
                  </p>
                </form>
              </>
            ) : redirectUrl ? (
              <div className="text-center py-8">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">
                  check_circle
                </span>
                <h2 className="font-headline text-xl font-semibold mb-2">
                  Ihr Download ist bereit
                </h2>
                <a
                  href={redirectUrl}
                  className="inline-block mt-4 cta-gradient text-on-primary font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Jetzt herunterladen
                </a>
              </div>
            ) : (
              <div className="text-center py-8">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">
                  mark_email_read
                </span>
                <h2 className="font-headline text-xl font-semibold mb-2">
                  Prüfen Sie Ihr Postfach
                </h2>
                <p className="text-on-surface-variant">
                  Wir haben Ihnen eine E-Mail mit dem Download-Link gesendet.
                  Klicken Sie auf den Link in der E-Mail.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
