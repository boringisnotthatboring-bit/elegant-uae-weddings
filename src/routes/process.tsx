import { createFileRoute, Link } from "@tanstack/react-router";
import { ProcessTimeline } from "@/components/process-timeline";
import { Button } from "@/components/ui/button";
import {
  processSteps,
  processIntro,
  processSubheading,
} from "@/lib/content/process";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Wedding Planning Process | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "From discovery to celebration — the four-step wedding planning journey used by Awesome Events Weddings across Dubai and the UAE.",
      },
      { property: "og:title", content: "Our Wedding Planning Process" },
      {
        property: "og:description",
        content: "How we plan luxury weddings across Dubai and the UAE.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Work Process</p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-wide md:text-6xl">
            Work Process
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {processSubheading}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {processIntro}
          </p>
        </div>

        <div className="mt-16 md:mt-24">
          <ProcessTimeline steps={processSteps} />
        </div>

        <div className="mt-16 text-center md:mt-24">
          <Button asChild size="lg">
            <Link to="/contact">Start with a free consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
