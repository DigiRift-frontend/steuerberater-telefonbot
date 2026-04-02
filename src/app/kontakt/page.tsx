"use client";

import { useState } from "react";
import { sendLead } from "@/lib/send-lead";

export default function Kontakt() {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    kanzlei: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.includes("@")) return;

    setLoading(true);
    try {
      await sendLead({
        type: "contact",
        email: form.email,
        name: `${form.vorname} ${form.nachname}`.trim(),
        praxisName: form.kanzlei,
        message: form.nachricht,
      });
      setSubmitted(true);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl grid md:grid-cols-5 gap-12">
        {/* Form */}
        <div className="md:col-span-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Kontakt
          </p>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold mb-2">
            Kostenloses Erstgespräch vereinbaren
          </h1>
          <p className="text-on-surface-variant mb-8">
            Erzählen Sie uns von Ihrer Kanzlei — wir melden uns innerhalb von
            24 Stunden bei Ihnen.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.vorname}
                    onChange={(e) => update("vorname", e.target.value)}
                    className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nachname}
                    onChange={(e) => update("nachname", e.target.value)}
                    className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Kanzleiname
                </label>
                <input
                  type="text"
                  value={form.kanzlei}
                  onChange={(e) => update("kanzlei", e.target.value)}
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ihre Nachricht
                </label>
                <textarea
                  rows={5}
                  value={form.nachricht}
                  onChange={(e) => update("nachricht", e.target.value)}
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="cta-gradient text-on-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </form>
          ) : (
            <div className="bg-surface-container-lowest rounded-3xl p-10 text-center">
              <span className="material-symbols-outlined text-6xl text-primary mb-4">
                check_circle
              </span>
              <h2 className="font-headline text-2xl font-bold mb-2">
                Vielen Dank für Ihre Nachricht
              </h2>
              <p className="text-on-surface-variant">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen. Bis dahin
                können Sie sich gerne unsere Anwendungsfälle ansehen.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2">
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm sticky top-24">
            <h2 className="font-headline text-xl font-semibold mb-6">
              Direkter Kontakt
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  mail
                </span>
                <div>
                  <p className="text-sm text-on-surface-variant">E-Mail</p>
                  <a
                    href="mailto:info@digirift.com"
                    className="font-medium text-primary hover:underline"
                  >
                    info@digirift.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  phone
                </span>
                <div>
                  <p className="text-sm text-on-surface-variant">Telefon</p>
                  <a
                    href="tel:+494074303583"
                    className="font-medium text-primary hover:underline"
                  >
                    +49 40 74303583
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="text-sm text-on-surface-variant">Standort</p>
                  <p className="font-medium">Hamburg, Deutschland</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/30">
              <p className="text-sm text-on-surface-variant">
                <strong>steuerberater-telefonbot.de</strong> ist ein Service der
                DigiRift GmbH — Ihr Partner für KI-Lösungen in der
                Steuerberatung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
