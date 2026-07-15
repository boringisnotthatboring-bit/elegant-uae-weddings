import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe } from "lucide-react";
import { primaryNav, company } from "@/lib/content/nav";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-2xl tracking-tight text-primary">
            Awesome Events
          </span>
          <span className="eyebrow -mt-0.5 text-[0.6rem]">Weddings · Dubai</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
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
            <span style={{ fontFamily: locale === "en" ? "'Cairo','Tajawal',sans-serif" : undefined }}>
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
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
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
