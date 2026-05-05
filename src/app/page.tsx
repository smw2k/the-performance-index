import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Beaker,
  CheckCircle2,
  Clock,
  GitCompare,
  ListChecks,
  Newspaper,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Target,
  Tv,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container, Eyebrow, Section } from "@/components/section";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <PainAmplification />
      <SolutionIntro />
      <CoreBenefits />
      <ValueProp />
      <TrustSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24 sm:pt-32" bleed>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <Container className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          Education-only · No medical advice
        </div>
        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Understand performance compounds without the confusion, guesswork, or
          risk.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          The Performance Index is a research-backed system that breaks down
          peptides and optimisation compounds into clear, structured insights.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/quiz"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 px-6 text-sm font-medium"
            )}
          >
            Take the 60-second assessment
            <ArrowRight className="ml-1.5 size-4" />
          </Link>
          <Link
            href="/compounds/bpc-157"
            className={cn(
              buttonVariants({ size: "lg", variant: "ghost" }),
              "h-12 px-5 text-sm font-medium text-muted-foreground hover:text-foreground"
            )}
          >
            See an example compound
          </Link>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Free. Instant results. No medical advice — education only.
        </p>
      </Container>

      <Container className="mt-20 sm:mt-28">
        <Card className="border-0 bg-card/60 ring-1 ring-border/60 backdrop-blur">
          <CardContent className="grid gap-x-10 gap-y-6 px-6 py-7 sm:grid-cols-3">
            {[
              {
                k: "10+ hours",
                v: "of scattered research, condensed",
              },
              {
                k: "5-point",
                v: "evidence scoring on every compound",
              },
              {
                k: "60 seconds",
                v: "to find your starting point",
              },
            ].map((s) => (
              <div key={s.k} className="text-left">
                <p className="font-heading text-2xl font-medium tracking-tight">
                  {s.k}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

function Problem() {
  const bullets = [
    {
      icon: Newspaper,
      title: "Contradictory articles",
      body: "Two sources, opposite conclusions, no way to tell which is right.",
    },
    {
      icon: ListChecks,
      title: "Forum noise",
      body: "Anecdotes treated as evidence. Dosage advice from strangers.",
    },
    {
      icon: Tv,
      title: "Oversimplified YouTube",
      body: "Confident hosts, missing nuance, monetised opinions.",
    },
    {
      icon: ScrollText,
      title: "Unreadable research papers",
      body: "Hidden behind paywalls and dense academic language.",
    },
  ];
  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The problem isn&apos;t lack of information. It&apos;s too much of
            the wrong kind.
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border/60 sm:grid-cols-2">
          {bullets.map((b) => (
            <div key={b.title} className="bg-background p-6">
              <div className="flex items-center gap-2 text-primary">
                <b.icon className="size-4" />
                <p className="text-sm font-medium text-foreground">
                  {b.title}
                </p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PainAmplification() {
  const bullets = [
    {
      title: "Wrong expectations",
      body: "Assuming a compound does something it doesn’t — and pinning your goals to it.",
    },
    {
      title: "Unintended side effects",
      body: "Skipping the parts of the picture that would have stopped you.",
    },
    {
      title: "Wasted time and money",
      body: "Months on the wrong protocol, then the cost of unwinding it.",
    },
  ];
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="text-destructive/90">The cost</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              And when it comes to your body, guessing isn&apos;t harmless.
            </h2>
          </div>
          <ul className="space-y-5 lg:col-span-7">
            {bullets.map((b) => (
              <li
                key={b.title}
                className="flex gap-4 rounded-xl border border-border/60 bg-background p-5"
              >
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <AlertTriangle className="size-4" />
                </div>
                <div>
                  <p className="font-medium">{b.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function SolutionIntro() {
  return (
    <Section className="border-t border-border/60">
      <Container className="text-center">
        <Eyebrow>The system</Eyebrow>
        <h2 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          So we built a system that cuts through the noise.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-muted-foreground">
          Every compound is broken into the same structured sections — so
          you&apos;re comparing the same things, every time.
        </p>
      </Container>
    </Section>
  );
}

function CoreBenefits() {
  const benefits = [
    {
      icon: ScrollText,
      title: "Clear structured breakdowns",
      body: "Every compound, the same sections. Mechanism, evidence, timeline, risks.",
    },
    {
      icon: Beaker,
      title: "Evidence-based insights",
      body: "Each compound carries a 1–5 evidence score with the reasoning behind it.",
    },
    {
      icon: ShieldCheck,
      title: "Risk & monitoring guidance",
      body: "What can go wrong, how to spot it, and which bloodwork markers to track.",
    },
    {
      icon: GitCompare,
      title: "Comparison tools",
      body: "Put two compounds side-by-side across the same set of dimensions.",
    },
    {
      icon: Target,
      title: "Personalised starting point",
      body: "A 60-second assessment surfaces 2–3 compounds aligned to your goal.",
    },
    {
      icon: Sparkles,
      title: "Built for clarity",
      body: "No supplement-store hype. No protocols. Education that respects your time.",
    },
  ];
  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to navigate the space, in one structured
            library.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="bg-card/60">
              <CardContent className="p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="size-5" />
                </div>
                <p className="mt-5 font-medium">{b.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ValueProp() {
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container className="text-center">
        <Clock className="mx-auto size-6 text-primary" />
        <h2 className="mx-auto mt-6 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          What normally takes 10+ hours of scattered research…{" "}
          <span className="text-primary">now takes minutes.</span>
        </h2>
      </Container>
    </Section>
  );
}

function TrustSection() {
  const principles = [
    "Not a protocol.",
    "Not a recommendation engine.",
    "A structured system.",
  ];
  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Trust</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Built with one principle: clarity over hype.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              We translate research into structure. We flag where evidence is
              weak. We&apos;re honest about what we don&apos;t know — and we
              never tell you what to put in your body.
            </p>
          </div>
          <ul className="space-y-3 lg:col-span-6">
            {principles.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 p-4 text-sm"
              >
                <CheckCircle2 className="size-4 text-primary" />
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Find your optimisation bottleneck in 60 seconds.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A short, honest assessment. No email gate. No medical claims. Just a
            structured starting point built on the same system used across the
            library.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/quiz"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-6 text-sm font-medium"
              )}
            >
              Take the assessment
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            For educational purposes only. Consult a healthcare professional
            before making any changes.
          </p>
        </div>
      </Container>
    </Section>
  );
}
