"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { sendLead } from "@/lib/send-lead";

export default function Download() {
  return (
    <Suspense
      fallback={
        <section className="pt-28 pb-20 px-4 text-center">
          <p className="text-on-surface-variant text-lg">Wird geladen...</p>
        </section>
      }
    >
      <DownloadContent />
    </Suspense>
  );
}

function DownloadContent() {
  const params = useSearchParams();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = params.get("t");
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }

    fetch("/api/leitfaden-verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          setVerified(true);
          sendLead({
            type: "ebook",
            email: data.email,
            praxisName: data.praxisName,
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

  if (error) {
    return (
      <section className="pt-28 pb-20 px-4 text-center">
        <span className="material-symbols-outlined text-6xl text-error mb-4">
          error
        </span>
        <h1 className="font-headline text-3xl font-bold mb-4">
          Link ungültig oder abgelaufen
        </h1>
        <p className="text-on-surface-variant mb-8">
          Bitte fordern Sie den Leitfaden erneut an.
        </p>
        <Link
          href="/leitfaden"
          className="cta-gradient text-on-primary font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Leitfaden erneut anfordern
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="material-symbols-outlined text-7xl text-primary mb-6">
          download
        </span>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold mb-4">
          Ihr Leitfaden ist bereit
        </h1>
        <p className="text-on-surface-variant mb-8">
          Klicken Sie auf den Button, um den DSGVO-Leitfaden für KI-Telefonie
          in der Steuerkanzlei als PDF herunterzuladen.
        </p>

        {verified && (
          <a
            href="/downloads/dsgvo-leitfaden-ki-telefonie-steuerkanzlei.pdf"
            download
            className="inline-block cta-gradient text-on-primary font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center gap-2 justify-center">
              <span className="material-symbols-outlined">download</span>
              PDF herunterladen
            </span>
          </a>
        )}

        <div className="mt-12 bg-surface-container-lowest rounded-3xl p-8 shadow-sm text-left">
          <h2 className="font-headline text-xl font-semibold mb-4">
            Nächster Schritt
          </h2>
          <p className="text-on-surface-variant mb-6">
            Sie haben Fragen zum Leitfaden oder möchten wissen, wie ein
            KI-Telefonbot konkret in Ihrer Kanzlei aussehen kann? Vereinbaren
            Sie ein kostenloses Erstgespräch mit unserem Team.
          </p>
          <Link
            href="/beratung"
            className="cta-gradient text-on-primary font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}
