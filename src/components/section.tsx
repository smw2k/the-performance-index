import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  bleed?: boolean;
};

export function Section({ className, bleed, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        bleed ? "py-20 sm:py-28" : "py-16 sm:py-20",
        className
      )}
      {...props}
    />
  );
}

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6", className)}
      {...props}
    />
  );
}

export function Eyebrow({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.18em] text-primary",
        className
      )}
      {...props}
    />
  );
}
