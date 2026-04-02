import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-on-primary-fixed text-primary-fixed py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-headline text-lg italic font-semibold text-primary-fixed-dim">
              steuerberater-telefonbot.de
            </p>
            <p className="mt-2 text-sm text-primary-fixed-dim/70 max-w-xs">
              Der intelligente KI-Telefonbot für Steuerkanzleien — ein Service
              der DigiRift GmbH.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <Link
              href="/datenschutz"
              className="text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/kontakt"
              className="text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/datenschutz-ki-telefonie"
              className="text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
            >
              DSGVO &amp; KI-Telefonie
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-fixed-dim/20 text-xs text-primary-fixed-dim/60">
          &copy; 2026 steuerberater-telefonbot.de — Ein Service der DigiRift
          GmbH
        </div>
      </div>
    </footer>
  );
}
