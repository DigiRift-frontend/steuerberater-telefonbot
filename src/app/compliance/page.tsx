import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DSGVO & KI-Telefonie in der Steuerkanzlei",
  description:
    "Alles über DSGVO-konforme KI-Telefonie in Steuerkanzleien: §203 StGB, Steuergeheimnis, AVV, technische Maßnahmen und mehr.",
};

export default function DatenschutzKiTelefonie() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          Datenschutz & Compliance
        </p>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold mb-8">
          DSGVO &amp; KI-Telefonie in der{" "}
          <em className="text-primary">Steuerkanzlei</em>
        </h1>

        {/* Section 1 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            1. Warum Datenschutz bei KI-Telefonie besonders wichtig ist
          </h2>
          <p className="text-on-surface-variant mb-4">
            Steuerkanzleien verarbeiten hochsensible Daten: Einkommensverhältnisse,
            Vermögenswerte, Geschäftsgeheimnisse. Wenn ein KI-Telefonbot diese
            Daten verarbeitet, müssen besonders strenge Maßstäbe gelten. Anders
            als bei einem normalen Unternehmen greift hier nicht nur die DSGVO,
            sondern auch das Steuergeheimnis nach §203 StGB und die
            Abgabenordnung.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            2. Das Steuergeheimnis nach §203 StGB
          </h2>
          <p className="text-on-surface-variant mb-4">
            Steuerberater unterliegen der strafrechtlich geschützten
            Verschwiegenheitspflicht. Die Weitergabe von Mandantengeheimnissen
            an unbefugte Dritte ist strafbar. Das bedeutet: Ein KI-System,
            das Mandantengespräche verarbeitet, muss technisch und
            organisatorisch so eingerichtet sein, dass kein unbefugter
            Zugriff auf die Gesprächsinhalte möglich ist.
          </p>
          <p className="text-on-surface-variant">
            Unser Bot ist so konzipiert, dass Gesprächsdaten ausschließlich
            auf deutschen Servern verarbeitet werden und kein Zugriff durch
            Dritte — auch nicht durch unsere Entwickler — auf die
            Gesprächsinhalte im laufenden Betrieb möglich ist.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            3. DSGVO-Anforderungen an KI-Telefonsysteme
          </h2>
          <p className="text-on-surface-variant mb-4">
            Die DSGVO stellt klare Anforderungen an die Verarbeitung
            personenbezogener Daten. Für KI-Telefonie in der Steuerkanzlei
            sind insbesondere relevant:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Art. 6 DSGVO: Rechtmäßigkeit der Verarbeitung — Erforderlichkeit für die Vertragserfüllung oder berechtigtes Interesse",
              "Art. 13/14 DSGVO: Informationspflichten — Mandanten müssen über die KI-Verarbeitung informiert werden",
              "Art. 28 DSGVO: Auftragsverarbeitung — ein AVV zwischen Kanzlei und Anbieter ist Pflicht",
              "Art. 32 DSGVO: Technische und organisatorische Maßnahmen (TOMs)",
              "Art. 35 DSGVO: Datenschutz-Folgenabschätzung bei hohem Risiko",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  gavel
                </span>
                <span className="text-on-surface-variant text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            4. Auftragsverarbeitungsvertrag (AVV)
          </h2>
          <p className="text-on-surface-variant mb-4">
            Jede Kanzlei, die einen KI-Telefonbot einsetzt, benötigt einen
            Auftragsverarbeitungsvertrag mit dem Anbieter. Dieser regelt
            unter anderem:
          </p>
          <ul className="space-y-2">
            {[
              "Art und Zweck der Datenverarbeitung",
              "Kategorien betroffener Personen und Daten",
              "Technische und organisatorische Maßnahmen",
              "Unterauftragsverhältnisse und deren Genehmigung",
              "Löschpflichten nach Vertragsende",
              "Kontrollrechte der Kanzlei",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  description
                </span>
                <span className="text-on-surface-variant text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-on-surface-variant mt-4">
            Wir stellen jeder Kanzlei einen vorbereiteten AVV zur Verfügung,
            der alle genannten Punkte abdeckt.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            5. Technische Sicherheitsmaßnahmen
          </h2>
          <p className="text-on-surface-variant mb-4">
            Unser KI-Telefonbot setzt auf mehrere Sicherheitsebenen:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "dns",
                title: "Deutsche Server",
                text: "Verarbeitung ausschließlich in zertifizierten deutschen Rechenzentren",
              },
              {
                icon: "lock",
                title: "Ende-zu-Ende-Verschlüsselung",
                text: "Alle Gesprächsdaten werden verschlüsselt übertragen und gespeichert",
              },
              {
                icon: "delete_sweep",
                title: "Automatische Löschung",
                text: "Gesprächsprotokolle werden nach konfigurierbarer Frist automatisch gelöscht",
              },
              {
                icon: "admin_panel_settings",
                title: "Zugriffskontrolle",
                text: "Nur autorisierte Personen haben Zugang zu den Systemen",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest rounded-xl p-5 shadow-sm"
              >
                <span className="material-symbols-outlined text-2xl text-primary">
                  {item.icon}
                </span>
                <h3 className="font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            6. Informationspflichten gegenüber Mandanten
          </h2>
          <p className="text-on-surface-variant mb-4">
            Mandanten müssen darüber informiert werden, dass sie mit einem
            KI-System sprechen. Dies kann durch eine kurze Ansage zu Beginn
            des Gesprächs erfolgen. Wir empfehlen eine transparente
            Formulierung wie: &bdquo;Sie sprechen mit dem KI-Assistenten der
            Kanzlei [Name]. Das Gespräch wird zum Zweck der Bearbeitung
            Ihres Anliegens verarbeitet.&ldquo;
          </p>
          <p className="text-on-surface-variant">
            Zusätzlich sollte die Datenschutzerklärung der Kanzlei um einen
            Abschnitt zur KI-Telefonie ergänzt werden.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            7. Die Abgabenordnung (AO) und KI
          </h2>
          <p className="text-on-surface-variant">
            Neben dem StGB und der DSGVO regelt auch die Abgabenordnung den
            Umgang mit steuerlichen Daten. §30 AO schützt das Steuergeheimnis
            und verpflichtet alle Amtsträger und gleichgestellten Personen zur
            Verschwiegenheit. Ein KI-System, das im Auftrag der Kanzlei
            arbeitet, muss daher so eingerichtet sein, dass es den gleichen
            Schutzstandard bietet wie ein menschlicher Mitarbeiter.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            8. Unsere Compliance-Garantie
          </h2>
          <p className="text-on-surface-variant mb-4">
            Als Full-Service-Dienstleister übernehmen wir die Verantwortung
            für die technische Compliance. Jede Kanzlei erhält:
          </p>
          <ul className="space-y-3">
            {[
              "Einen vollständigen Auftragsverarbeitungsvertrag (AVV)",
              "Dokumentation aller technischen und organisatorischen Maßnahmen (TOMs)",
              "Eine Vorlage für die Ergänzung der Kanzlei-Datenschutzerklärung",
              "Regelmäßige Sicherheitsaudits mit Ergebnisbericht",
              "Einen persönlichen Ansprechpartner für Datenschutzfragen",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  verified
                </span>
                <span className="text-on-surface-variant">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="cta-gradient rounded-3xl p-10 text-center text-on-primary">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold">
            Fragen zum Datenschutz?
          </h2>
          <p className="mt-4 opacity-90">
            Unser Team berät Sie gerne zu allen Fragen rund um DSGVO, §203
            StGB und den datenschutzkonformen Einsatz von KI in Ihrer
            Kanzlei.
          </p>
          <Link
            href="/beratung"
            className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-3.5 rounded-full text-lg hover:bg-white/90 transition-colors"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}
