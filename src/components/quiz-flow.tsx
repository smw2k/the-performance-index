"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GoalId = "fat-loss" | "muscle" | "recovery" | "longevity" | "cognitive";
type HealthScale = "low" | "medium" | "high";
type ExperienceId = "none" | "some" | "experienced";

type Answers = {
  goal?: GoalId;
  sleep?: HealthScale;
  stress?: HealthScale;
  energy?: HealthScale;
  experience?: ExperienceId;
};

const GOALS: { id: GoalId; label: string; body: string }[] = [
  {
    id: "fat-loss",
    label: "Body composition",
    body: "Lose fat, tighten up, recomp.",
  },
  {
    id: "muscle",
    label: "Muscle & strength",
    body: "Build size, strength, or work capacity.",
  },
  {
    id: "recovery",
    label: "Recovery & injury",
    body: "Heal nagging injuries, train more often.",
  },
  {
    id: "longevity",
    label: "Longevity & healthspan",
    body: "Long-game health, biomarkers, ageing.",
  },
  {
    id: "cognitive",
    label: "Cognitive performance",
    body: "Focus, mood, mental output.",
  },
];

const HEALTH_OPTIONS: { id: HealthScale; label: string }[] = [
  { id: "low", label: "Poor" },
  { id: "medium", label: "Average" },
  { id: "high", label: "Strong" },
];

const EXPERIENCE: { id: ExperienceId; label: string; body: string }[] = [
  {
    id: "none",
    label: "None",
    body: "I’ve never used peptides or performance compounds.",
  },
  {
    id: "some",
    label: "Some",
    body: "I’ve tried 1–2 compounds, mostly cautiously.",
  },
  {
    id: "experienced",
    label: "Experienced",
    body: "I’ve cycled multiple compounds and tracked outcomes.",
  },
];

const TOTAL_STEPS = 3;

export function QuizFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const stepValid = useMemo(() => {
    if (step === 0) return Boolean(answers.goal);
    if (step === 1)
      return Boolean(answers.sleep && answers.stress && answers.energy);
    if (step === 2) return Boolean(answers.experience);
    return false;
  }, [step, answers]);

  const progress = ((step + (done ? 1 : 0)) / TOTAL_STEPS) * 100;

  function back() {
    if (done) {
      setDone(false);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  }

  function next() {
    if (!stepValid) return;
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  }

  return (
    <div>
      <ProgressHeader step={step} done={done} progress={progress} />

      <Card className="mt-6 bg-card/60">
        <CardContent className="p-6 sm:p-8">
          {!done && step === 0 ? (
            <GoalQuestion answers={answers} setAnswers={setAnswers} />
          ) : null}
          {!done && step === 1 ? (
            <HealthQuestion answers={answers} setAnswers={setAnswers} />
          ) : null}
          {!done && step === 2 ? (
            <ExperienceQuestion answers={answers} setAnswers={setAnswers} />
          ) : null}
          {done ? <Result answers={answers} /> : null}
        </CardContent>
      </Card>

      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="ghost"
          size="default"
          onClick={back}
          disabled={step === 0 && !done}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back
        </Button>

        {!done ? (
          <Button size="default" onClick={next} disabled={!stepValid}>
            {step < TOTAL_STEPS - 1 ? "Next" : "See your starting point"}
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <span className="text-xs text-muted-foreground">
            Phase 1 preview · full library coming soon
          </span>
        )}
      </div>
    </div>
  );
}

function ProgressHeader({
  step,
  done,
  progress,
}: {
  step: number;
  done: boolean;
  progress: number;
}) {
  const titles = [
    "What are you actually trying to optimise?",
    "How would you describe your baseline right now?",
    "Where are you on the experience curve?",
  ];
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">
          {done ? `Done` : `Question ${step + 1} of ${TOTAL_STEPS}`}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      {!done ? (
        <h2 className="mt-6 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {titles[step]}
        </h2>
      ) : null}
    </div>
  );
}

function OptionRow({
  id,
  value,
  selected,
  label,
  body,
}: {
  id: string;
  value: string;
  selected: boolean;
  label: string;
  body?: string;
}) {
  return (
    <Label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-colors",
        selected
          ? "border-primary/60 bg-primary/5"
          : "border-border/60 hover:border-foreground/30 hover:bg-card/60"
      )}
    >
      <RadioGroupItem id={id} value={value} className="mt-0.5" />
      <div className="flex-1">
        <p className="font-medium">{label}</p>
        {body ? (
          <p className="mt-1 text-sm font-normal text-muted-foreground">
            {body}
          </p>
        ) : null}
      </div>
    </Label>
  );
}

function GoalQuestion({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        Pick the area that, if it improved, would matter most over the next 6
        months.
      </p>
      <RadioGroup
        className="mt-6 grid gap-3"
        value={answers.goal ?? ""}
        onValueChange={(v) =>
          setAnswers((a) => ({ ...a, goal: v as GoalId }))
        }
      >
        {GOALS.map((g) => (
          <OptionRow
            key={g.id}
            id={`goal-${g.id}`}
            value={g.id}
            selected={answers.goal === g.id}
            label={g.label}
            body={g.body}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

function HealthSubQuestion({
  title,
  hint,
  field,
  value,
  setAnswers,
}: {
  title: string;
  hint: string;
  field: "sleep" | "stress" | "energy";
  value?: HealthScale;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <RadioGroup
        className="mt-3 grid grid-cols-3 gap-2"
        value={value ?? ""}
        onValueChange={(v) =>
          setAnswers((a) => ({ ...a, [field]: v as HealthScale }))
        }
      >
        {HEALTH_OPTIONS.map((o) => {
          const selected = value === o.id;
          return (
            <Label
              key={o.id}
              htmlFor={`${field}-${o.id}`}
              className={cn(
                "flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors",
                selected
                  ? "border-primary/60 bg-primary/5 text-foreground"
                  : "border-border/60 text-muted-foreground hover:text-foreground"
              )}
            >
              <RadioGroupItem
                id={`${field}-${o.id}`}
                value={o.id}
                className="size-3.5"
              />
              {o.label}
            </Label>
          );
        })}
      </RadioGroup>
    </div>
  );
}

function HealthQuestion({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        Three quick reads. Be honest — this is the part that picks up
        bottlenecks compounds can&apos;t fix.
      </p>
      <div className="mt-6 space-y-6">
        <HealthSubQuestion
          title="Sleep"
          hint="Average over the last 2 weeks"
          field="sleep"
          value={answers.sleep}
          setAnswers={setAnswers}
        />
        <HealthSubQuestion
          title="Stress"
          hint="Lower is better"
          field="stress"
          value={answers.stress}
          setAnswers={setAnswers}
        />
        <HealthSubQuestion
          title="Daily energy"
          hint="Sustained, not caffeine-driven"
          field="energy"
          value={answers.energy}
          setAnswers={setAnswers}
        />
      </div>
    </div>
  );
}

function ExperienceQuestion({
  answers,
  setAnswers,
}: {
  answers: Answers;
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        We tune what we surface to your starting point — not what looks
        impressive.
      </p>
      <RadioGroup
        className="mt-6 grid gap-3"
        value={answers.experience ?? ""}
        onValueChange={(v) =>
          setAnswers((a) => ({ ...a, experience: v as ExperienceId }))
        }
      >
        {EXPERIENCE.map((e) => (
          <OptionRow
            key={e.id}
            id={`exp-${e.id}`}
            value={e.id}
            selected={answers.experience === e.id}
            label={e.label}
            body={e.body}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

function Result({ answers }: { answers: Answers }) {
  const goalLabel =
    GOALS.find((g) => g.id === answers.goal)?.label ?? "Optimisation";
  const expLabel =
    EXPERIENCE.find((e) => e.id === answers.experience)?.label ?? "Beginner";

  return (
    <div>
      <div className="flex items-center gap-2 text-primary">
        <CheckCircle2 className="size-4" />
        <p className="text-sm font-medium uppercase tracking-wider">
          Preview result
        </p>
      </div>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
        Your starting point: {goalLabel.toLowerCase()} ·{" "}
        <span className="text-primary">{expLabel.toLowerCase()}</span>
      </h2>
      <p className="mt-3 text-muted-foreground">
        Based on your answers, the most useful first move is to fix the
        baseline before reaching for compounds. Sleep, stress, and energy do
        more for body composition, recovery, and cognition than any peptide
        on the market.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-card/40 p-5">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="size-4" />
            <p className="text-sm font-medium">Worth learning about</p>
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="text-foreground">BPC-157 — soft-tissue & gut</li>
            <li className="text-muted-foreground">
              TB-500 — tendon & ligament repair
            </li>
            <li className="text-muted-foreground">
              Ipamorelin — sleep-driven recovery
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/40 p-5">
          <p className="text-sm font-medium">Skip for now</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Anything that promises a single-shot fix for your goal. The
            assessment will get sharper as the full library opens up.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-dashed border-border/60 bg-card/30 p-5 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">
          This is a Phase 1 preview.
        </p>
        <p className="mt-1">
          The full library, weekly check-ins and comparison tools roll out in
          later phases.
        </p>
      </div>
    </div>
  );
}
