import type { Metadata } from "next";

const SITE = {
  domain: "steuerberater-telefonbot.de",
  displayName: "Steuerberater-Telefonbot",
};

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${SITE.domain} — DSGVO-konformer Schutz Ihrer personenbezogenen Daten. Ein Service der DigiRift GmbH, Hamburg.`,
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-24 md:pt-44 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-container/10 text-primary font-semibold text-xs tracking-widest rounded-full mb-6 uppercase">
            DSGVO &amp; Datenschutz
          </span>
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-headline)] font-extrabold text-on-surface mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-on-surface-variant">
            Informationen zum DSGVO-konformen Schutz Ihrer personenbezogenen Daten auf {SITE.domain} —
            ein Service der DigiRift GmbH, Hamburg.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-on-surface-variant space-y-10">
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie {SITE.domain} besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
              Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
              z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder die Sie uns telefonisch
              mitteilen. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme
              erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern Sie über die
              Website mit uns in Kontakt treten, werden Ihre Daten zur Bearbeitung Ihrer Anfrage und für den
              Fall von Anschlussfragen gespeichert.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Welche Rechte haben Sie?</h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
              können Sie sich jederzeit unter info@digirift.com an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf {SITE.domain} ist:
            </p>
            <div className="bg-surface-container-low rounded-2xl p-6 not-prose mt-4 space-y-1">
              <p><strong className="text-on-surface">DigiRift GmbH</strong></p>
              <p>Rothenbaumchaussee 17</p>
              <p>20148 Hamburg</p>
              <p>Deutschland</p>
              <p className="pt-2">Telefon: +49 40 74303583</p>
              <p>E-Mail:{" "}
                <a href="mailto:info@digirift.com" className="text-primary hover:underline">info@digirift.com</a>
              </p>
            </div>
            <p className="mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              3. Hosting &amp; Server-Standort
            </h2>
            <p>
              {SITE.domain} wird auf Servern in Deutschland gehostet. Sämtliche personenbezogene Daten werden
              ausschließlich auf deutschen Servern verarbeitet und gespeichert. Ein Transfer in Drittländer
              außerhalb der EU/des EWR findet nicht statt. Unsere Infrastruktur entspricht den Anforderungen
              der DSGVO und wird regelmäßig auditiert.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (gekürzt/anonymisiert)</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
              dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung seiner Website —
              hierzu müssen die Server-Log-Files erfasst werden.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
              berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen
              (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Anfrage per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
              Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">KI-Telefonbot &amp; Anrufdaten</h3>
            <p>
              {SITE.displayName} bietet einen KI-gestützten Telefonbot an. Wenn Sie mit unserem Bot
              telefonieren, werden zu Beginn jedes Gesprächs ein KI-Transparenzhinweis gemäß EU-AI-Act
              ausgesprochen. Anrufdaten und Gesprächsprotokolle werden ausschließlich auf deutschen Servern
              verarbeitet und nach den mit dem jeweiligen Auftraggeber vereinbarten Fristen gelöscht
              (standardmäßig nach 30 Tagen).
            </p>
            <p className="mt-3">
              Für den Einsatz unseres KI-Telefonbots in Ihrem Unternehmen schließen wir vor Inbetriebnahme
              einen Auftragsverarbeitungsvertrag (AV-Vertrag) gemäß Art. 28 DSGVO. Dieser regelt detailliert
              die Verarbeitung der Daten Ihrer Anrufer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              5. Cookies
            </h2>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die Ihr Webbrowser auf Ihrem
              Endgerät speichert. Sie helfen uns, die Website nutzerfreundlicher und sicherer zu machen.
            </p>
            <p className="mt-3">
              Notwendige Cookies werden automatisch gesetzt, da diese für den technischen Betrieb der Website
              erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO). Analyse- und Marketing-Cookies werden nur mit
              Ihrer ausdrücklichen Einwilligung über unseren Cookie-Banner gesetzt (Art. 6 Abs. 1 lit. a DSGVO,
              § 25 Abs. 1 TTDSG). Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen
              widerrufen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              6. Newsletter &amp; E-Book-Versand
            </h2>
            <p>
              Wenn Sie unseren Newsletter abonnieren oder ein E-Book bei uns anfordern, verarbeiten wir Ihre
              E-Mail-Adresse sowie ggf. weitere freiwillige Angaben zum Zwecke des Versands. Die Anmeldung
              erfolgt im Double-Opt-In-Verfahren: Nach der Anmeldung erhalten Sie eine Bestätigungs-E-Mail mit
              einem Link, den Sie zur Aktivierung anklicken müssen.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre
              Einwilligung jederzeit widerrufen, z. B. über den Abmelde-Link in jeder Newsletter-E-Mail oder
              per E-Mail an info@digirift.com.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              7. Ihre Rechte
            </h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständig ist der Hamburgische
              Beauftragte für Datenschutz und Informationsfreiheit (HmbBfDI), Ludwig-Erhard-Straße 22,
              20459 Hamburg.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              8. SSL/TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
              wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol
              in Ihrer Browserzeile.
            </p>
            <p className="mt-3">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
              übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              9. Speicherdauer
            </h2>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
              entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder
              handelsrechtliche Aufbewahrungsfristen). Im letztgenannten Fall erfolgt die Löschung nach
              Fortfall dieser Gründe.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">
              10. Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
              rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
              Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten
              Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </div>

          <div className="border-t border-outline-variant/20 pt-8 text-sm">
            <p className="mb-2">
              Diese Datenschutzerklärung gilt für {SITE.domain} ({SITE.displayName}) — ein Service der
              DigiRift GmbH, Hamburg. Bei Fragen zum Datenschutz kontaktieren Sie uns unter info@digirift.com.
            </p>
            <p>Stand: April 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
