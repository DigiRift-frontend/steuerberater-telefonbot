"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-on-primary-fixed text-primary-fixed p-4 shadow-2xl">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm flex-1">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
          Website zu bieten. Weitere Informationen finden Sie in unserer{" "}
          <a href="/datenschutz" className="underline text-primary-fixed-dim">
            Datenschutzerklärung
          </a>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 rounded-full border border-primary-fixed-dim/40 text-primary-fixed-dim hover:bg-white/10 transition-colors cursor-pointer"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 rounded-full bg-primary-fixed-dim text-on-primary-fixed font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
