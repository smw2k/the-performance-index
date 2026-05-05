import { Container, Eyebrow, Section } from "@/components/section";
import { QuizFlow } from "@/components/quiz-flow";

export const metadata = {
  title: "Find your optimisation bottleneck — The Performance Index",
  description:
    "A 60-second assessment to point you toward the right starting point. Education only — not medical advice.",
};

export default function QuizPage() {
  return (
    <Section className="pt-16 sm:pt-20" bleed>
      <Container className="max-w-3xl">
        <div className="text-center">
          <Eyebrow>The assessment</Eyebrow>
          <h1 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Find your optimisation bottleneck.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">
            A short, honest assessment. No email gate. No medical claims. We use
            your answers to surface 2–3 compounds worth learning about — and the
            ones to skip.
          </p>
        </div>

        <div className="mt-12">
          <QuizFlow />
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          For educational purposes only. This is not medical advice. Consult a
          healthcare professional before making any changes.
        </p>
      </Container>
    </Section>
  );
}
