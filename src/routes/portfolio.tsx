import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  X,
} from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title:
          "Wedding Portfolio | Awesome Events Weddings Dubai",
      },
      {
        name: "description",
        content:
          "Explore luxury weddings, elegant décor, destination celebrations, beach weddings, and unforgettable events planned by Awesome Events Weddings across Dubai and the UAE.",
      },
      {
        property: "og:title",
        content:
          "Wedding Portfolio | Awesome Events Weddings Dubai",
      },
      {
        property: "og:description",
        content:
          "Discover luxury wedding celebrations and bespoke event designs created across Dubai and the UAE.",
      },
    ],
  }),

  component: PortfolioPage,
});

/*
  This automatically loads every .webp image inside:

  src/assets/portfolio/

  You do not need to import 119 images manually.
*/
const portfolioModules = import.meta.glob(
  "/src/assets/portfolio/*.webp",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

type PortfolioImage = {
  src: string;
  filename: string;
  alt: string;
};

function createReadableAlt(filename: string, index: number) {
  const readableName = filename
    .replace(/\.webp$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  if (
    readableName.toLowerCase().startsWith("portfolio") ||
    readableName.trim().length === 0
  ) {
    return `Luxury wedding portfolio image ${index + 1}`;
  }

  return `${readableName} — Awesome Events Weddings`;
}

function PortfolioPage() {
  const images = useMemo<PortfolioImage[]>(() => {
    return Object.entries(portfolioModules)
      .sort(([pathA], [pathB]) =>
        pathA.localeCompare(pathB, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      )
      .map(([path, src], index) => {
        const filename = path.split("/").pop() ?? "";

        return {
          src,
          filename,
          alt: createReadableAlt(filename, index),
        };
      });
  }, []);

  const [selectedIndex, setSelectedIndex] = useState<
    number | null
  >(null);

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || images.length === 0) {
        return currentIndex;
      }

      return currentIndex === 0
        ? images.length - 1
        : currentIndex - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || images.length === 0) {
        return currentIndex;
      }

      return currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = previousOverflow;
    };
  }, [
    selectedIndex,
    showPrevious,
    showNext,
    closeLightbox,
  ]);

  return (
    <>
      <main>
        {/* Portfolio heading */}
        <section className="section-y">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Our Portfolio</p>

              <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                Celebrations Designed to Be Remembered
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Explore a selection of luxury weddings,
                bespoke décor, destination celebrations, and
                unforgettable moments created across Dubai and
                the UAE.
              </p>

              {images.length > 0 && (
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Images className="h-4 w-4" />

                  <span>
                    {images.length} portfolio{" "}
                    {images.length === 1 ? "image" : "images"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Portfolio collage */}
        <section className="pb-16 md:pb-24">
          <div className="container-page">
            {images.length > 0 ? (
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                {images.map((image, index) => (
                  <button
                    key={image.filename || image.src}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Open image ${index + 1} of ${images.length}`}
                    className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-muted text-left shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading={index < 8 ? "eager" : "lazy"}
                      decoding="async"
                      className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

                    <div className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/95 text-black opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <Expand className="h-4 w-4" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-2xl rounded-sm border border-dashed border-border bg-secondary/30 px-6 py-16 text-center">
                <Images className="mx-auto h-10 w-10 text-muted-foreground" />

                <h2 className="mt-5 font-display text-2xl">
                  Portfolio images coming soon
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Add your WebP images to{" "}
                  <code className="rounded bg-muted px-1.5 py-1 text-xs">
                    src/assets/portfolio
                  </code>{" "}
                  and they will automatically appear here.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Full-screen lightbox */}
      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Portfolio image ${selectedIndex + 1} of ${images.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image counter */}
          <div className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs tracking-wide text-white/90 backdrop-blur-md md:left-6 md:top-6">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label="View previous image"
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:scale-105 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-7 md:h-14 md:w-14"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Main image */}
          <div className="flex h-full w-full items-center justify-center px-12 py-16 md:px-20">
            <img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-full max-w-full select-none object-contain shadow-2xl"
              draggable={false}
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="View next image"
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:scale-105 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-7 md:h-14 md:w-14"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Controls help */}
          <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs text-white/70 backdrop-blur-md sm:block">
            Use ← and → to browse · Press Esc to close
          </div>
        </div>
      )}
    </>
  );
}