import type { ProcessStep } from "@/lib/content/process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      {/* Desktop horizontal connector */}
      <div className="absolute top-5 left-[12.5%] right-[12.5%] hidden h-px bg-border md:block" />
      {/* Mobile vertical connector */}
      <div className="absolute left-5 top-5 bottom-5 hidden w-px bg-border max-md:block" />

      <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className="relative flex flex-row items-start gap-6 md:flex-col md:items-center md:text-center"
          >
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-medium text-foreground">
              {step.number}
            </span>
            <div className="flex-1 pt-0.5 md:pt-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Step {index + 1}
              </p>
              <h3 className="mt-1 font-display text-xl md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
