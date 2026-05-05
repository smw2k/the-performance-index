import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const NAV = [
  { href: "/compounds/bpc-157", label: "Compounds" },
  { href: "/quiz", label: "Assessment" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary)]"
          />
          The Performance Index
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/quiz"
          className={buttonVariants({ size: "default", className: "font-medium" })}
        >
          Take the assessment
        </Link>
      </div>
    </header>
  );
}
