

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  description: string;
  perfectFor?: string[];
  cta: string;
  image: string;
  featured?: boolean;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const flagshipServices: ServiceItem[] = [
  {
    slug: "beach-wedding-dubai",
    title: "Beach Wedding Dubai",
    short: "White sands, sunset vows, endless Arabian Gulf.",
    description:
      "If you've always dreamed of a Beach Wedding Dubai, we'll help you create a beautiful luxury wedding on the white sands of the Arabian Gulf, complete with sunset views, elegant styling, and unforgettable moments by the sea. It's the perfect choice for couples planning a destination wedding or a romantic outdoor wedding in the UAE.",
    perfectFor: [
      "Sunset beach ceremonies",
      "Destination weddings",
      "Outdoor weddings",
      "Luxury beachfront celebrations",
    ],
    cta: "Explore Beach Weddings",
    image: img("photo-1519741497674-611481863552"),
  },
  {
    slug: "desert-wedding-dubai",
    title: "Desert Wedding Dubai",
    short: "Golden dunes, Arabian nights, cinematic sunsets.",
    description:
      "Looking for something truly unique? A Desert Wedding Dubai offers breathtaking sand dunes, spectacular sunsets, and a magical outdoor wedding experience inspired by Arabian traditions. It's an unforgettable setting for couples planning a destination wedding filled with unforgettable moments.",
    perfectFor: [
      "Arabian-inspired weddings",
      "Destination weddings",
      "Outdoor weddings",
      "Private desert celebrations",
    ],
    cta: "Explore Desert Weddings",
    image: img("photo-1583939003579-730e3918a45a"),
  },
  {
    slug: "intimate-elopements",
    title: "Intimate Elopements & Micro Weddings",
    short: "Small guest lists, big feelings.",
    description:
      "Whether it's just the two of you or your closest loved ones, our Intimate Elopements & Micro Weddings create meaningful celebrations in beautiful locations across the UAE. A wonderful option for couples planning a romantic destination wedding or a private outdoor wedding.",
    perfectFor: [
      "Romantic elopements",
      "Small wedding celebrations",
      "Destination weddings",
      "Outdoor ceremonies",
    ],
    cta: "Explore Intimate Weddings",
    image: img("photo-1465495976277-4387d4b0b4c6"),
  },
  {
    slug: "civil-weddings-uae",
    title: "Civil Weddings UAE",
    short: "Legally recognised ceremonies, beautifully hosted.",
    description:
      "Whether you're a resident or travelling to the UAE, we'll help make your Civil Weddings UAE journey simple and memorable. Many couples choose to celebrate their legal ceremony with a luxury wedding, an intimate reception, or a destination wedding experience afterwards.",
    perfectFor: [
      "UAE residents",
      "International couples",
      "Legally recognised civil marriages",
      "Celebration planning after your ceremony",
    ],
    cta: "Explore Civil Weddings",
    image: img("photo-1522673607200-164d1b6ce486"),
  },
  {
    slug: "luxury-hotel-weddings",
    title: "Luxury Hotel Weddings",
    short: "Five-star ballrooms & waterfront estates.",
    description:
      "If you're dreaming of a sophisticated luxury wedding, we'll help you find the perfect hotel setting, from elegant ballrooms to spectacular waterfront venues across Dubai, Abu Dhabi, and Ras Al Khaimah. Ideal for grand celebrations and unforgettable destination weddings.",
    perfectFor: [
      "Luxury weddings",
      "Grand ballroom celebrations",
      "Destination weddings",
      "Multi-day wedding celebrations",
    ],
    cta: "Explore Luxury Hotel Weddings",
    image: img("photo-1519671482749-fd09be7ccebf"),
  },
];

export const culturalServices: ServiceItem[] = [
  {
    slug: "south-asian-weddings",
    title: "South Asian Weddings Dubai",
    short: "Mehndi, Sangeet, Pheras, Walima — planned with heart.",
    description:
      "Celebrate vibrant South Asian weddings in Dubai with bespoke wedding planning services tailored to your traditions, customs, and celebrations. As an experienced wedding organizer UAE and dedicated wedding coordinator, we specialize in luxurious multi-day celebrations including Mehndi, Sangeet, Pheras, Walima, and grand receptions. From elegant wedding decoration Dubai to seamless event coordination, we create unforgettable weddings that beautifully reflect your heritage.",
    perfectFor: [
      "Indian, Pakistani, Malayali, Tamil weddings",
      "Punjabi, Gujarati, Sri Lankan weddings",
      "Bangladeshi, Nepali, Telugu & Kannada weddings",
    ],
    cta: "Plan a South Asian Wedding",
    image: img("photo-1600717535275-0b18ede2f7fc"),
  },
  {
    slug: "emirati-gcc-weddings",
    title: "Emirati & GCC Weddings Dubai",
    short: "Zaffa, Majlis, and Gulf hospitality — done properly.",
    description:
      "Experience elegant Emirati weddings in Dubai with luxury wedding planning services designed to honour local traditions and Gulf customs. Our expert wedding coordinator team delivers sophisticated celebrations featuring traditional Zaffa processions, elegant Majlis settings, exceptional hospitality, and bespoke wedding decoration Dubai. As a trusted wedding organizer UAE, we ensure every ceremony is planned with precision and cultural authenticity.",
    perfectFor: [
      "Emirati & Arabic weddings",
      "Saudi, Kuwaiti, Qatari weddings",
      "Bahraini, Omani, GCC family weddings",
    ],
    cta: "Plan an Emirati Wedding",
    image: img("photo-1519741347686-c1e0aadf4611"),
  },
  {
    slug: "western-weddings",
    title: "Western Weddings Dubai",
    short: "Timeless, sophisticated, effortlessly elegant.",
    description:
      "Plan your dream Western wedding in Dubai with bespoke wedding planning services tailored to your vision. Whether you're celebrating an elegant destination wedding, luxury hotel reception, beachfront ceremony, or intimate civil wedding, our experienced wedding coordinator team ensures every detail is flawlessly executed. From premium wedding decoration Dubai to complete event management, Awesome Events Weddings is a leading wedding organizer UAE for couples seeking timeless and sophisticated celebrations.",
    perfectFor: [
      "British, American, Canadian weddings",
      "Australian, European, Irish weddings",
      "Civil, destination & multicultural weddings",
    ],
    cta: "Plan a Western Wedding",
    image: img("photo-1511795409834-ef04bbd61622"),
  },
];

export interface CustomOffering {
  title: string;
  description: string;
  featured?: boolean;
}

export const customOfferings: CustomOffering[] = [
  {
    title: "End-to-End Wedding Planning",
    description:
      "From the first consultation to the final farewell, we manage every detail of your wedding, ensuring a seamless, stress-free, and beautifully executed celebration.",
  },
  {
    title: "Entertainment Experiences",
    description:
      "We curate DJs, live performers, artists, celebrities, traditional acts, and memorable bride and groom entry concepts with music, lighting, choreography, and special effects.",
  },
  {
    title: "Venue, Décor & Styling",
    description:
      "We help source the perfect venue and transform it with elegant décor, floral styling, stage design, table settings, and theme-based concepts tailored to your vision.",
  },
  {
    title: "Milestone Celebrations",
    description:
      "Celebrate life's special milestones with customized experiences designed for lasting memories in the UAE.",
  },
  {
    title: "Luxury Private Parties",
    description:
      "From renting out luxury yachts or private islands, exclusive poolside celebrations, desert soirées, contemporary galleries, to private jets — we transform extraordinary venues into unforgettable celebrations tailored to your style.",
  },
  {
    title: "Audio-Visual & Lighting Solutions",
    description:
      "Advanced audio-visual systems, intelligent lighting, LED screens, and sound engineering for immersive wedding experiences.",
  },
  {
    title: "Drone Light Shows & Fireworks",
    description:
      "Create an unforgettable grand entrance or finale with breathtaking aerial spectacles and synchronized moments that leave every guest amazed.",
  },
  {
    title: "Makeup & Henna Artists",
    description:
      "Our trusted beauty professionals ensure every member of your celebration feels confident, camera-ready, and beautifully prepared for the big day — bride, friends and family.",
  },
  {
    title: "AI Technology",
    description:
      "Elevate your wedding with e-invitations, QR guest experiences, AI photo booths, robots, live streaming, language translators, and virtual access for family and friends.",
  },
  {
    title: "Guest Hospitality & RSVP",
    description:
      "From invitations and RSVP tracking to welcome services, seating plans, guest assistance, and family coordination, we ensure every guest feels cared for.",
  },
  {
    title: "Wedding Catering & Production",
    description:
      "We coordinate catering, menu planning, lighting, sound, LED screens, photography, videography, and technical setup to deliver a complete wedding experience.",
    featured: true,
  },
];

export const specialties = [
  "Luxury Weddings",
  "Beach Weddings",
  "Desert Weddings",
  "Indian Weddings",
  "Arabic Weddings",
  "Civil Weddings",
];

export const allServices: ServiceItem[] = [...flagshipServices, ...culturalServices];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((s) => s.slug === slug);
}
