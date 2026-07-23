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
      "No two love stories are the same, and neither are our weddings. Our bespoke wedding planning services are tailored to your style, traditions, and vision, creating unforgettable luxury weddings in Dubai & UAE that feel uniquely yours.",
    ],
    idealFor: [
      "Couples dreaming of a romantic Luxury Beach Wedding with breathtaking sea views and unforgettable sunset ceremonies.",
      "Destination couples looking to celebrate their wedding in Dubai, Abu Dhabi, Ras Al Khaimah, or anywhere across the UAE.",
      "Those who love elegant beachfront celebrations with personalised Wedding Decoration Dubai and luxury styling.",
      "Couples planning an intimate gathering or a grand seaside celebration with family and friends.",
      "Brides and grooms looking for complete Wedding Planning Services and a dedicated Wedding Coordinator from start to finish.",
      "Anyone wanting a relaxed yet sophisticated wedding experience surrounded by the beauty of the Arabian Gulf.",
    ],
    whyChooseTitle: "What Sets Our Luxury Beach Weddings Apart",
    whyChoose: [
      {
        title: "Bespoke Beach Wedding Experiences",
        body: "Every beach wedding is uniquely designed around your vision, traditions, and personal style. Whether you dream of a romantic sunset ceremony or a grand beachfront celebration, we create bespoke experiences that reflect your story.",
      },
      {
        title: "Exclusive Beachfront Venues",
        body: "We partner with some of the UAE's most sought-after beach wedding venues, luxury resorts, and private coastal locations, helping you find the perfect setting for an elegant seaside celebration.",
      },
      {
        title: "Seamless Beach Wedding Planning",
        body: "Our dedicated Wedding Coordinator team manages every detail, from venue styling and Wedding Decoration Dubai to guest logistics, entertainment, timelines, and beachfront ceremony coordination, allowing you to enjoy a stress-free wedding day.",
      },
      {
        title: "Luxury Touches That Create Lasting Memories",
        body: "From elegant floral styling and bespoke ceremony setups to spectacular fireworks, synchronized drone shows, and exceptional guest experiences, we create Luxury Beach Weddings that are unforgettable for you and everyone celebrating by your side.",
      },
    ],
    faqs: [
      {
        q: "Which are the best beaches in Dubai for a luxury wedding?",
        a: "We help couples choose from Dubai's most exclusive beach wedding venues, including private beachfront resorts and luxury hotels that offer stunning sea views and exceptional hospitality.",
      },
      {
        q: "Can a beach wedding be customised to our culture and traditions?",
        a: "Absolutely. Whether you're planning a Western ceremony, South Asian celebration, Emirati wedding, or a multicultural event, Awesome Events Weddings creates personalised beach weddings that honour your traditions.",
      },
      {
        q: "What happens if the weather changes on our wedding day?",
        a: "Our experienced team always prepares a backup plan, including indoor or covered venue options where available, ensuring your Luxury Beach Wedding runs smoothly regardless of the weather.",
      },
      {
        q: "Are Palm Jumeirah weddings suitable for destination couples?",
        a: "Absolutely. Palm Jumeirah is one of the most popular locations for destination weddings in Dubai, offering luxury accommodation, world-class hospitality, and stunning beachfront settings for both ceremonies and receptions.",
      },
      {
        q: "Can you arrange a private beachfront wedding reception?",
        a: "Yes. We can organise exclusive beachfront receptions with bespoke décor, gourmet catering, live entertainment, and luxury seating for an unforgettable celebration by the sea.",
      },
      {
        q: "Do you decorate the ceremony and reception areas?",
        a: "Yes. Our team provides bespoke Wedding Decoration Dubai, including floral arches, aisle styling, elegant reception décor, ambient lighting, and customised beach-inspired designs.",
      },
      {
        q: "Can you help with guest accommodation and transportation?",
        a: "Yes. For Destination Weddings, we assist with hotel bookings, airport transfers, guest transportation, and logistics to ensure a seamless experience for everyone attending.",
      },
      {
        q: "Can we include fireworks or a drone show at our beach wedding?",
        a: "Yes. Subject to venue approvals and local regulations, we can arrange spectacular fireworks, synchronized drone shows, and other luxury entertainment to make your celebration truly unforgettable.",
      },
    ],
  },

  "desert-wedding-dubai": {
    heroSubtitle: "Golden dunes, Arabian nights, cinematic sunsets.",
    introHeading: "Desert Weddings",
    intro: [
      "Plan an Unforgettable Desert Wedding in Dubai",
      "Celebrate your love amidst the golden dunes with a breathtaking Desert Wedding in Dubai. At Awesome Events Weddings, we create extraordinary desert celebrations that combine Arabian charm, luxury, and unforgettable experiences. Whether you envision an intimate sunset ceremony, a romantic candlelit reception beneath the stars, or a lavish multi-day celebration, our experienced Wedding Planner Dubai team brings your dream wedding to life with creativity and flawless execution.",
      "From exclusive desert wedding venues and bespoke Wedding Decoration Dubai to gourmet catering, live entertainment, photography, luxury seating, traditional Majlis setups, fireworks, synchronized drone shows, and complete Wedding Planning Services, we take care of every detail. Whether you're planning a Destination Wedding or a private celebration in the UAE, we create personalised Desert Weddings that reflect your style, traditions, and vision, ensuring an unforgettable experience for you and your guests.",
    ],
    whyChooseTitle: "Complete Desert Wedding Planning Services in the UAE",
    whyChoose: [
      {
        title: "Experienced Desert Wedding Planners",
        body: "With over 12 years of experience, we create luxury desert weddings across Dubai and the UAE, combining creative design, cultural understanding, and seamless execution.",
      },
      {
        title: "Bespoke Desert Wedding Concepts",
        body: "Every celebration is personalized around your story, traditions, style, and guest experience, creating unforgettable weddings inspired by the beauty of the Arabian desert.",
      },
      {
        title: "Exclusive Desert Wedding Venues",
        body: "We help couples discover exceptional desert wedding venues in Dubai and the UAE, including luxury resorts, private camps, dune settings, and outdoor ceremony locations.",
      },
      {
        title: "Complete Desert Wedding Planning",
        body: "We manage end-to-end planning, including décor, catering, entertainment, transportation, permits, logistics, technical production, guest hospitality, timelines, and on-site coordination.",
      },
    ],
    faqs: [
      {
        q: "What makes a desert wedding in Dubai unique?",
        a: "A desert wedding in Dubai offers breathtaking dunes, sunset views, Arabian-inspired hospitality, and a private setting for an unforgettable luxury celebration.",
      },
      {
        q: "How do guests reach a desert wedding venue?",
        a: "We plan clear arrival routes, designated parking, luxury transfers, and coordinated desert access for guests, vendors, and wedding suppliers.",
      },
      {
        q: "How do you keep guests comfortable during a desert wedding?",
        a: "We provide shaded areas, cooling solutions, elegant lounges, refreshments, suitable flooring, and carefully planned ceremony timings for maximum comfort.",
      },
      {
        q: "What is the best time of day for a desert wedding ceremony?",
        a: "Sunset is ideal for a luxury desert wedding, offering cooler temperatures, golden lighting, and beautiful wedding photography.",
      },
      {
        q: "Can you install proper flooring and seating on the sand?",
        a: "Yes. We create stable flooring, raised platforms, elegant aisles, stages, dining areas, and comfortable seating suitable for desert terrain.",
      },
      {
        q: "Can a desert wedding include an Arabian-inspired experience?",
        a: "Yes. We can incorporate traditional welcomes, Arabic entertainment, majlis seating, lantern décor, regional cuisine, and cultural hospitality experiences.",
      },
      {
        q: "How is food and catering managed at a desert wedding?",
        a: "We coordinate approved caterers, mobile kitchens, service areas, power requirements, food safety, dining setups, and professional hospitality teams.",
      },
      {
        q: "Do desert weddings require special permits and approvals?",
        a: "Yes. Requirements depend on the location and activities. We manage venue permissions, supplier access, production approvals, and event logistics.",
      },
    ],
  },

  "intimate-elopements": {
    heroSubtitle: "Small guest lists, big feelings.",
    introHeading: "Intimate Elopements & Micro Weddings",
    intro: [
      "For couples craving something quieter and deeply personal, our intimate elopements and micro weddings create a beautifully curated celebration for your closest people — or just the two of you.",
      "We manage officiants, styling, florals, photography, dining, and on-the-day coordination so you can focus entirely on the moment.",
    ],
    whyChooseTitle: "Why Choose Us for an Intimate Wedding",
    whyChoose: commonWhyChoose("Intimate Weddings", "intimate weddings and elopements"),
    faqs: [
      {
        q: "What is the difference between an elopement and a micro wedding?",
        a: "An elopement in Dubai usually involves only the couple, while a micro wedding includes close loved ones.",
      },
      {
        q: "How many guests are suitable for a micro wedding?",
        a: "Most micro weddings in Dubai welcome between 10 and 50 guests, creating a personal atmosphere.",
      },
      {
        q: "Can a small wedding still feel luxurious and grand?",
        a: "Absolutely. Premium décor, curated dining, entertainment, and personalised details make intimate celebrations feel beautifully elevated.",
      },
      {
        q: "What venues are suitable for intimate weddings in the UAE?",
        a: "Private villas, boutique resorts, gardens, yachts, terraces, and secluded settings are ideal for intimate weddings in the UAE.",
      },
      {
        q: "Can we personalise every detail of our micro wedding?",
        a: "Yes. We customise the ceremony, styling, menu, music, stationery, entertainment, and guest experience around your story.",
      },
      {
        q: "How quickly can an intimate elopement be planned?",
        a: "Depending on availability, an intimate elopement in Dubai can often be arranged within a few weeks.",
      },
      {
        q: "Can distant family and friends join our intimate wedding virtually?",
        a: "Yes. We can arrange professional live streaming, digital guest messages, and virtual participation for loved ones worldwide.",
      },
      {
        q: "Do you provide complete micro wedding planning and coordination?",
        a: "Yes. We manage venue sourcing, décor, catering, suppliers, photography, timelines, and complete wedding-day coordination.",
      },
    ],
  },

  "civil-weddings-uae": {
    heroSubtitle: "Legally recognised ceremonies, beautifully hosted.",
    introHeading: "Civil Weddings",
    intro: [
      "Whether you're a UAE resident or travelling in for the occasion, we make your civil wedding journey effortless and elegant.",
      "We guide you through the legal requirements while designing a ceremony and celebration that feels genuinely yours.",
    ],
    whyChooseTitle: "Why Choose Us for a Civil Wedding in the UAE",
    whyChoose: commonWhyChoose("Civil Weddings", "civil ceremonies and celebrations"),
    faqs: commonFaqs("Civil weddings", "civil wedding"),
  },

  "luxury-hotel-weddings": {
    heroSubtitle: "Five-star ballrooms and waterfront estates.",
    introHeading: "Luxury Hotel Weddings",
    intro: [
      "For couples who dream of a grand celebration, our luxury hotel weddings bring together the UAE's most iconic five-star properties and a design tailored to your vision.",
      "From glittering ballrooms to waterfront resorts, we plan and manage every detail from venue sourcing to the final guest farewell.",
    ],
    whyChooseTitle: "Why Choose Us for a Luxury Hotel Wedding",
    whyChoose: commonWhyChoose("Luxury Hotel Weddings", "luxury hotel weddings"),
    faqs: [
      {
        q: "How do we choose the right luxury hotel wedding venue in Dubai?",
        a: "We consider your guest count, wedding style, ballroom capacity, location, hospitality standards, and celebration requirements.",
      },
      {
        q: "What is included in a luxury hotel wedding package?",
        a: "Packages may include the ballroom, catering, tables, seating, service staff, bridal suites, and selected amenities.",
      },
      {
        q: "Can we host all our wedding functions at one hotel?",
        a: "Yes. Many luxury hotels in Dubai offer multiple spaces for ceremonies, receptions, and pre-wedding celebrations.",
      },
      {
        q: "Can you transform a hotel ballroom to match our wedding vision?",
        a: "Absolutely. We personalise the ballroom with bespoke décor, floral installations, lighting, staging, and thoughtful styling.",
      },
      {
        q: "Can we customise the hotel wedding menu?",
        a: "Yes. We coordinate menu tastings and personalised dining experiences with the hotel's culinary and banquet teams.",
      },
      {
        q: "Do hotels allow external wedding vendors?",
        a: "Policies vary. We coordinate with the hotel regarding external decorators, entertainers, photographers, production teams, and applicable charges.",
      },
      {
        q: "Can you manage several wedding events across different hotel spaces?",
        a: "Yes. We coordinate every function, venue transition, supplier schedule, and guest movement for a seamless celebration.",
      },
      {
        q: "How do you manage a luxury hotel wedding on the day?",
        a: "Our Dubai wedding coordinators oversee timelines, hotel teams, vendors, production, ceremonies, reception details, logistics each and every step of the way.",
      },
    ],
  },

  "yacht-marina-weddings": {
    heroSubtitle: "Private yachts, marina views, and celebrations on the water.",
    introHeading: "Yacht & Marina Weddings",
    intro: [
      "Celebrate your wedding on the water with a private yacht or marina setting framed by Dubai's skyline and waterfront views.",
      "We coordinate the vessel, marina access, décor, dining, entertainment, guest boarding, safety requirements, and every detail of the celebration.",
    ],
    whyChooseTitle: "Why Choose Us for a Yacht or Marina Wedding",
    whyChoose: commonWhyChoose("Yacht & Marina Weddings", "yacht and marina weddings"),
    faqs: [
      {
        q: "How many guests can attend a yacht wedding in Dubai?",
        a: "Guest capacity depends on the yacht’s size, layout, dining setup, and onboard safety regulations.",
      },
      {
        q: "Can the yacht sail during our wedding celebration?",
        a: "Yes. Your luxury yacht wedding in Dubai can cruise along a pre-approved scenic route.",
      },
      {
        q: "Which views can we enjoy during a Dubai yacht wedding?",
        a: "Routes may feature Dubai Marina, Palm Jumeirah, Atlantis, Bluewaters Island, and Burj Al Arab views.",
      },
      {
        q: "Can we have both the ceremony and reception onboard?",
        a: "Absolutely. We create separate onboard spaces for your ceremony, dining, entertainment, and relaxed celebrations.",
      },
      {
        q: "What happens if the sea conditions are unsuitable?",
        a: "We prepare flexible sailing schedules, sheltered marina options, and alternative plans with the yacht operator.",
      },
      {
        q: "Can a yacht be decorated without affecting its interiors?",
        a: "Yes. We use secure, yacht-friendly décor designed specifically for decks, cabins, and marina settings.",
      },
      {
        q: "Can you arrange live entertainment onboard the yacht?",
        a: "Yes. We coordinate DJs, musicians, performers, and sound systems suitable for yacht weddings in Dubai.",
      },
      {
        q: "How are food and beverages served during a yacht wedding?",
        a: "We arrange onboard wedding catering, customised menus, professional service teams, and elegant dining setups.",
      },
    ],
  },

  "garden-weddings": {
    heroSubtitle: "Lush greenery, floral styling, and elegant open-air celebrations.",
    introHeading: "Garden Weddings",
    intro: [
      "Create a romantic garden wedding surrounded by greenery, natural light, and elegant floral design.",
      "From intimate ceremonies to full outdoor receptions, we build a cohesive setting with comfortable guest layouts, lighting, dining, entertainment, and weather planning.",
    ],
    whyChooseTitle: "Why Choose Us for a Garden Wedding",
    whyChoose: commonWhyChoose("Garden Weddings", "garden weddings"),
    faqs: [
      {
        q: "What should we consider when choosing a garden wedding venue?",
        a: "Consider privacy, landscape quality, capacity, accessibility, facilities, lighting options, and permitted celebration timings.",
      },
      {
        q: "Can existing gardens be incorporated into the wedding design?",
        a: "Yes. We enhance natural greenery with florals, pathways, installations, lighting, and complementary décor.",
      },
      {
        q: "Which footwear is best for a garden wedding?",
        a: "Comfortable shoes, wedges, or heel protectors help guests move easily across lawns and pathways.",
      },
      {
        q: "How do you create privacy at an outdoor garden venue?",
        a: "We use greenery walls, elegant screens, draping, floral partitions, and carefully planned layouts.",
      },
      {
        q: "Can we hold both the ceremony and reception in the garden?",
        a: "Yes. We create distinct ceremony, dining, entertainment, and lounge areas within the garden setting.",
      },
      {
        q: "How do you light a garden wedding after sunset?",
        a: "We combine illuminated trees, chandeliers, festoon lights, candles, lanterns, and discreet pathway lighting.",
      },
      {
        q: "Can seasonal flowers be used for garden wedding décor?",
        a: "Absolutely. Seasonal blooms create fresher, more natural, and beautifully coordinated garden wedding decoration.",
      },
      {
        q: "How do you manage insects during a garden wedding?",
        a: "We coordinate discreet pest control, citronella décor, air movement, and venue-approved preventive measures.",
      },
    ],
  },

  "outdoor-weddings": {
    heroSubtitle: "Open-air ceremonies designed around your location and vision.",
    introHeading: "Outdoor Weddings",
    intro: [
      "Plan a bespoke outdoor wedding in the UAE with a setting chosen around your style, guest count, and preferred atmosphere.",
      "We handle layouts, flooring, shade, cooling, lighting, power, permits, catering, entertainment, and backup plans so the event runs smoothly.",
    ],
    whyChooseTitle: "Why Choose Us for an Outdoor Wedding",
    whyChoose: commonWhyChoose("Outdoor Weddings", "outdoor weddings"),
    faqs: [
      {
        q: "Which locations are suitable for outdoor weddings in Dubai?",
        a: "Beaches, deserts, terraces, courtyards, private estates, resort lawns, and waterfront venues offer beautiful open-air settings.",
      },
      {
        q: "How do you design the layout for an outdoor wedding?",
        a: "We create dedicated ceremony, dining, entertainment, lounge, and photography zones with comfortable guest flow.",
      },
      {
        q: "Can temporary structures be installed at an outdoor wedding venue?",
        a: "Yes. We can arrange pergolas, canopies, stages, raised platforms, marquees, and decorative overhead installations.",
      },
      {
        q: "How are lighting and power managed for outdoor weddings?",
        a: "We coordinate generators, safe cabling, backup power, ambient lighting, stage lighting, and illuminated pathways.",
      },
      {
        q: "How do you manage sound at an open-air wedding?",
        a: "Our production team plans speaker placement and sound levels for clear coverage without disturbing nearby areas.",
      },
      {
        q: "Can outdoor wedding spaces be made accessible for every guest?",
        a: "Yes. We plan stable walkways, ramps, suitable flooring, accessible seating, and convenient drop-off points.",
      },
      {
        q: "How do you keep an outdoor celebration comfortable from day to night?",
        a: "We arrange shade, cooling, heaters, refreshments, soft lighting, and comfortable lounges according to the season.",
      },
      {
        q: "Can the ceremony and reception have different outdoor designs?",
        a: "Absolutely. We create distinctive yet connected settings for each part of your outdoor wedding in Dubai.",
      },
    ],
  },

  "emirati-gcc-weddings": {
    heroSubtitle: "Luxury Gulf traditions, elegant celebrations, and exceptional hospitality.",
    introHeading: "Emirati & GCC Weddings Dubai",
    intro: [
      "Experience elegant Emirati weddings in Dubai with luxury wedding planning services designed to honour local traditions and Gulf customs.",
      "Our expert wedding coordinator team delivers sophisticated celebrations featuring traditional Zaffa processions, elegant Majlis settings, exceptional hospitality, and bespoke wedding decoration Dubai. As a trusted wedding organizer in UAE, we ensure every ceremony is planned with precision and cultural authenticity.",
      "From intimate family gatherings to grand multi-day celebrations, every detail is thoughtfully coordinated to reflect your heritage, family traditions, and personal vision.",
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
    whyChooseTitle: "Why Choose Us for Emirati & GCC Weddings in Dubai",
    whyChoose: [
      {
        title: "Experienced Emirati & GCC Wedding Planners",
        body: "Our team understands the scale, privacy, hospitality, and cultural details required for Emirati, Arabic, and GCC family weddings across Dubai and the UAE.",
      },
      {
        title: "Culturally Authentic Wedding Experiences",
        body: "We thoughtfully coordinate traditional customs, family requirements, Zaffa processions, Majlis settings, Arabic entertainment, and meaningful ceremonial details with care and respect.",
      },
      {
        title: "Luxury Majlis, Stage & Wedding Decoration",
        body: "From elegant Majlis lounges and grand stages to floral installations, lighting, entrances, and bespoke wedding decoration Dubai, every space is designed around your preferred style.",
      },
      {
        title: "Complete Privacy & Guest Management",
        body: "We coordinate separate celebration areas, controlled access, guest reception, hospitality teams, family requirements, supplier schedules, and discreet on-the-day management.",
      },
    ],
    faqs: [
      {
        q: "Do you organise traditional Emirati weddings in Dubai?",
        a: "Yes. We plan elegant Emirati weddings across Dubai and the UAE while carefully respecting local traditions, family preferences, privacy requirements, and cultural customs.",
      },
      {
        q: "Can you arrange a traditional Zaffa procession?",
        a: "Yes. We can coordinate traditional Arabic Zaffa processions with drummers, performers, music, entrances, choreography, and production tailored to the couple and venue.",
      },
      {
        q: "Can you design separate celebrations for men and women?",
        a: "Yes. We can plan separate halls, entrances, hospitality areas, entertainment, dining, and production while maintaining one coordinated wedding experience.",
      },
      {
        q: "Do you create luxury Majlis settings?",
        a: "Yes. We design elegant Majlis seating areas with customised furniture, florals, lighting, carpets, tables, privacy screens, and hospitality layouts.",
      },
      {
        q: "Can you arrange Arabic entertainment and performers?",
        a: "Yes. We can source Arabic singers, musicians, drummers, traditional performers, DJs, and other entertainment according to the family's preferences and venue regulations.",
      },
      {
        q: "Can you coordinate Arabic and Gulf catering?",
        a: "Yes. We work with experienced catering teams to arrange Emirati, Arabic, and Gulf menus, live stations, traditional sweets, coffee service, and premium guest hospitality.",
      },
      {
        q: "Can you manage a large GCC family wedding?",
        a: "Absolutely. We coordinate large guest lists, seating plans, invitations, RSVP management, family requirements, supplier access, transport, hospitality, and complete event operations.",
      },
      {
        q: "Do you provide private and discreet wedding coordination?",
        a: "Yes. Privacy is treated as a priority. We can coordinate controlled access, private supplier protocols, photography restrictions, separate entrances, security, and discreet guest management.",
      },
    ],
  },

  "south-asian-weddings": {
    heroSubtitle: "Vibrant traditions, multi-day celebrations, and unforgettable moments.",
    introHeading: "South Asian Weddings Dubai",
    intro: [
      "Celebrate vibrant South Asian weddings in Dubai with bespoke wedding planning services tailored to your traditions, customs, and celebrations.",
      "As an experienced wedding organizer UAE and dedicated wedding coordinator, we specialise in luxurious multi-day celebrations including Mehndi, Sangeet, Pheras, Walima, and grand receptions. From elegant wedding decoration Dubai to seamless event coordination, we create unforgettable weddings that beautifully reflect your heritage.",
      "Whether you are planning a Pakistani, North Indian, South Indian, Tamil, Sikh, Gujarati, or multicultural wedding, every event is designed to feel connected, personal, and beautifully executed.",
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
    whyChooseTitle: "Why Choose Us for South Asian Weddings in Dubai",
    whyChoose: [
      {
        title: "Specialists in Multi-Day Wedding Celebrations",
        body: "We coordinate complete South Asian wedding journeys, including engagement events, Mehndi, Haldi, Sangeet, Pheras, Nikah, Baraat, Walima, receptions, and farewell celebrations.",
      },
      {
        title: "Bespoke Cultural Wedding Design",
        body: "Every event is designed around your heritage, family traditions, preferred colours, rituals, attire, entertainment, and personal wedding vision.",
      },
      {
        title: "Luxury Décor, Staging & Production",
        body: "From vibrant Mehndi styling and grand reception stages to mandaps, floral installations, lighting, sound, LED screens, entrances, and wedding decoration Dubai, we transform every venue.",
      },
      {
        title: "Complete Family, Guest & Event Coordination",
        body: "Our wedding coordinator team manages suppliers, timelines, ceremonies, family requirements, guest hospitality, venue transitions, transport, and every detail across all wedding functions.",
      },
    ],
    faqs: [
      {
        q: "Do you organise Pakistani and Indian weddings in Dubai?",
        a: "Yes. We plan Pakistani, North Indian, South Indian, Tamil, Sikh, Gujarati, and multicultural weddings across Dubai and the UAE.",
      },
      {
        q: "Can you plan several South Asian wedding events?",
        a: "Absolutely. We can coordinate Mehndi, Haldi, Sangeet, Nikah, Pheras, Baraat, Walima, receptions, and other family celebrations as one seamless wedding experience.",
      },
      {
        q: "Can each wedding function have a different design?",
        a: "Yes. Each event can have its own colour palette, décor concept, entertainment, stage, lighting, menu, and atmosphere while remaining connected to the overall wedding story.",
      },
      {
        q: "Can you arrange a traditional mandap or Nikah stage?",
        a: "Yes. We design customised mandaps, Nikah stages, reception stages, floral backdrops, aisle settings, seating layouts, and ceremonial spaces according to your traditions.",
      },
      {
        q: "Do you arrange South Asian entertainment?",
        a: "Yes. We can coordinate DJs, dhol players, live singers, dancers, Bollywood performers, choreography, family performances, and customised bride and groom entrances.",
      },
      {
        q: "Can you coordinate culturally appropriate catering?",
        a: "Yes. We work with experienced caterers to arrange Pakistani, Indian, vegetarian, regional, and international menus, including live stations and customised dining experiences.",
      },
      {
        q: "Can you manage large guest lists and international guests?",
        a: "Yes. We assist with invitations, RSVP tracking, accommodation, airport transfers, transportation, welcome desks, seating plans, itineraries, and guest hospitality.",
      },
      {
        q: "Can you plan a multicultural South Asian wedding?",
        a: "Absolutely. We thoughtfully combine different cultures, ceremonies, cuisines, music, and family traditions into one respectful and beautifully coordinated celebration.",
      },
    ],
  },

  "destination-weddings": {
    heroSubtitle: "Complete UAE wedding experiences for couples and guests travelling from abroad.",
    introHeading: "Destination Weddings",
    intro: [
      "Plan a seamless destination wedding in Dubai or across the UAE with one experienced team managing every part of the journey.",
      "From venue sourcing and guest accommodation to airport transfers, multi-day events, hospitality, décor, entertainment, and farewell experiences, every detail is coordinated for you.",
    ],
    whyChooseTitle: "Why Choose Us for a Destination Wedding",
    whyChoose: commonWhyChoose("Destination Weddings", "destination weddings"),
    faqs: [
      {
        q: "Can we plan our destination wedding in Dubai from overseas?",
        a: "Yes. Virtual consultations and regular updates make planning your destination wedding in Dubai simple and personal.",
      },
      {
        q: "Which UAE destination is best for our wedding style?",
        a: "We recommend Dubai, Abu Dhabi, or Ras Al Khaimah based on your vision and guest experience.",
      },
      {
        q: "Can our destination wedding include several days of celebrations?",
        a: "Absolutely. We curate welcome events, pre-wedding functions, ceremonies, receptions, and farewell gatherings.",
      },
      {
        q: "Do you create personalised wedding itineraries for guests?",
        a: "Yes. We design clear schedules covering every celebration, dress code, timing, and important guest information.",
      },
      {
        q: "Can we include traditions from our home country?",
        a: "Yes. We thoughtfully incorporate your rituals, cuisine, music, attire, and meaningful family customs.",
      },
      {
        q: "Do you source trusted local vendors for destination weddings?",
        a: "Yes. We connect couples with experienced UAE florists, caterers, entertainers, photographers, and production specialists.",
      },
      {
        q: "Can you arrange experiences around the wedding celebrations?",
        a: "Yes. We curate desert dinners, yacht gatherings, city experiences, welcome parties, and farewell brunches.",
      },
      {
        q: "How do you maintain one design theme across multiple events?",
        a: "We coordinate colours, florals, stationery, signage, styling, and production throughout your UAE destination wedding.",
      },
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}