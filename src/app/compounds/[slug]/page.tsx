import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertOctagon,
  ArrowRight,
  Beaker,
  CalendarClock,
  ChevronRight,
  Clock,
  FlaskConical,
  HeartPulse,
  Info,
  Layers,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/section";
import { EvidenceMeter } from "@/components/evidence-meter";
import {
  getCompound,
  listCompoundSlugs,
  type Compound,
  type Popularity,
  type RiskLevel,
} from "@/lib/compounds";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return listCompoundSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const compound = getCompound(slug);
  if (!compound) return {};
  return {
    title: `${compound.name} — The Performance Index`,
    description: compound.oneLiner,
  };
}

export default async function CompoundPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const compound = getCompound(slug);
  if (!compound) return notFound();

  return (
    <>
      <Hero compound={compound} />
      <EvidenceScoring compound={compound} />
      <WhatItIs compound={compound} />
      <Mechanism compound={compound} />
      <Uses compound={compound} />
      <Research compound={compound} />
      <Timeline compound={compound} />
      <SideEffects compound={compound} />
      <Monitoring compound={compound} />
      <VideoExplainer compound={compound} />
      <Myths compound={compound} />
      <Related compound={compound} />
      <CompoundDisclaimer />
    </>
  );
}

function riskTone(level: RiskLevel) {
  switch (level) {
    case "Low":
      return "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20";
    case "Moderate":
      return "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20";
    case "High":
      return "bg-red-500/10 text-red-300 ring-1 ring-red-500/20";
    default:
      return "bg-muted text-muted-foreground ring-1 ring-border/60";
  }
}

function popularityTone(level: Popularity) {
  switch (level) {
    case "Low":
      return "text-muted-foreground";
    case "Medium":
      return "text-foreground";
    case "High":
      return "text-primary";
  }
}

function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: number;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index).padStart(2, "0")}
        </span>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

function Hero({ compound }: { compound: Compound }) {
  return (
    <Section className="relative overflow-hidden pt-20 sm:pt-24" bleed>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      >
        <div className="absolute left-1/2 top-0 h-[320px] w-[680px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <Container>
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span>Compounds</span>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{compound.name}</span>
        </nav>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="border-border/60">
            {compound.category}
          </Badge>
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          {compound.name}
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
          {compound.oneLiner}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Card className="bg-card/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Beaker className="size-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Evidence
                </span>
              </div>
              <div className="mt-3">
                <EvidenceMeter score={compound.evidenceScore} />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldAlert className="size-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Risk level
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    riskTone(compound.riskLevel)
                  )}
                >
                  {compound.riskLevel}
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Popularity
                </span>
              </div>
              <p
                className={cn(
                  "mt-3 text-sm font-medium",
                  popularityTone(compound.popularity)
                )}
              >
                {compound.popularity} — heavy anecdotal use
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function EvidenceScoring({ compound }: { compound: Compound }) {
  const scoreScale = [
    { score: 1, label: "Speculative", body: "Theory or mechanism only." },
    { score: 2, label: "Emerging", body: "Animal data or weak human signal." },
    { score: 3, label: "Mixed", body: "Some human data, mixed results." },
    {
      score: 4,
      label: "Strong",
      body: "Multiple high-quality human studies.",
    },
    {
      score: 5,
      label: "Definitive",
      body: "Replicated, large-scale RCTs.",
    },
  ];
  return (
    <Section className="border-t border-border/60">
      <Container>
        <SectionHeader
          index={2}
          eyebrow="How we score"
          title="Evidence, risk and popularity — the three lenses we apply to every compound."
          description="Each compound page leads with the same three signals so you can compare apples to apples."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Card className="bg-card/60">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-primary">
                <Beaker className="size-4" />
                <p className="text-sm font-medium">
                  Evidence Strength · 1–5 scale
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {scoreScale.map((s) => (
                  <li
                    key={s.score}
                    className={cn(
                      "flex items-start gap-3 rounded-lg border p-3 transition-colors",
                      s.score === compound.evidenceScore
                        ? "border-primary/40 bg-primary/5"
                        : "border-border/60"
                    )}
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      {s.score}
                    </span>
                    <div>
                      <p className="font-medium">{s.label}</p>
                      <p className="text-muted-foreground">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Separator className="my-6" />
              <p className="text-sm">
                <span className="font-medium">Why {compound.name} sits at{" "}
                  {compound.evidenceScore}/5: </span>
                <span className="text-muted-foreground">
                  {compound.evidenceJustification}
                </span>
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldAlert className="size-4" />
                  <p className="text-sm font-medium">
                    Risk Level · Low / Moderate / High / Unknown
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {compound.riskJustification}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="size-4" />
                  <p className="text-sm font-medium">
                    Popularity / Anecdotal Use · Low / Medium / High
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  This rating reflects how widely a compound is talked about and
                  used in the optimisation community — not whether the evidence
                  supports it. Popularity does not equal proof.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function WhatItIs({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader index={3} eyebrow="What it is" title="In plain English." />
        </div>
        <div className="space-y-5 lg:col-span-8">
          {compound.whatItIs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Mechanism({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container>
        <SectionHeader
          index={4}
          eyebrow="Mechanism of action"
          title="How it’s thought to work — first the simple version, then the depth."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card className="bg-card/60">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-primary">
                <Info className="size-4" />
                <p className="text-sm font-medium">Easy explanation</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                {compound.mechanismEasy}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/60">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-primary">
                <FlaskConical className="size-4" />
                <p className="text-sm font-medium">
                  Advanced explanation
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                {compound.mechanismAdvanced}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function Uses({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <SectionHeader
          index={5}
          eyebrow="What people use it for"
          title="Real-world use cases — what the community actually reaches for it for."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {compound.uses.map((u) => (
            <li
              key={u}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/40 p-4 text-sm"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function Research({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container>
        <SectionHeader
          index={6}
          eyebrow="Research findings"
          title="Key studies — translated."
          description="A summary of what the published evidence actually shows. We flag where the data comes from: rodent, in vitro, or human."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {compound.research.map((r) => (
            <Card key={r.title} className="bg-card/60">
              <CardContent className="p-6">
                <Badge
                  variant="outline"
                  className="border-border/60 text-muted-foreground"
                >
                  {r.population}
                </Badge>
                <p className="mt-4 font-medium">{r.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {r.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Timeline({ compound }: { compound: Compound }) {
  const phases = [
    {
      label: "Week 1–2",
      icon: Clock,
      body: compound.timeline.weeks1to2,
    },
    {
      label: "Week 2–6",
      icon: CalendarClock,
      body: compound.timeline.weeks2to6,
    },
    {
      label: "Long-term",
      icon: Layers,
      body: compound.timeline.longTerm,
    },
  ];
  return (
    <Section className="border-t border-border/60">
      <Container>
        <SectionHeader
          index={7}
          eyebrow="Timeline expectations"
          title="What people typically notice, and when."
          description="An honest map of when effects might appear. Most timelines below come from anecdotal patterns, not controlled human studies — we say so where that’s the case."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {phases.map((p) => (
            <Card key={p.label} className="bg-card/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary">
                  <p.icon className="size-4" />
                  <p className="text-sm font-medium uppercase tracking-wider">
                    {p.label}
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SideEffects({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container>
        <SectionHeader
          index={8}
          eyebrow="Side effects"
          title="What can go wrong — and what to watch for."
        />
        <ul className="mt-10 space-y-3">
          {compound.sideEffects.map((s) => (
            <li
              key={s.title}
              className="flex gap-4 rounded-xl border border-border/60 bg-card/40 p-5"
            >
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <AlertOctagon className="size-4" />
              </div>
              <div>
                <p className="font-medium">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function Monitoring({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <SectionHeader
          index={9}
          eyebrow="Bloodwork & monitoring"
          title="What to track, and when to test."
          description="None of this is medical advice. It’s a list of measurable signals that make it easier to tell whether something is working — or quietly going wrong."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {compound.monitoring.map((m) => (
            <Card key={m.title} className="bg-card/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary">
                  <HeartPulse className="size-4" />
                  <p className="text-sm font-medium">{m.title}</p>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {m.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function VideoExplainer({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container>
        <SectionHeader
          index={10}
          eyebrow="Video explainer"
          title="A short, structured walkthrough."
          description="A NotebookLM-generated explainer covering the same sections on this page, in audio/video form."
        />
        <div className="mt-10">
          {compound.videoEmbedUrl ? (
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border/60 bg-black">
              <iframe
                src={compound.videoEmbedUrl}
                title={`${compound.name} video explainer`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center rounded-xl border border-dashed border-border/60 bg-card/40 text-center">
              <Video className="size-7 text-muted-foreground" />
              <p className="mt-3 text-sm font-medium">
                Video explainer coming soon
              </p>
              <p className="mt-1 max-w-md text-xs text-muted-foreground">
                We’re generating a NotebookLM walkthrough for {compound.name}.
                It will appear here once published.
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

function Myths({ compound }: { compound: Compound }) {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <SectionHeader
          index={11}
          eyebrow="Myths vs reality"
          title="Common claims, side by side with what the evidence shows."
        />
        <div className="mt-10 overflow-hidden rounded-xl border border-border/60">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] bg-border/60 gap-px">
            <div className="bg-card/40 px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              The claim
            </div>
            <div className="bg-card/40 px-5 py-3 text-xs font-medium uppercase tracking-wider text-primary">
              What research says
            </div>
            {compound.myths.map((m, i) => (
              <div key={`row-${i}`} className="contents">
                <div className="bg-background p-5 text-sm">
                  <p className="font-medium">{m.claim}</p>
                </div>
                <div className="bg-background p-5 text-sm text-muted-foreground">
                  {m.reality}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Related({ compound }: { compound: Compound }) {
  if (compound.related.length === 0) return null;
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container>
        <SectionHeader
          index={12}
          eyebrow="Related compounds"
          title="Often discussed in the same conversation."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {compound.related.map((r) => (
            <Link
              key={r.slug}
              href={`/compounds/${r.slug}`}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40 hover:bg-card"
            >
              <div>
                <p className="font-medium">{r.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {r.reason}
                </p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CompoundDisclaimer() {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <Card className="border-0 bg-card/60 ring-1 ring-border/60">
          <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Stethoscope className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  This is not medical advice.
                </span>{" "}
                The Performance Index is for educational purposes only. Consult
                a qualified healthcare professional before making any changes
                to your health, training, or supplementation.
              </p>
            </div>
            <Link
              href="/quiz"
              className={cn(
                buttonVariants({ size: "default", variant: "outline" }),
                "shrink-0"
              )}
            >
              <ShieldCheck className="size-4" />
              Take the assessment
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
