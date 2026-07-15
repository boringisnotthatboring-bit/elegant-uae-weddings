export interface VenueCategory {
  slug: string;
  title: string;
  description: string;
  cta: string;
  image: string;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const venueCategories: VenueCategory[] = [
  {
    slug: "beachfront",
    title: "Beachfront Wedding Venues",
    description:
      "Say \"I do\" on the pristine white sands of the Arabian Gulf, where breathtaking sunsets and the sound of gentle waves create an unforgettable setting. Our handpicked beachfront wedding venues in Dubai and the UAE are perfect for romantic ceremonies, elegant receptions, and luxury destination weddings by the sea.",
    cta: "Explore Beachfront Wedding Venues",
    image: img("photo-1523438885200-e635ba2c371e"),
  },
  {
    slug: "garden",
    title: "Garden Wedding Venues",
    description:
      "Celebrate your love surrounded by lush greenery, blooming flowers, and picturesque landscapes. Our carefully selected garden wedding venues provide a naturally romantic backdrop for intimate ceremonies, elegant outdoor receptions, and timeless celebrations across Dubai and the UAE.",
    cta: "Explore Garden Wedding Venues",
    image: img("photo-1526047932273-341f2a7631f9"),
  },
  {
    slug: "luxury-hotel",
    title: "Luxury Hotel Wedding Venues",
    description:
      "Host your celebration at Dubai's most prestigious luxury hotel wedding venues, featuring grand ballrooms, five-star hospitality, world-class dining, and breathtaking event spaces. From iconic hotels in Dubai to exclusive venues in Abu Dhabi and Ras Al Khaimah, discover the perfect setting for an unforgettable luxury wedding.",
    cta: "Explore Luxury Hotel Wedding Venues",
    image: img("photo-1519167758481-83f550bb49b3"),
  },
  {
    slug: "unique",
    title: "Unique Wedding Venues",
    description:
      "Looking for something extraordinary? Discover our collection of unique wedding venues, from rooftop terraces and private islands to heritage landmarks and exclusive waterfront locations. Whether you're planning an intimate gathering or a lavish celebration, we'll help you find a venue that's as unique as your love story.",
    cta: "Explore All Wedding Venues",
    image: img("photo-1464366400600-7168b8af9bc3"),
  },
];

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    number: "01",
    title: "Experienced Wedding Planners & Coordinators",
    description:
      "Our passionate team brings years of experience in creating exceptional celebrations across the UAE. From the first consultation to your wedding day, we manage every detail with professionalism, creativity, and genuine care — allowing you to relax and enjoy every moment.",
  },
  {
    number: "02",
    title: "Bespoke Wedding Design & Luxury Styling",
    description:
      "Every wedding is uniquely designed to reflect your personality and vision. From elegant wedding decoration in Dubai and floral installations to custom stage styling, lighting, and tablescapes, we create timeless settings for unforgettable luxury weddings in Dubai & UAE.",
  },
  {
    number: "03",
    title: "Trusted Wedding Partners & Seamless Planning",
    description:
      "As a leading wedding organizer UAE, we've built strong relationships with the region's finest venues, photographers, designers, entertainers, and hospitality partners. Our wedding planning services ensure a smooth, stress-free experience with trusted professionals by your side every step of the way.",
  },
];
