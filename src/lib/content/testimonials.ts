/**
 * Placeholder testimonials — replace with real client quotes before launch.
 * Content is intentionally generic and clearly labeled so the client
 * can supply real reviews.
 */
export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder testimonial — replace with a real client quote. A short two-to-three sentence review describing the couple's experience with planning and the wedding day itself.",
    author: "Couple Name",
    location: "Dubai, UAE",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial — replace with a real client quote. Highlight décor, coordination, and the feeling on the day.",
    author: "Couple Name",
    location: "Abu Dhabi, UAE",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial — replace with a real client quote. Include something specific: florals, food, entertainment, or venue.",
    author: "Couple Name",
    location: "Ras Al Khaimah, UAE",
    rating: 5,
    placeholder: true,
  },
];
