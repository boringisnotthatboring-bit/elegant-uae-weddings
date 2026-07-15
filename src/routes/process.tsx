import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { ProcessTimeline } from "@/components/process-timeline";
import { Button } from "@/components/ui/button";
import { processSteps, processIntro } from "@/lib/content/process";

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
      { property: "og:description", content: "How we plan luxury weddings across Dubai and the UAE." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/">Home</Link> <span className="mx-2">/</span> Work Process
          </nav>
          <SectionHeader
            eyebrow="Work Process"
            title="How we plan your celebration"
            body={processIntro}
          />
        </div>
      </section>
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <ProcessTimeline steps={processSteps} />
          <div className="mt-14 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Start with a free consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
