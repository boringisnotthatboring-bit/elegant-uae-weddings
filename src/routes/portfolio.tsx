import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "The Awesome Events Weddings portfolio page is currently being updated.",
      },
      {
        name: "robots",
        content: "noindex",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="min-h-[60vh]" />
  );
}