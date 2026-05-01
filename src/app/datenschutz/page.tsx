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
            Datenschutzerklärung der DigiRift GmbH
          </h1>
          <p className="text-lg text-on-surface-variant">
            Informationen zum DSGVO-konformen Schutz Ihrer personenbezogenen Daten bei unseren KI-Lösungen.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-on-surface-variant space-y-10">

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
              aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Datenerfassung auf dieser Website</h3>
            <p><strong className="text-on-surface">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
              Impressum dieser Website entnehmen.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Wie erfassen wir Ihre Daten?</strong></p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
              handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mt-3">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
              Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Wofür nutzen wir Ihre Daten?</strong></p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten
              können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
              zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
              Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Analyse-Tools und Tools von Drittanbietern</h3>
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit
              sogenannten Analyseprogrammen.
            </p>
            <p className="mt-3">
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">2. Hosting</h2>
            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Externes Hosting</h3>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf
              dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um
              IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
              und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mt-3">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden
              Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung
              unserer DSGVO-konformen KI-Lösungen und Online-Angebote durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f
              DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
              TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
              erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
            <p className="mt-3">Wir setzen folgende Hoster ein:</p>
            <div className="bg-surface-container-low rounded-2xl p-6 not-prose mt-3 space-y-4">
              <div>
                <p><strong className="text-on-surface">netcup GmbH</strong></p>
                <p>Daimlerstraße 25</p>
                <p>76185 Karlsruhe, Germany</p>
                <p>Website: <a href="https://www.netcup.de" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">www.netcup.de</a></p>
              </div>
              <div>
                <p><strong className="text-on-surface">Hetzner Online GmbH</strong></p>
                <p>Industriestr. 25</p>
                <p>91710 Gunzenhausen, Deutschland</p>
                <p>Website: <a href="https://www.hetzner.com" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">www.hetzner.com</a></p>
                <p>Datenschutzerklärung: <a href="https://www.hetzner.com/de/legal/privacy-policy" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">www.hetzner.com/de/legal/privacy-policy</a></p>
              </div>
            </div>
            <p className="mt-3">
              Die Server von Hetzner befinden sich in Deutschland und Finnland. Wir nutzen ausschließlich Server in Deutschland,
              um die Einhaltung der DSGVO zu gewährleisten.
            </p>
            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Auftragsverarbeitung</h3>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit den oben genannten Anbietern geschlossen. Hierbei
              handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass diese die
              personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeiten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung. Als Anbieter von DSGVO-konformen KI-Lösungen gewährleisten wir höchste Datenschutzstandards
              bei allen unseren Services.
            </p>
            <p className="mt-3">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
              Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert,
              welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mt-3">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="bg-surface-container-low rounded-2xl p-6 not-prose mt-3 space-y-1">
              <p><strong className="text-on-surface">DigiRift GmbH</strong></p>
              <p>Ihr Partner für DSGVO-konforme KI-Lösungen und digitale Transformation</p>
              <p>Rothenbaumchaussee 17</p>
              <p>20148 Hamburg</p>
              <p className="pt-2">Telefon: +49 40 74303583</p>
              <p>E-Mail: <a href="mailto:info@digirift.com" className="text-primary hover:underline">info@digirift.com</a></p>
            </div>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
              Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
              Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben
              (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
              Fortfall dieser Gründe.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1
              DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in
              Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in
              die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting)
              eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung
              ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten
              wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von
              Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach
              Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
              folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
              erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
              bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <p className="uppercase text-sm">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das
              Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen
              Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
              Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie
              Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn,
              wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
              Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="uppercase text-sm mt-3">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
              Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung
              einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
              widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
              (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
              insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
              Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit
              es technisch machbar ist.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
              &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="mt-3">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von
              Dritten mitgelesen werden.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Auskunft, Löschung und Berichtigung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
              ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
              personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können
              Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der
                Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und
                unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p className="mt-3">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten — von ihrer
              Speicherung abgesehen — nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
              eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und richten
              auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach
              Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
              selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="mt-3">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).
              Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von
              Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="mt-3">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
              Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von
              Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
            </p>
            <p className="mt-3">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
              erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur
              Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes
              Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung
              seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
              Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im
              Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
              Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
              Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="mt-3">
              Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen
              dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die
              Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
            <p className="mt-3">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website — hierzu
              müssen die Server-Log-Files erfasst werden.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
              der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
              übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
              diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben
              unberührt.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
              übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
              diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen — insbesondere gesetzliche
              Aufbewahrungsfristen — bleiben unberührt.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Calendly</h3>
            <p>
              Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu vereinbaren. Für die Terminbuchung nutzen wir
              das Tool &bdquo;Calendly&ldquo;. Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363,
              USA (nachfolgend &bdquo;Calendly&ldquo;).
            </p>
            <p className="mt-3">
              Zum Zweck der Terminbuchung geben Sie die abgefragten Daten und den Wunschtermin in die dafür vorgesehene Maske
              ein. Die eingegebenen Daten werden für die Planung, Durchführung und ggf. für die Nachbereitung des Termins
              verwendet. Die Termindaten werden für uns auf den Servern von Calendly gespeichert, dessen Datenschutzerklärung
              Sie hier einsehen können:{" "}
              <a href="https://calendly.com/de/pages/privacy" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://calendly.com/de/pages/privacy</a>.
            </p>
            <p className="mt-3">
              Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen —
              insbesondere Aufbewahrungsfristen — bleiben unberührt.
            </p>
            <p className="mt-3">
              Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an einer möglichst unkomplizierten Terminvereinbarung mit Interessenten und Kunden. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
              Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
              ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a href="https://calendly.com/pages/dpa" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://calendly.com/pages/dpa</a>.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Auftragsverarbeitung</strong></p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei
              handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
              personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeitet.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Hubspot CRM</h3>
            <p>
              Wir nutzen Hubspot CRM auf dieser Website. Anbieter ist Hubspot Inc. 25 Street, Cambridge, MA 02141 USA
              (nachfolgend Hubspot CRM).
            </p>
            <p className="mt-3">
              Hubspot CRM ermöglicht es uns unter anderem, bestehende und potenzielle Kunden sowie Kundenkontakte zu verwalten.
              Mit Hilfe von Hubspot CRM sind wir in der Lage, Kundeninteraktionen per E-Mail, Social Media oder Telefon über
              verschiedene Kanäle hinweg zu erfassen, zu sortieren und zu analysieren. Die so erfassten personenbezogenen Daten
              können ausgewertet und für die Kommunikation mit dem potenziellen Kunden oder für Marketingmaßnahmen (z. B.
              Newslettermailings) verwendet werden. Mit Hubspot CRM sind wir ferner in der Lage, das Nutzerverhalten unserer
              Kontakte auf unserer Website zu erfassen und zu analysieren.
            </p>
            <p className="mt-3">
              Die Verwendung von Hubspot CRM erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an einer möglichst effizienten Kundenverwaltung und Kundenkommunikation. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
              Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
              ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Details entnehmen Sie der Datenschutzerklärung von Hubspot:{" "}
              <a href="https://legal.hubspot.com/de/privacy-policy" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://legal.hubspot.com/de/privacy-policy</a>.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a href="https://www.hubspot.de/data-privacy/privacy-shield" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://www.hubspot.de/data-privacy/privacy-shield</a>.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Auftragsverarbeitung</strong></p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei
              handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
              personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">5. Analyse-Tools und Werbung</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Google Tag Manager</h3>
            <p>
              Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere Technologien
              auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine
              Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der über
              ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an das Mutterunternehmen
              von Google in die Vereinigten Staaten übertragen werden kann.
            </p>
            <p className="mt-3">
              Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
              ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und Verwaltung verschiedener Tools
              auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
              auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
              TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Google Analytics</h3>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited
              (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei
              erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete
              Betriebssysteme und Herkunft des Nutzers. Diese Daten werden in einer User-ID zusammengefasst und dem jeweiligen
              Endgerät des Websitebesuchers zugeordnet.
            </p>
            <p className="mt-3">
              Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und Scrollbewegungen und Klicks aufzeichnen. Ferner
              verwendet Google Analytics verschiedene Modellierungsansätze, um die erfassten Datensätze zu ergänzen und setzt
              Machine-Learning-Technologien bei der Datenanalyse ein.
            </p>
            <p className="mt-3">
              Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des
              Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen
              über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort
              gespeichert.
            </p>
            <p className="mt-3">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Browser Plugin</strong></p>
            <p>
              Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem folgenden
              Link verfügbare Browser-Plugin herunterladen und installieren:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
            </p>
            <p className="mt-3">
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von
              Google:{" "}
              <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://support.google.com/analytics/answer/6004245?hl=de</a>.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Auftragsverarbeitung</strong></p>
            <p>
              Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der
              deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Hotjar</h3>
            <p>
              Diese Website nutzt Hotjar. Anbieter ist die Hotjar Ltd., Level 2, St Julians Business Centre, 3, Elia Zammit
              Street, St Julians STJ 1000, Malta, Europe (Website: <a href="https://www.hotjar.com" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">https://www.hotjar.com</a>).
            </p>
            <p className="mt-3">
              Hotjar ist ein Werkzeug zur Analyse Ihres Nutzerverhaltens auf dieser Website. Mit Hotjar können wir u. a. Ihre
              Maus- und Scrollbewegungen und Klicks aufzeichnen. Hotjar kann dabei auch feststellen, wie lange Sie mit dem
              Mauszeiger auf einer bestimmten Stelle verblieben sind. Aus diesen Informationen erstellt Hotjar sogenannte
              Heatmaps, mit denen sich feststellen lässt, welche Websitebereiche vom Websitebesucher bevorzugt angeschaut werden.
            </p>
            <p className="mt-3">
              Des Weiteren können wir feststellen, wie lange Sie auf einer Seite verblieben sind und wann Sie sie verlassen
              haben. Wir können auch feststellen, an welcher Stelle Sie Ihre Eingaben in ein Kontaktformular abgebrochen haben
              (sog. Conversion-Funnels).
            </p>
            <p className="mt-3">
              Darüber hinaus können mit Hotjar direkte Feedbacks von Websitebesuchern eingeholt werden. Diese Funktion dient der
              Verbesserung der Webangebote des Websitebetreibers.
            </p>
            <p className="mt-3">
              Hotjar verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens
              ermöglichen (z. B. Cookies oder Einsatz von Device-Fingerprinting).
            </p>
            <p className="mt-3">
              Die Nutzung dieses Analysetools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu
              optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
              TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Deaktivieren von Hotjar</strong></p>
            <p>
              Wenn Sie die Datenerfassung durch Hotjar deaktivieren möchten, klicken Sie auf folgenden Link und folgen Sie den
              dortigen Anweisungen:{" "}
              <a href="https://www.hotjar.com/policies/do-not-track/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://www.hotjar.com/policies/do-not-track/</a>
            </p>
            <p className="mt-3">
              Bitte beachten Sie, dass die Deaktivierung von Hotjar für jeden Browser bzw. für jedes Endgerät separat erfolgen
              muss.
            </p>
            <p className="mt-3">
              Nähere Informationen über Hotjar und zu den erfassten Daten entnehmen Sie der Datenschutzerklärung von Hotjar
              unter dem folgenden Link:{" "}
              <a href="https://www.hotjar.com/privacy" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://www.hotjar.com/privacy</a>
            </p>
            <p className="mt-3"><strong className="text-on-surface">Auftragsverarbeitung</strong></p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei
              handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
              personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeitet.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">WP Statistics</h3>
            <p>
              Diese Website nutzt das Analysetool WP Statistics, um Besucherzugriffe statistisch auszuwerten. Anbieter ist
              Veronalabs, ARENCO Tower, 27th Floor, Dubai Media City, Dubai, Dubai 23816, UAE (<a href="https://veronalabs.com" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">https://veronalabs.com</a>).
            </p>
            <p className="mt-3">
              Mit WP Statistics können wir die Nutzung unserer Website analysieren. WP Statistics erfasst dabei u. a. Logdateien
              (IP-Adresse, Referrer, verwendete Browser, Herkunft des Nutzers, verwendete Suchmaschine) und Aktionen, die die
              Websitebesucher auf der Seite getätigt haben (z. B. Klicks und Ansichten).
            </p>
            <p className="mt-3">
              Die mit WP Statistics erfassten Daten werden ausschließlich auf unserem eigenen Server gespeichert.
            </p>
            <p className="mt-3">
              Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
              Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot als auch unsere Werbung
              zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
              auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
              TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3"><strong className="text-on-surface">IP-Anonymisierung</strong></p>
            <p>
              Wir verwenden WP Statistics mit anonymisierter IP. Ihre IP-Adresse wird dabei gekürzt, sodass diese Ihnen nicht
              mehr direkt zugeordnet werden kann.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Google Ads</h3>
            <p>
              Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited
              (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Google Ads ermöglicht es uns Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn
              der Nutzer bestimmte Suchbegriffe bei Google eingibt (Keyword-Targeting). Ferner können zielgerichtete
              Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z. B. Standortdaten und Interessen) ausgespielt
              werden (Zielgruppen-Targeting). Wir als Websitebetreiber können diese Daten quantitativ auswerten, indem wir
              beispielsweise analysieren, welche Suchbegriffe zur Ausspielung unserer Werbeanzeigen geführt haben und wie viele
              Anzeigen zu entsprechenden Klicks geführt haben.
            </p>
            <p className="mt-3">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25
              Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a href="https://policies.google.com/privacy/frameworks" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://policies.google.com/privacy/frameworks</a>{" "}und{" "}
              <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Facebook Pixel</h3>
            <p>
              Diese Website nutzt zur Konversionsmessung der Besucheraktions-Pixel von Facebook. Anbieter dieses Dienstes ist
              die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach
              Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.
            </p>
            <p className="mt-3">
              So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige
              auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für
              statistische und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.
            </p>
            <p className="mt-3">
              Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die
              Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine
              Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend
              der Facebook-Datenverwendungsrichtlinie verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf
              Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als
              Seitenbetreiber nicht beeinflusst werden.
            </p>
            <p className="mt-3">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25
              Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://www.facebook.com/legal/EU_data_transfer_addendum</a>{" "}und{" "}
              <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://de-de.facebook.com/help/566994660333381</a>.
            </p>
            <p className="mt-3">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook
              weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
              Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame
              Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an
              Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil der gemeinsamen
              Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame
              Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{" "}
              <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://www.facebook.com/legal/controller_addendum</a>.
              Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools
              und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die
              Datensicherheit der Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen)
              hinsichtlich der bei Facebook verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die
              Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.
            </p>
            <p className="mt-3">
              In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre:{" "}
              <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://de-de.facebook.com/about/privacy/</a>.
            </p>
            <p className="mt-3">
              Sie können außerdem die Remarketing-Funktion &bdquo;Custom Audiences&ldquo; im Bereich Einstellungen für
              Werbeanzeigen unter{" "}
              <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen</a>{" "}deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.
            </p>
            <p className="mt-3">
              Wenn Sie kein Facebook Konto besitzen, können Sie nutzungsbasierte Werbung von Facebook auf der Website der
              European Interactive Digital Advertising Alliance deaktivieren:{" "}
              <a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">http://www.youronlinechoices.com/de/praferenzmanagement/</a>.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Clickcease</h3>
            <p>
              Diese Website nutzt den Webanalysedienst Clickcease, der sich in 18th Haarba&apos;a Street, Tel Aviv, Israel befindet.
            </p>
            <p className="mt-3">
              Clickcease verwendet &bdquo;Cookies&ldquo;, um Informationen zu sammeln, zu speichern und zu verarbeiten, die Ihr
              Browser automatisch an uns sendet. Dazu gehören: Browsertyp/Browserversion, verwendetes Betriebssystem, Referrer-URL,
              Hostname des zugreifenden Computers, Zeitpunkt der Serveranfrage und die IP-Adresse. Clickcease durchsucht diese
              Daten nach ungewöhnlichem Verhalten und kann im Falle von Verdacht auf Klickbetrug Daten an Google weiterleiten.
              Im Rahmen dieses Prozesses ist es möglich, dass die gesammelten Daten außerhalb der Europäischen Union verarbeitet
              und gespeichert werden.
            </p>
            <p className="mt-3">
              Die Sammlung dieser Daten basiert auf Artikel 6(1)(f) der DSGVO. Der Betreiber der Website hat ein berechtigtes
              Interesse daran, das Nutzerverhalten zu analysieren, um sowohl das Werbungsangebot als auch die Werbung zu
              optimieren.
            </p>
            <p className="mt-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur in
              Einzelfällen zulassen, generell das Annehmen von Cookies ausschließen oder die automatische Löschung von Cookies
              beim Schließen des Browsers aktivieren. Wenn Sie Cookies deaktivieren, kann die Funktionalität dieser Website
              eingeschränkt sein.
            </p>
            <p className="mt-3">
              Weitere Informationen und die Datenschutzbestimmungen von Clickcease finden Sie unter{" "}
              <a href="https://www.clickcease.com/tos.html" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://www.clickcease.com/tos.html</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">6. Newsletter</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Newsletterdaten</h3>
            <p>
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse
              sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse
              und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis
              erhoben. Für die Abwicklung der Newsletter nutzen wir Newsletterdiensteanbieter, die nachfolgend beschrieben werden.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Sendinblue</h3>
            <p>
              Diese Website nutzt Sendinblue für den Versand von Newslettern. Anbieter ist die Sendinblue GmbH, Köpenicker
              Straße 126, 10179 Berlin, Deutschland.
            </p>
            <p className="mt-3">
              Sendinblue ist ein Dienst, mit dem u.a. der Versand von Newslettern organisiert und analysiert werden kann. Die
              von Ihnen zum Zwecke des Newsletterbezugs eingegeben Daten werden auf den Servern von Sendinblue in Deutschland
              gespeichert.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Datenanalyse durch Sendinblue</strong></p>
            <p>
              Mit Hilfe von Sendinblue ist es uns möglich, unsere Newsletter-Kampagnen zu analysieren. So können wir z. B. sehen,
              ob eine Newsletter-Nachricht geöffnet und welche Links ggf. angeklickt wurden. Auf diese Weise können wir u.a.
              feststellen, welche Links besonders oft angeklickt wurden.
            </p>
            <p className="mt-3">
              Außerdem können wir erkennen, ob nach dem Öffnen/Anklicken bestimmte vorher definierte Aktionen durchgeführt
              wurden (Conversion-Rate). Wir können so z. B. erkennen, ob Sie nach dem Anklicken des Newsletters einen Kauf
              getätigt haben.
            </p>
            <p className="mt-3">
              Sendinblue ermöglicht es uns auch, die Newsletter-Empfänger anhand verschiedener Kategorien zu unterteilen
              (&bdquo;clustern&ldquo;). Dabei lassen sich die Newsletterempfänger z. B. nach Alter, Geschlecht oder Wohnort
              unterteilen. Auf diese Weise lassen sich die Newsletter besser an die jeweiligen Zielgruppen anpassen.
            </p>
            <p className="mt-3">
              Wenn Sie keine Analyse durch Sendinblue wollen, müssen Sie den Newsletter abbestellen. Hierfür stellen wir in jeder
              Newsletternachricht einen entsprechenden Link zur Verfügung.
            </p>
            <p className="mt-3">
              Ausführliche Informationen zum zu den Funktionen von Sendinblue entnehmen Sie folgendem Link:{" "}
              <a href="https://de.sendinblue.com/newsletter-software/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://de.sendinblue.com/newsletter-software/</a>.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Rechtsgrundlage</strong></p>
            <p>
              Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom
              Widerruf unberührt.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Speicherdauer</strong></p>
            <p>
              Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung
              aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters
              aus der Newsletterverteilerliste gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon
              unberührt.
            </p>
            <p className="mt-3">
              Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
              Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger Mailings
              erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten
              zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen
              Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
              Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre
              Interessen unser berechtigtes Interesse überwiegen.
            </p>
            <p className="mt-3">
              Näheres entnehmen Sie den Datenschutzbestimmungen von Sendinblue unter:{" "}
              <a href="https://de.sendinblue.com/datenschutz-uebersicht/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://de.sendinblue.com/datenschutz-uebersicht/</a>.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Auftragsverarbeitung</strong></p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei
              handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
              personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">7. Plugins und Tools</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Google Web Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt
              werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und
              Schriftarten korrekt anzuzeigen.
            </p>
            <p className="mt-3">
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch
              erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google
              WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
              Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät
              des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
            </p>
            <p className="mt-3">
              Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://developers.google.com/fonts/faq</a>{" "}und in der Datenschutzerklärung von Google:{" "}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://policies.google.com/privacy?hl=de</a>.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;),
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
              werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser
              Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der
              einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser
              die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an
              einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse
              im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
              Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
              Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://privacy.google.com/businesses/gdprcontrollerterms/</a>{" "}und{" "}
              <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
            </p>
            <p className="mt-3">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://policies.google.com/privacy?hl=de</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">8. eCommerce und Zahlungsanbieter</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Verarbeiten von Daten (Kunden- und Vertragsdaten)</h3>
            <p>
              Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche
              Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher
              Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben,
              verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu
              ermöglichen oder abzurechnen.
            </p>
            <p className="mt-3">
              Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht.
              Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">9. Audio- und Videokonferenzen</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Datenverarbeitung</h3>
            <p>
              Für die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von
              uns genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet
              kommunizieren, werden Ihre personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst
              und verarbeitet.
            </p>
            <p className="mt-3">
              Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen
              (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz,
              Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige
              &bdquo;Kontextinformationen&ldquo; im Zusammenhang mit dem Kommunikationsvorgang (Metadaten).
            </p>
            <p className="mt-3">
              Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abwicklung der Online-Kommunikation
              erforderlich sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp
              und -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.
            </p>
            <p className="mt-3">
              Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden
              diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen insbesondere
              Cloud-Aufzeichnungen, Chat-/Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und
              andere Informationen, die während der Nutzung des Dienstes geteilt werden.
            </p>
            <p className="mt-3">
              Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools
              haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere
              Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils
              eingesetzten Tools, die wir unter diesem Text aufgeführt haben.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Zweck und Rechtsgrundlagen</h3>
            <p>
              Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder
              bestimmte Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren dient der
              Einsatz der Tools der allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem
              Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt
              wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit
              mit Wirkung für die Zukunft widerrufbar.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Speicherdauer der Konferenzdaten</h3>
            <p>
              Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gelöscht,
              sobald Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende
              gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>
            <p className="mt-3">
              Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert
              werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der
              Konferenz-Tools.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Eingesetzte Konferenz-Tools</h3>
            <p>Wir setzen folgende Konferenz-Tools ein:</p>
            <p className="mt-3"><strong className="text-on-surface">Google Meet</strong></p>
            <p>
              Wir nutzen Google Meet. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Google:{" "}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener nofollow" className="text-primary hover:underline break-all">https://policies.google.com/privacy?hl=de</a>.
            </p>
            <p className="mt-3"><strong className="text-on-surface">Auftragsverarbeitung</strong></p>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei
              handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
              personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
              verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-[family-name:var(--font-headline)] font-bold text-on-surface mb-4">10. Eigene Dienste</h2>

            <h3 className="text-lg font-semibold text-on-surface mt-4 mb-2">Umgang mit Bewerberdaten</h3>
            <p>
              Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail, postalisch oder via
              Online-Bewerberformular). Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des
              Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir versichern, dass die Erhebung, Verarbeitung und Nutzung
              Ihrer Daten in Übereinstimmung mit geltendem Datenschutzrecht und allen weiteren gesetzlichen Bestimmungen erfolgt
              und Ihre Daten streng vertraulich behandelt werden.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Umfang und Zweck der Datenerhebung</h3>
            <p>
              Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten (z. B.
              Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von Bewerbungsgesprächen etc.), soweit
              dies zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage
              hierfür ist § 26 BDSG nach deutschem Recht (Anbahnung eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b
              DSGVO (allgemeine Vertragsanbahnung) und — sofern Sie eine Einwilligung erteilt haben — Art. 6 Abs. 1 lit. a DSGVO.
              Die Einwilligung ist jederzeit widerrufbar. Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens
              ausschließlich an Personen weitergegeben, die an der Bearbeitung Ihrer Bewerbung beteiligt sind.
            </p>
            <p className="mt-3">
              Sofern die Bewerbung erfolgreich ist, werden die von Ihnen eingereichten Daten auf Grundlage von § 26 BDSG und
              Art. 6 Abs. 1 lit. b DSGVO zum Zwecke der Durchführung des Beschäftigungsverhältnisses in unseren
              Datenverarbeitungssystemen gespeichert.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Aufbewahrungsdauer der Daten</h3>
            <p>
              Sofern wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen,
              behalten wir uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage unserer berechtigten Interessen
              (Art. 6 Abs. 1 lit. f DSGVO) bis zu 6 Monate ab der Beendigung des Bewerbungsverfahrens (Ablehnung oder
              Zurückziehung der Bewerbung) bei uns aufzubewahren. Anschließend werden die Daten gelöscht und die physischen
              Bewerbungsunterlagen vernichtet. Die Aufbewahrung dient insbesondere Nachweiszwecken im Falle eines Rechtsstreits.
              Sofern ersichtlich ist, dass die Daten nach Ablauf der 6-Monatsfrist erforderlich sein werden (z. B. aufgrund eines
              drohenden oder anhängigen Rechtsstreits), findet eine Löschung erst statt, wenn der Zweck für die weitergehende
              Aufbewahrung entfällt.
            </p>
            <p className="mt-3">
              Eine längere Aufbewahrung kann außerdem stattfinden, wenn Sie eine entsprechende Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO) erteilt haben oder wenn gesetzliche Aufbewahrungspflichten der Löschung entgegenstehen.
            </p>

            <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">Aufnahme in den Bewerber-Pool</h3>
            <p>
              Sofern wir Ihnen kein Stellenangebot machen, besteht ggf. die Möglichkeit, Sie in unseren Bewerber-Pool aufzunehmen.
              Im Falle der Aufnahme werden alle Dokumente und Angaben aus der Bewerbung in den Bewerber-Pool übernommen, um Sie
              im Falle von passenden Vakanzen zu kontaktieren.
            </p>
            <p className="mt-3">
              Die Aufnahme in den Bewerber-Pool geschieht ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO). Die Abgabe der Einwilligung ist freiwillig und steht in keinem Bezug zum laufenden
              Bewerbungsverfahren. Der Betroffene kann seine Einwilligung jederzeit widerrufen. In diesem Falle werden die Daten
              aus dem Bewerber-Pool unwiderruflich gelöscht, sofern keine gesetzlichen Aufbewahrungsgründe vorliegen.
            </p>
            <p className="mt-3">
              Die Daten aus dem Bewerber-Pool werden spätestens zwei Jahre nach Erteilung der Einwilligung unwiderruflich gelöscht.
            </p>
          </div>

          <div className="border-t border-outline-variant/20 pt-8 text-sm">
            <p>
              {SITE.domain} ist ein Service der DigiRift GmbH, Hamburg. Bei Fragen zum Datenschutz kontaktieren Sie uns unter
              info@digirift.com.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
