import { cn } from "@/lib/utils";

const LABELS: Record<number, string> = {
  1: "Speculative",
  2: "Emerging",
  3: "Mixed",
  4: "Strong",
  5: "Definitive",
};

export function EvidenceMeter({
  score,
  className,
}: {
  score: 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-5 rounded-full",
              i <= score ? "bg-primary" : "bg-border"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-muted-foreground">
        {score}/5 · {LABELS[score]}
      </span>
    </div>
  );
}
