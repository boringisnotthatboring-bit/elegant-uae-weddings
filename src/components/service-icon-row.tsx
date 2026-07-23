const weddingTypes = [
  "Luxury Weddings",
  "Beach Weddings",
  "Desert Weddings",
  "Indian Weddings",
  "Arabic Weddings",
  "Civil Weddings",
];

export function ServiceIconRow() {
  return (
    <div className="max-w-3xl">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {weddingTypes.map((type) => (
          <div
            key={type}
            className="
              flex
              h-11
              items-center
              justify-center
              rounded-full
              border
              border-[#DDD2C5]
              bg-[#FCF8F3]
              px-6
              text-center
              text-[13px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-[#78645A]
              transition-all
              duration-300
              hover:border-[#8A5A44]
              hover:text-[#8A5A44]
            "
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}