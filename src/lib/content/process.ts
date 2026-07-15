export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Vision",
    description:
      "Understanding your story, preferences, guest experience goals, and the overall wedding vision.",
  },
  {
    number: "02",
    title: "Concept & Planning",
    description:
      "Creating the theme, styling direction, timeline, budget, vendor selection, and detailed planning roadmap.",
  },
  {
    number: "03",
    title: "Production & Execution",
    description:
      "Bringing every element to life through décor, entertainment, hospitality, logistics, and on-ground coordination.",
  },
  {
    number: "04",
    title: "Celebration & Experience",
    description:
      "Managing every detail on the day to ensure a flawless celebration and unforgettable memories.",
  },
];

export const processIntro =
  "From the first conversation to the final celebration, we bring your wedding vision to life through a thoughtfully curated journey where every element is carefully considered, coordinated, and crafted to create a celebration that feels truly yours.";
