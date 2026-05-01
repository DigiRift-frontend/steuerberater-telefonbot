import type { Metadata } from "next";

const SITE = {
  domain: "steuerberater-telefonbot.de",
  displayName: "Steuerberater-Telefonbot",
};

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${SITE.domain} — ein Service der DigiRift GmbH, Hamburg. Angaben gemäß § 5 TMG.`,
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-24 md:pt-44 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-container/10 text-primary font-semibold text-xs tracking-widest rounded-full mb-6 uppercase">
            Rechtliche Informationen
          </span>
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-headline)] font-extrabold text-on-surface mb-4">
            Impressum
          </h1>
          <p className="text-lg text-on-surface-variant">
            Angaben gemäß § 5 TMG für {SITE.displayName} ({SITE.domain}) — ein Service der DigiRift GmbH, Hamburg.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-on-surface-variant space-y-10">
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mb-4">
              Die DigiRift GmbH ist ein in Deutschland ansässiges Technologieunternehmen, das sich auf die
              Entwicklung und Implementierung von KI-Lösungen spezialisiert hat. Als eingetragene GmbH
              unterliegen wir den deutschen Handelsgesetzen und sind im Handelsregister Hamburg eingetragen.
            </p>
            <div className="bg-surface-container-low rounded-2xl p-6 not-prose">
              <p className="mb-1"><strong className="text-on-surface">Firmenname:</strong> DigiRift GmbH</p>
              <p className="mb-1"><strong className="text-on-surface">Anschrift:</strong> Rothenbaumchaussee 17</p>
              <p className="mb-1"><strong className="text-on-surface">PLZ/Ort:</strong> 20148 Hamburg</p>
              <p><strong className="text-on-surface">Land:</strong> Deutschland</p>
            </div>
            <p className="mt-4 text-sm">
              Unser Firmensitz befindet sich im Herzen von Hamburg, einer der führenden Technologie-Metropolen
              Deutschlands. Von hier aus betreuen wir Kunden in ganz Deutschland und darüber hinaus mit
              innovativen KI-Lösungen und strategischer Beratung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Geschäftsführung
            </h2>
            <p className="mb-2">
              Kamil Gawlik<br />
              Kian Ansari
            </p>
            <p className="text-sm">Beide geschäftsführungsberechtigte Gesellschafter der DigiRift GmbH.</p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Kontaktdaten
            </h2>
            <div className="bg-surface-container-low rounded-2xl p-6 not-prose space-y-1">
              <p><strong className="text-on-surface">Telefon:</strong> +49 40 74303583</p>
              <p><strong className="text-on-surface">E-Mail:</strong>{" "}
                <a href="mailto:info@digirift.com" className="text-primary hover:underline">info@digirift.com</a>
              </p>
              <p><strong className="text-on-surface">Geschäftszeiten:</strong> Mo–Fr 9:00–17:00 Uhr</p>
            </div>
            <p className="mt-4 text-sm">
              Für Anfragen zu {SITE.displayName} oder anderen KI-Services der DigiRift GmbH wenden Sie sich
              bitte direkt an unser Team. Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu bearbeiten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Rechtsform &amp; Registrierung
            </h2>
            <div className="bg-surface-container-low rounded-2xl p-6 not-prose space-y-1">
              <p><strong className="text-on-surface">Rechtsform:</strong> GmbH (Gesellschaft mit beschränkter Haftung)</p>
              <p><strong className="text-on-surface">Registergericht:</strong> Amtsgericht Hamburg</p>
              <p><strong className="text-on-surface">Haupttätigkeit:</strong> KI-Entwicklung &amp; Beratung</p>
            </div>
            <p className="mt-4 text-sm">
              Eingetragen im Handelsregister Hamburg. Als GmbH haften wir für unsere Geschäftstätigkeit mit
              dem Gesellschaftsvermögen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <strong className="text-on-surface">DE347780824</strong>
            </p>
            <p className="mt-3 text-sm">
              Diese USt-IdNr. ist bei allen geschäftlichen Rechnungen und Angeboten angegeben und kann zur
              Überprüfung der Unternehmensangaben verwendet werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener nofollow"
                className="text-primary hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-3">Unsere E-Mail-Adresse für Streitbeilegungsverfahren: info@digirift.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Zuständige Schlichtungsstelle:<br />
              Universalschlichtungsstelle des Zentrums für Schlichtung e.V.<br />
              Straßburger Straße 8, 77694 Kehl am Rhein<br />
              <a
                href="https://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener nofollow"
                className="text-primary hover:underline"
              >
                www.verbraucher-schlichter.de
              </a>
            </p>
            <p className="mt-3">
              Wir sind bereit, bei Streitigkeiten mit Verbrauchern an einem Schlichtungsverfahren vor dieser
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
              nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf {SITE.domain} unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht-kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="border-t border-outline-variant/20 pt-8 text-sm">
            <p className="mb-2">
              {SITE.domain} ist ein Service der DigiRift GmbH, Hamburg. Dieses Impressum gilt auch für die
              Social-Media-Auftritte von {SITE.displayName}.
            </p>
            <p>Stand: April 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
