// Extended detail content for each dedicated wedding service page.
// Structure inspired by weddingplannerdubai.ae/beach-wedding-dubai/ but with
// our own copy, tone, and services. Keyed by the same slug as services.ts.

export interface WhyChooseItem {
  title: string;
  body: string;
}


export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  heroSubtitle: string;
  introHeading?: string;
  intro: string[];
  idealFor?: string[];
  whyChooseTitle: string;
  whyChoose: WhyChooseItem[];
  inclusionsTitle: string;
  inclusionsIntro: string;
  inclusions: string[];
  inclusionsOutro?: string;
  faqs: ServiceFaq[];
}

const commonWhyChoose = (kind: string, kindLower: string): WhyChooseItem[] => [
  {
    title: "Experienced Wedding Planning Team",
    body: `With years of experience curating luxury celebrations across the UAE, our specialists design and deliver ${kindLower} with precision, artistry, and total peace of mind for every couple.`,
  },
  {
    title: `Customised ${kind} Concepts`,
    body: `Every wedding is uniquely designed around your preferred theme, traditions, guest count, décor style, and personal vision — so your ${kindLower} feels unmistakably yours.`,
  },
  {
    title: `Handpicked ${kind} Venues`,
    body: `We help couples select the perfect venue for a ${kindLower}, from exclusive private locations to iconic UAE landmarks, ensuring the setting matches the mood you dreamed of.`,
  },
  {
    title: "Complete Wedding Management",
    body: "From venue booking and styling to logistics, entertainment, catering, and on-the-day coordination, our team manages every detail so you can be fully present with the people you love.",
  },
];

const commonFaqs = (kind: string, kindLower: string): ServiceFaq[] => [
  {
    q: `How much does a ${kindLower} in the UAE cost?`,
    a: `${kind} pricing depends on the venue, guest count, décor, catering, and entertainment. We build a customised plan around your budget and share transparent estimates once we understand your vision.`,
  },
  {
    q: "How far in advance should we book?",
    a: "We recommend reaching out at least 3–6 months in advance to secure preferred venues and vendors, though we regularly plan beautiful weddings on shorter timelines as well.",
  },
  {
    q: "Do you handle décor, styling, and vendors?",
    a: "Yes — from floral design and stage setups to lighting, entertainment, photography, and catering, our team coordinates every trusted vendor under one seamless plan.",
  },
  {
    q: "Can you plan for international guests?",
    a: "Absolutely. We assist with travel logistics, accommodation blocks, welcome experiences, and destination-style itineraries for guests flying in from around the world.",
  },
  {
    q: "Do you offer full-service planning as well as partial planning?",
    a: "Yes. Whether you need end-to-end planning, month-of coordination, or help with specific elements only, we tailor our involvement to what you need most.",
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "beach-wedding-dubai": {
    heroSubtitle: "White sands, sunset vows, endless Arabian Gulf.",
    introHeading: "Luxury Beach Weddings",
    intro: [
      'Say "I Do" by the Sea with a Celebration Designed Just for You.',
      "Celebrate your love with a breathtaking Luxury Beach Wedding planned by Awesome Events Weddings. As a trusted Wedding Planner Dubai and Wedding Organizer UAE, we create elegant beachfront celebrations across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE's most exclusive coastal venues. Whether you envision an intimate sunset ceremony or a grand Destination Wedding, our bespoke Wedding Planning Services ensure every detail is beautifully curated.",
      "Every celebration is thoughtfully designed to reflect your love story while creating unforgettable memories by the sea.",
    ],
    idealFor: [
      "Exclusive beach wedding venues and luxury beachfront resorts",
      "Dedicated Wedding Coordinator and end-to-end planning",
      "Elegant Wedding Decoration Dubai, floral styling, ceremony arches, and reception décor",
      "Luxury lighting, sound, staging, and beachfront seating",
      "Photography, videography, live entertainment, fireworks, and synchronized drone shows",
      "Guest accommodation, travel coordination, and personalised wedding experiences",
    ],
    whyChooseTitle: "Why Choose Us for a Beach Wedding in Dubai",
    whyChoose: commonWhyChoose("Beach Weddings", "luxury beach weddings"),
    inclusionsTitle: "Beach Wedding Decoration & Styling",
    inclusionsIntro: "Our beach wedding decoration services include:",
    inclusions: [
      "Floral arches and aisle décor",
      "Luxury wedding stage setups",
      "Elegant table styling and centrepieces",
      "Romantic lighting and candle design",
      "Beachfront reception styling",
      "Bespoke themes and colour concepts",
    ],
    inclusionsOutro:
      "We create elegant beachfront setups that turn your seaside vision into a fully realised celebration.",
    faqs: commonFaqs("Beach weddings", "beach wedding"),
  },

  "desert-wedding-dubai": {
    heroSubtitle: "Golden dunes, Arabian nights, cinematic sunsets.",
    intro: [
      "Say your vows against a horizon of golden dunes with a desert wedding in Dubai — an unforgettable celebration inspired by the timeless romance of Arabia. At Awesome Events Weddings, we craft private desert experiences ranging from intimate elopements under the stars to grand multi-day desert celebrations.",
      "From exclusive dune-top ceremonies and majlis-style receptions to traditional Zaffa entrances, live oud performances, and cinematic lighting, we design every moment to feel magical, personal, and effortlessly luxurious.",
    ],
    whyChooseTitle: "Why Choose Us for a Desert Wedding in Dubai",
    whyChoose: commonWhyChoose("Desert Weddings", "desert weddings"),
    inclusionsTitle: "Desert Wedding Styling & Experience",
    inclusionsIntro: "Our desert wedding styling includes:",
    inclusions: [
      "Dune-top ceremony setups and aisle design",
      "Bedouin-inspired majlis lounges",
      "Traditional Zaffa and Arabic entertainment",
      "Fire lanterns, torches, and warm lighting",
      "Long banquet tables and reception styling",
      "Cinematic photography and videography",
    ],
    faqs: commonFaqs("Desert weddings", "desert wedding"),
  },
  "intimate-elopements": {
    heroSubtitle: "Small guest lists, big feelings.",
    intro: [
      "For couples craving something quieter and deeply personal, our intimate elopements and micro weddings deliver a beautifully curated celebration for your closest people — or just the two of you. From cliffside vows to boutique venue dinners, every detail is designed with intention.",
      "We handle everything from officiants and legal paperwork to florals, photography, and a stunning dinner experience — so you can focus entirely on the moment you say I do.",
    ],
    whyChooseTitle: "Why Choose Us for an Intimate Wedding",
    whyChoose: commonWhyChoose("Intimate Weddings", "intimate weddings and elopements"),
    inclusionsTitle: "What's Included in an Intimate Celebration",
    inclusionsIntro: "Our intimate wedding services typically include:",
    inclusions: [
      "Ceremony styling and floral design",
      "Officiant coordination and paperwork guidance",
      "Photography and videography",
      "Curated dining experiences",
      "Bridal styling and beauty coordination",
      "Personal on-the-day coordination",
    ],
    faqs: commonFaqs("Intimate weddings", "intimate wedding"),
  },
  "civil-weddings-uae": {
    heroSubtitle: "Legally recognised ceremonies, beautifully hosted.",
    intro: [
      "Whether you're a UAE resident or travelling in for the occasion, we make your civil wedding in the UAE effortless and elegant. We guide you through the legal requirements while designing a ceremony and celebration that feels genuinely yours.",
      "Many couples pair their civil ceremony with an intimate reception, a beachfront dinner, or a full luxury celebration — and we're able to plan all of it seamlessly under one team.",
    ],
    whyChooseTitle: "Why Choose Us for a Civil Wedding in the UAE",
    whyChoose: commonWhyChoose("Civil Weddings", "civil ceremonies and celebrations"),
    inclusionsTitle: "Civil Wedding Services",
    inclusionsIntro: "We handle the details that matter, including:",
    inclusions: [
      "Guidance on UAE civil marriage requirements",
      "Court and notary appointment coordination",
      "Ceremony styling and floral design",
      "Photography and videography",
      "Reception planning and venue sourcing",
      "Full-service celebration after your ceremony",
    ],
    faqs: commonFaqs("Civil weddings", "civil wedding"),
  },
  "luxury-hotel-weddings": {
    heroSubtitle: "Five-star ballrooms and waterfront estates.",
    intro: [
      "For couples who dream of an unmistakably grand celebration, our luxury hotel weddings deliver the elegance of the UAE's most iconic five-star properties, styled to your vision. From glittering ballrooms to waterfront resorts, we design and manage every element end-to-end.",
      "Our team partners with the region's premier hotels and independent venues to secure the right setting, negotiate on your behalf, and deliver a truly seamless multi-day experience for you and your guests.",
    ],
    whyChooseTitle: "Why Choose Us for a Luxury Hotel Wedding",
    whyChoose: commonWhyChoose("Luxury Weddings", "luxury hotel weddings"),
    inclusionsTitle: "Luxury Wedding Planning Services",
    inclusionsIntro: "Our end-to-end luxury planning includes:",
    inclusions: [
      "Venue sourcing and contract negotiation",
      "Bespoke décor, floral, and stage design",
      "Live entertainment and celebrity performers",
      "Premium catering and menu curation",
      "Advanced AV, lighting, and production",
      "Multi-day guest experience coordination",
    ],
    faqs: commonFaqs("Luxury weddings", "luxury wedding"),
  },
  "south-asian-weddings": {
    heroSubtitle: "Mehndi, Sangeet, Pheras, Walima — planned with heart.",
    introHeading: "South Asian Weddings Dubai",
    intro: [
      "Celebrate vibrant South Asian weddings in Dubai with bespoke wedding planning services tailored to your traditions, customs, and celebrations. As an experienced wedding organizer UAE and dedicated wedding coordinator, we specialize in luxurious multi-day celebrations including Mehndi, Sangeet, Pheras, Walima, and grand receptions. From elegant wedding decoration Dubai to seamless event coordination, we create unforgettable weddings that beautifully reflect your heritage.",
    ],
    idealFor: [
      "North Indian Weddings",
      "Pakistani Weddings",
      "South Indian Weddings",
      "Tamil Weddings",
      "Sikh Weddings",
      "Gujarati Weddings",
      "Multicultural Weddings",
    ],
    whyChooseTitle: "Why Choose Us for a South Asian Wedding",
    whyChoose: commonWhyChoose("South Asian Weddings", "South Asian weddings"),
    inclusionsTitle: "South Asian Wedding Services",
    inclusionsIntro: "Our multi-event planning includes:",
    inclusions: [
      "Mehndi, Sangeet, Haldi, and Nikah setups",
      "Grand pheras and reception stage design",
      "Bride and groom entry concepts and choreography",
      "Traditional and fusion catering coordination",
      "Live dhol, DJs, and cultural entertainment",
      "Guest hospitality, RSVP, and logistics",
    ],
    faqs: commonFaqs("South Asian weddings", "South Asian wedding"),
  },
  "emirati-gcc-weddings": {
    heroSubtitle: "Zaffa, Majlis, and Gulf hospitality — done properly.",
    introHeading: "Emirati & GCC Weddings Dubai",
    intro: [
      "Experience elegant Emirati weddings in Dubai with luxury wedding planning services designed to honour local traditions and Gulf customs. Our expert wedding coordinator team delivers sophisticated celebrations featuring traditional Zaffa processions, elegant Majlis settings, exceptional hospitality, and bespoke wedding decoration Dubai. As a trusted wedding organizer in UAE, we ensure every ceremony is planned with precision and cultural authenticity.",
    ],
    idealFor: [
      "Emirati Weddings",
      "Arabic Weddings",
      "Saudi Weddings",
      "Kuwaiti Weddings",
      "Qatari Weddings",
      "Bahraini Weddings",
      "Omani Weddings",
      "GCC Family Weddings",
    ],
    whyChooseTitle: "Why Choose Us for an Emirati or GCC Wedding",
    whyChoose: commonWhyChoose("Emirati Weddings", "Emirati and GCC weddings"),
    inclusionsTitle: "Emirati Wedding Services",
    inclusionsIntro: "Our Emirati wedding planning covers:",
    inclusions: [
      "Traditional Zaffa processions",
      "Majlis-style seating and lounges",
      "Kosha and stage design",
      "Arabic and international catering coordination",
      "Traditional performers and live entertainment",
      "Complete family and guest hospitality",
    ],
    faqs: commonFaqs("Emirati weddings", "Emirati wedding"),
  },
  "western-weddings": {
    heroSubtitle: "Timeless, sophisticated, effortlessly elegant.",
    intro: [
      "For couples seeking a classic Western wedding in Dubai, we design refined celebrations rooted in timeless traditions — from the aisle walk to the first dance. Whether it's a garden ceremony, beachfront vow exchange, or ballroom reception, every detail is tailored to your story.",
      "Our team plans destination weddings for British, American, European, and Australian couples, along with UAE residents, ensuring every element reflects your style, vows, and vision.",
    ],
    whyChooseTitle: "Why Choose Us for a Western Wedding",
    whyChoose: commonWhyChoose("Western Weddings", "Western weddings"),
    inclusionsTitle: "Western Wedding Services",
    inclusionsIntro: "Our Western wedding planning includes:",
    inclusions: [
      "Ceremony aisle and arch design",
      "Reception venue styling",
      "Officiant and vow coordination",
      "Live band, DJ, and entertainment",
      "Full menu curation and tastings",
      "Bridal party and guest hospitality",
    ],
    faqs: commonFaqs("Western weddings", "Western wedding"),
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}
