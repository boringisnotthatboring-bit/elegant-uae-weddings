export interface NavLink {
  label: string;
  to: string;
}

export const primaryNav: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Wedding Services", to: "/services" },
  { label: "Wedding Venues", to: "/venues" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Work Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export const footerExplore: NavLink[] = [
  { label: "Wedding Guide", to: "/wedding-guide" },
  { label: "FAQs", to: "/#faq" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Contact", to: "/contact" },
];

export const socialLinks = {
  linkedin: "https://ae.linkedin.com/in/ronika-jinadra-b968231a",
  instagram: "https://www.instagram.com/",
};

export const company = {
  name: "Awesome Events Weddings",
  tagline: "Dubai's Leading Luxury Wedding Planner",
  phone: "+971 4 000 0000",
  email: "hello@awesomeeventsweddings.ae",
  address: "Dubai, United Arab Emirates",
  yearsExperience: 12,
};
