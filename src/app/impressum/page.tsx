import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der steuerberater-telefonbot.de — ein Service der DigiRift GmbH.",
};

export default function Impressum() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl prose prose-neutral">
        <h1 className="font-headline text-3xl font-bold mb-8">Impressum</h1>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          Angaben gemäß §5 TMG
        </h2>
        <p>
          DigiRift GmbH
          <br />
          Rothenbaumchaussee 17
          <br />
          20148 Hamburg
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          Vertreten durch
        </h2>
        <p>
          Geschäftsführer: Kamil Gawlik, Kian Ansari
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          Kontakt
        </h2>
        <p>
          Telefon: +49 40 74303583
          <br />
          E-Mail:{" "}
          <a href="mailto:info@digirift.com" className="text-primary hover:underline">
            info@digirift.com
          </a>
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          Registereintrag
        </h2>
        <p>
          Eingetragen im Handelsregister.
          <br />
          Registergericht: Amtsgericht Hamburg
          <br />
          Registernummer: HRB (auf Anfrage)
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          Umsatzsteuer-ID
        </h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:
          <br />
          DE347780824
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          Verantwortlich für den Inhalt nach §55 Abs. 2 RStV
        </h2>
        <p>
          Kamil Gawlik
          <br />
          Rothenbaumchaussee 17
          <br />
          20148 Hamburg
        </p>

        <h2 className="font-headline text-xl font-semibold mt-8 mb-2">
          Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </div>
    </section>
  );
}
