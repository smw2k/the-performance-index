import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 rounded-full bg-primary"
              />
              The Performance Index
            </Link>
            <p className="text-sm text-muted-foreground">
              A research-backed system for understanding performance compounds
              — built for clarity, not hype.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:gap-14">
            <div className="space-y-3">
              <p className="text-foreground font-medium">Explore</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/quiz" className="hover:text-foreground">
                    Assessment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compounds/bpc-157"
                    className="hover:text-foreground"
                  >
                    Compound pages
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-foreground font-medium">Principles</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Clarity over hype</li>
                <li>Evidence over anecdote</li>
                <li>Education, not advice</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground/80 leading-relaxed">
          <p className="max-w-3xl">
            This is not medical advice. The Performance Index is for educational
            purposes only. Consult a qualified healthcare professional before
            making any changes to your health, training, or supplementation.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} The Performance Index. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
