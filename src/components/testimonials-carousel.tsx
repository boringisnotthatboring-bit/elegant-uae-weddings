import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t, i) => (
            <figure
              key={i}
              className="w-full shrink-0 px-2"
            >
              <div className="rounded-sm border border-border bg-card p-8 md:p-12">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium text-foreground">{t.author}</span>
                  <span className="text-muted-foreground"> — {t.location}</span>
                  {t.placeholder && (
                    <span className="ml-2 rounded-full border border-dashed border-accent px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-accent">
                      Placeholder
                    </span>
                  )}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={prev}
          className="rounded-full border border-border p-2 hover:border-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === index ? "w-8 bg-primary" : "w-1.5 bg-border")
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={next}
          className="rounded-full border border-border p-2 hover:border-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
