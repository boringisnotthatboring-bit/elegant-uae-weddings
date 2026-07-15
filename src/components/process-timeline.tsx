import type { ProcessStep } from "@/lib/content/process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li
          key={step.number}
          className="relative rounded-sm border border-border bg-card p-8"
        >
          <span className="font-display text-6xl text-accent">
            {step.number}
          </span>
          <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
