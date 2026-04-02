import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der steuerberater-telefonbot.de.",
};

export default function Datenschutz() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl prose prose-neutral">
        <h1 className="font-headline text-3xl font-bold mb-8">
          Datenschutzerklärung
        </h1>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          1. Datenschutz auf einen Blick
        </h2>
        <h3 className="font-semibold mt-4 mb-1">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          2. Verantwortliche Stelle
        </h2>
        <p>
          DigiRift GmbH
          <br />
          Rothenbaumchaussee 17
          <br />
          20148 Hamburg
          <br />
          Telefon: +49 40 74303583
          <br />
          E-Mail: info@digirift.com
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          3. Datenerfassung auf dieser Website
        </h2>
        <h3 className="font-semibold mt-4 mb-1">Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
          Ihre Angaben aus dem Formular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
        <h3 className="font-semibold mt-4 mb-1">Kosten-Rechner</h3>
        <p>
          Bei der Nutzung unseres Kosten-Rechners werden Ihre Angaben
          (E-Mail-Adresse, optionaler Name und Kanzleiname) sowie die
          Rechner-Ergebnisse gespeichert, um Ihnen die Auswertung per E-Mail
          zusenden zu können.
        </p>
        <h3 className="font-semibold mt-4 mb-1">E-Book-Download</h3>
        <p>
          Für den Download unseres DSGVO-Leitfadens erfassen wir Ihre
          E-Mail-Adresse. Diese wird ausschließlich zum Versand des
          Download-Links verwendet.
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          4. Newsletter
        </h2>
        <p>
          Wenn Sie den Newsletter empfangen möchten, benötigen wir eine
          gültige E-Mail-Adresse. Die Anmeldung erfolgt im Double-Opt-In-Verfahren.
          Sie können den Newsletter jederzeit über den in jeder Ausgabe
          enthaltenen Abmeldelink abbestellen.
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          5. Hosting
        </h2>
        <p>
          Diese Website wird auf Servern in Deutschland gehostet. Der Hoster
          erhebt in sogenannten Logfiles folgende Daten: aufgerufene
          Webseite, Datum und Uhrzeit des Zugriffs, übertragene Datenmenge,
          Meldung über erfolgreichen Abruf, Browsertyp und -version,
          Betriebssystem, Referrer-URL, Hostname und IP-Adresse.
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          6. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf
          Berichtigung, Sperrung oder Löschung dieser Daten.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
          sich jederzeit an uns wenden: info@digirift.com
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          7. Cookies
        </h2>
        <p>
          Diese Website verwendet Cookies. Cookies sind kleine Textdateien,
          die auf Ihrem Endgerät gespeichert werden. Einige Cookies sind
          technisch notwendig (z. B. Cookie-Consent), andere dienen der
          statistischen Auswertung. Sie können Ihre Cookie-Einstellungen
          jederzeit in Ihrem Browser ändern.
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          8. SSL-Verschlüsselung
        </h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie an dem Schloss-Symbol in der
          Adresszeile des Browsers.
        </p>
      </div>
    </section>
  );
}
