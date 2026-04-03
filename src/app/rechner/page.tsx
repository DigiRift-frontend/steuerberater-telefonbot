"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: number }[];
}

const questions: Question[] = [
  {
    id: "calls",
    question: "Wie viele Anrufe erhält Ihre Kanzlei pro Tag?",
    options: [
      { label: "Bis zu 8 Anrufe", value: 8 },
      { label: "9–17 Anrufe", value: 17 },
      { label: "18–37 Anrufe", value: 37 },
      { label: "Über 37 Anrufe", value: 60 },
    ],
  },
  {
    id: "missed",
    question: "Wie viel Prozent der Anrufe werden nicht angenommen?",
    options: [
      { label: "Unter 10 %", value: 5 },
      { label: "10–25 %", value: 17 },
      { label: "25–40 %", value: 32 },
      { label: "Über 40 %", value: 50 },
    ],
  },
  {
    id: "mandantenWert",
    question: "Wie hoch ist der durchschnittliche Jahresumsatz pro Mandant?",
    options: [
      { label: "Ca. 500 €", value: 500 },
      { label: "Ca. 1.500 €", value: 1500 },
      { label: "Ca. 3.000 €", value: 3000 },
      { label: "Über 5.000 €", value: 5000 },
    ],
  },
  {
    id: "afterHours",
    question:
      "Wie viele Anrufe gehen außerhalb Ihrer Sprechzeiten ein (pro Tag)?",
    options: [
      { label: "Keine / kaum", value: 0 },
      { label: "Ca. 1 Anruf", value: 1 },
      { label: "Ca. 3 Anrufe", value: 3 },
      { label: "5 oder mehr", value: 5 },
    ],
  },
];

export default function Check() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [kanzlei, setKanzlei] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const isQuiz = step < questions.length;
  const isEmailGate = step === questions.length;
  const isDone = submitted;

  const handleAnswer = (value: number) => {
    const q = questions[step];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    setStep(step + 1);
  };

  const computeScore = () => {
    const calls = answers.calls || 0;
    const missedPct = (answers.missed || 0) / 100;
    const mandantenWert = answers.mandantenWert || 0;
    const afterHours = answers.afterHours || 0;

    const missedPerDay = calls * missedPct;
    const monthlyLoss = missedPerDay * 22 * 0.05 * mandantenWert;
    const afterHoursLoss = afterHours * 22 * 0.05 * mandantenWert;
    return Math.round(monthlyLoss + afterHoursLoss);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;

    setLoading(true);
    const score = computeScore();

    try {
      const res = await fetch("/api/rechner-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          praxisName: kanzlei,
          quizAnswers: answers,
          quizScore: score,
        }),
      });

      const data = await res.json();

      if (data.alreadyConfirmed && data.resultUrl) {
        setRedirectUrl(data.resultUrl);
      }

      setSubmitted(true);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  const progress = Math.round(
    (Math.min(step, questions.length) / questions.length) * 100
  );

  return (
    <>
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-on-surface-variant mb-2">
              <span>
                Frage {Math.min(step + 1, questions.length)} von{" "}
                {questions.length}
              </span>
              <span>{progress} %</span>
            </div>
            <div className="h-2 bg-surface-container-highest rounded-full">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Quiz questions */}
          {isQuiz && (
            <div>
              <h1 className="font-headline text-3xl sm:text-4xl font-bold mb-8">
                {questions[step].question}
              </h1>
              <div className="space-y-4">
                {questions[step].options.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => handleAnswer(o.value)}
                    className="w-full text-left bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:ring-2 hover:ring-primary transition-all cursor-pointer"
                  >
                    <span className="text-lg font-medium">{o.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Email gate */}
          {isEmailGate && !isDone && (
            <div>
              <h1 className="font-headline text-3xl sm:text-4xl font-bold mb-4">
                Ihr Ergebnis ist fertig
              </h1>
              <p className="text-on-surface-variant mb-8">
                Geben Sie Ihre E-Mail-Adresse ein, um Ihre persönliche Auswertung
                zu erhalten. Wir senden Ihnen einen Bestätigungslink.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ihr Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Kanzleiname (optional)"
                  value={kanzlei}
                  onChange={(e) => setKanzlei(e.target.value)}
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cta-gradient text-on-primary font-semibold py-3.5 rounded-full text-lg hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Wird gesendet..." : "Ergebnis anfordern"}
                </button>
                <p className="text-xs text-outline text-center">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <Link href="/datenschutz" className="underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </p>
              </form>
            </div>
          )}

          {/* Success */}
          {isDone && (
            <div className="text-center">
              {redirectUrl ? (
                <>
                  <span className="material-symbols-outlined text-6xl text-primary mb-4">
                    check_circle
                  </span>
                  <h1 className="font-headline text-3xl font-bold mb-4">
                    Ihre Auswertung ist bereit
                  </h1>
                  <p className="text-on-surface-variant mb-8">
                    Sie sind bereits bestätigt. Klicken Sie auf den Button, um
                    Ihre Ergebnisse zu sehen.
                  </p>
                  <a
                    href={redirectUrl}
                    className="inline-block cta-gradient text-on-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:opacity-90 transition-opacity"
                  >
                    Ergebnis ansehen
                  </a>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-6xl text-primary mb-4">
                    mark_email_read
                  </span>
                  <h1 className="font-headline text-3xl font-bold mb-4">
                    Prüfen Sie Ihr Postfach
                  </h1>
                  <p className="text-on-surface-variant">
                    Wir haben Ihnen eine E-Mail mit einem Bestätigungslink
                    gesendet. Klicken Sie auf den Link, um Ihre persönliche
                    Auswertung zu sehen.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
