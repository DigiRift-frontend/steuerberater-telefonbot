"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { sendLead } from "@/lib/send-lead";

interface QuizResult {
  email: string;
  praxisName?: string;
  quizAnswers: Record<string, number>;
  quizScore: number;
}

export default function Ergebnis() {
  return (
    <Suspense
      fallback={
        <section className="pt-28 pb-20 px-4 text-center">
          <p className="text-on-surface-variant text-lg">Wird geladen...</p>
        </section>
      }
    >
      <ErgebnisContent />
    </Suspense>
  );
}

function ErgebnisContent() {
  const params = useSearchParams();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = params.get("t");
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }

    fetch("/api/quiz-verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          setResult(data);
          // Send lead to CRM
          sendLead({
            type: "quiz",
            email: data.email,
            praxisName: data.praxisName,
            quizAnswers: data.quizAnswers,
            quizScore: data.quizScore,
          });
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) {
    return (
      <section className="pt-28 pb-20 px-4 text-center">
        <p className="text-on-surface-variant text-lg">Wird geladen...</p>
      </section>
    );
  }

  if (error || !result) {
    return (
      <section className="pt-28 pb-20 px-4 text-center">
        <span className="material-symbols-outlined text-6xl text-error mb-4">
          error
        </span>
        <h1 className="font-headline text-3xl font-bold mb-4">
          Link ungültig oder abgelaufen
        </h1>
        <p className="text-on-surface-variant mb-8">
          Bitte starten Sie den Kosten-Rechner erneut.
        </p>
        <Link
          href="/check"
          className="cta-gradient text-on-primary font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Kosten-Rechner starten
        </Link>
      </section>
    );
  }

  const { quizAnswers, quizScore } = result;
  const yearlyLoss = quizScore * 12;

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Ihre persönliche Auswertung
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold">
            <span className="text-gradient-brand">
              {quizScore.toLocaleString("de-DE")} € / Monat
            </span>
          </h1>
          <p className="mt-2 text-lg text-on-surface-variant">
            geschätzter Umsatzverlust durch verpasste Mandantenanrufe
          </p>
        </div>

        {/* Breakdown */}
        <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm mb-8">
          <h2 className="font-headline text-xl font-semibold mb-6">
            Ihre Angaben im Detail
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">Anrufe pro Tag</span>
              <span className="font-semibold">{quizAnswers.calls}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">
                Nicht angenommen (%)
              </span>
              <span className="font-semibold">{quizAnswers.missed} %</span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">
                Ø Mandantenwert / Jahr
              </span>
              <span className="font-semibold">
                {quizAnswers.mandantenWert?.toLocaleString("de-DE")} €
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">
                Anrufe außerhalb Sprechzeiten / Tag
              </span>
              <span className="font-semibold">{quizAnswers.afterHours}</span>
            </div>
            <div className="flex justify-between py-3 bg-primary/5 rounded-xl px-4">
              <span className="font-semibold">Geschätzter Jahresverlust</span>
              <span className="font-headline text-xl font-bold text-primary">
                {yearlyLoss.toLocaleString("de-DE")} €
              </span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm mb-12">
          <h2 className="font-headline text-xl font-semibold mb-6">
            Unsere Empfehlung
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">
                lightbulb
              </span>
              <p className="text-on-surface-variant">
                Mit einem KI-Telefonbot könnten Sie bis zu{" "}
                <strong>
                  {Math.round(quizScore * 0.7).toLocaleString("de-DE")} €
                </strong>{" "}
                pro Monat an entgangenem Umsatz zurückgewinnen.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">
                schedule
              </span>
              <p className="text-on-surface-variant">
                Der Bot ist innerhalb von 2 Wochen einsatzbereit — wir
                übernehmen die komplette Einrichtung.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">
                verified_user
              </span>
              <p className="text-on-surface-variant">
                Alle Gespräche sind DSGVO-konform und mit dem Steuergeheimnis
                nach §203 StGB vereinbar.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-gradient rounded-3xl p-10 text-center text-on-primary">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold">
            Lassen Sie uns diese Zahlen ändern
          </h2>
          <p className="mt-4 opacity-90">
            Im kostenlosen Erstgespräch zeigen wir Ihnen, wie der Bot konkret
            in Ihrer Kanzlei eingesetzt werden kann.
          </p>
          <Link
            href="/kontakt"
            className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-white/90 transition-colors"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}
