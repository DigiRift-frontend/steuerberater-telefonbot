import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-8 py-12">
        {/* Left: Brand + Copyright */}
        <div className="space-y-4">
          <div className="text-xl font-headline font-bold text-primary">
            steuerberater-telefonbot.de
          </div>
          <p className="font-body text-sm tracking-wide text-slate-500">
            &copy; {new Date().getFullYear()} steuerberater-telefonbot.de. Ein Service der
            DigiRift GmbH.
          </p>
        </div>

        {/* Right: Links + E-Book teaser */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
          <Link
            href="/datenschutz"
            className="text-slate-500 hover:text-primary transition-colors font-body text-sm tracking-wide"
          >
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="text-slate-500 hover:text-primary transition-colors font-body text-sm tracking-wide"
          >
            Impressum
          </Link>
          <Link
            href="/kontakt"
            className="text-slate-500 hover:text-primary transition-colors font-body text-sm tracking-wide"
          >
            Kontakt
          </Link>
          <Link
            href="/datenschutz-ki-telefonie"
            className="text-slate-500 hover:text-primary transition-colors font-body text-sm tracking-wide"
          >
            DSGVO &amp; KI-Telefonie
          </Link>
          <Link
            href="/ratgeber"
            className="text-slate-500 hover:text-primary transition-colors font-body text-sm tracking-wide"
          >
            Ratgeber
          </Link>
        </div>
      </div>
    </footer>
  );
}
