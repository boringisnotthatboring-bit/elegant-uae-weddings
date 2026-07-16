import { Link } from "@tanstack/react-router";

export interface FaqItem {
  q: string;
  a: React.ReactNode;
}

export const faqItems: FaqItem[] = [
  {
    q: "How much does a wedding in Dubai cost?",
    a: "Costs depend on venue, guests, season, décor, catering, entertainment, and production requirements.",
  },
  {
    q: "When is the best wedding season in Dubai?",
    a: "October to April is Dubai's best wedding season for comfortable outdoor celebrations.",
  },
  {
    q: "Are summer weddings in Dubai a good idea?",
    a: "Yes. Luxury hotels and indoor ballrooms offer elegant, climate-controlled summer wedding venues.",
  },
  {
    q: "Can tourists legally get married in the UAE?",
    a: "Yes. Eligible tourists can legally marry through Abu Dhabi's civil marriage service.",
  },
  {
    q: "What documents are required for a civil marriage in the UAE?",
    a: "Valid passports and supporting documents are required; requirements vary by nationality and status.",
  },
  {
    q: "How far in advance should we book a wedding planner in Dubai?",
    a: "Book 3–6 months ahead for peak season; intimate weddings may need less time.",
  },
  {
    q: "What wedding planning services does Awesome Events Weddings offer?",
    a: (
      <>
        We provide complete wedding planning, décor, production, entertainment, hospitality, logistics, coordination and much more. Check out our{" "}
        <Link to="/services" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
          Services Page
        </Link>{" "}
        for more details.
      </>
    ),
  },
  {
    q: "Do you plan Indian, Arabic, and multicultural weddings?",
    a: "Yes. We plan Indian, Arabic, multicultural, and multi-day weddings across the UAE.",
  },
  {
    q: "Can you create a custom luxury wedding theme?",
    a: "Yes. Every luxury wedding theme is customized around your story, style, and culture.",
  },
  {
    q: "Do you help with wedding venue selection in Dubai and the UAE?",
    a: "Yes. We source luxury wedding venues across Dubai and the UAE.",
  },
  {
    q: "Do you manage both the bride's and groom's families?",
    a: "Yes. We coordinate ceremonies, hospitality, schedules, and logistics for both families.",
  },
  {
    q: "Can you plan a wedding around our budget?",
    a: "Yes. We create realistic wedding plans aligned with your priorities and budget.",
  },
  {
    q: "Will someone manage everything on the wedding day?",
    a: "Yes. Our coordinators manage vendors, timelines, guests, production, and wedding-day operations, so you can have a stress-free wedding celebration.",
  },
  {
    q: "How do we start planning our wedding?",
    a: (
      <>
        <Link to="/contact" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
          Contact us
        </Link>
        , complete the 1 minute questionnaire, and schedule your free wedding planning consultation.
      </>
    ),
  },
];
