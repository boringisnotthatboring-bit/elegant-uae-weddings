export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Luxury Wedding – Dubai",
    category: "Luxury",
    location: "Dubai",
    image: img("photo-1519741497674-611481863552"),
  },
  {
    id: "p2",
    title: "Beach Wedding – UAE",
    category: "Beach",
    location: "Abu Dhabi",
    image: img("photo-1523438885200-e635ba2c371e"),
  },
  {
    id: "p3",
    title: "Indian Wedding Celebration",
    category: "Cultural",
    location: "Dubai",
    image: img("photo-1600717535275-0b18ede2f7fc"),
  },
  {
    id: "p4",
    title: "Arabic Wedding Reception",
    category: "Cultural",
    location: "Dubai",
    image: img("photo-1519741347686-c1e0aadf4611"),
  },
  {
    id: "p5",
    title: "Outdoor Wedding Venue",
    category: "Outdoor",
    location: "Ras Al Khaimah",
    image: img("photo-1464366400600-7168b8af9bc3"),
  },
  {
    id: "p6",
    title: "Destination Wedding",
    category: "Destination",
    location: "Ras Al Khaimah",
    image: img("photo-1465495976277-4387d4b0b4c6"),
  },
  {
    id: "p7",
    title: "Luxury Hotel Reception",
    category: "Luxury",
    location: "Dubai",
    image: img("photo-1519671482749-fd09be7ccebf"),
  },
  {
    id: "p8",
    title: "Garden Ceremony",
    category: "Outdoor",
    location: "Sharjah",
    image: img("photo-1526047932273-341f2a7631f9"),
  },
  {
    id: "p9",
    title: "Civil Wedding Celebration",
    category: "Civil",
    location: "Dubai",
    image: img("photo-1522673607200-164d1b6ce486"),
  },
];

export const portfolioCategories = [
  "All",
  "Luxury",
  "Beach",
  "Cultural",
  "Outdoor",
  "Destination",
  "Civil",
];
