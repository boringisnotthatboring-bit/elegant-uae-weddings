import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { primaryNav, company } from "@/lib/content/nav";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { flagshipServices, culturalServices } from "@/lib/content/services";

const serviceLinks = [...flagshipServices, ...culturalServices].map((s) => ({
  label: s.title,
  slug: s.slug,
}));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { locale, setLocale } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-2xl tracking-tight text-primary">Awesome Events</span>
          <span className="eyebrow -mt-0.5 text-[0.6rem]">Weddings · Dubai</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => {
            if (item.to === "/services") {
              return (
                <div key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary group-hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-sm border border-border bg-background shadow-xl">
                      <ul className="py-2">
                        {serviceLinks.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to="/wedding-services/$slug"
                              params={{ slug: s.slug }}
                              onClick={(e) => e.currentTarget.blur()}
                              className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="notranslate inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
            translate="no"
            lang={locale === "en" ? "ar" : "en"}
          >
            <Globe className="h-3.5 w-3.5" />
            <span
              style={{ fontFamily: locale === "en" ? "'Cairo','Tajawal',sans-serif" : undefined }}
            >
              {locale === "en" ? "عربي" : "English"}
            </span>
          </button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              if (item.to === "/services") {
                return (
                  <div key={item.to} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm text-foreground/80"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-label="Toggle wedding services"
                        className="p-2"
                      >
                        <ChevronDown
                          className={
                            "h-4 w-4 transition-transform " +
                            (mobileServicesOpen ? "rotate-180" : "")
                          }
                        />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <ul className="mb-1 ml-3 flex flex-col border-l border-border/60 pl-3">
                        {serviceLinks.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to="/wedding-services/$slug"
                              params={{ slug: s.slug }}
                              onClick={() => {
                                setOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="block py-1.5 text-sm text-foreground/70 hover:text-primary"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-foreground/80"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-3">
              <Button asChild size="sm" className="flex-1">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <button
                type="button"
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-widest"
              >
                {locale === "en" ? "AR" : "EN"}
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{company.tagline}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
