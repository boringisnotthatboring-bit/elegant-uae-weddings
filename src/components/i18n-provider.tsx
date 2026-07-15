import { useEffect, useState, type ReactNode } from "react";
import { I18nContext, type Locale } from "@/lib/i18n";

// Reads the googtrans cookie set by Google Translate Element so the toggle
// state survives the full-page reload that Google requires to (un)translate.
function readLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return "en";
  return decodeURIComponent(match[1]).endsWith("/ar") ? "ar" : "en";
}

function writeGoogTransCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  // Cookie must be set on both bare and dot-prefixed host so the Google
  // Translate widget picks it up across subdomains.
  const host = window.location.hostname;
  const domains = [host, "." + host.replace(/^www\./, "")];
  if (locale === "ar") {
    for (const d of domains) {
      document.cookie = `googtrans=/en/ar; path=/; domain=${d}`;
    }
    document.cookie = "googtrans=/en/ar; path=/";
  } else {
    for (const d of domains) {
      document.cookie = `googtrans=; path=/; domain=${d}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const current = readLocaleFromCookie();
    setLocaleState(current);
    document.documentElement.lang = current;
    document.documentElement.dir = current === "ar" ? "rtl" : "ltr";
  }, []);

  const setLocale = (l: Locale) => {
    writeGoogTransCookie(l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    // Google Translate applies translations on load, so a reload is required
    // to (un)translate every already-rendered node reliably.
    window.location.reload();
  };

  const t = (_key: string, fallback: string) => fallback;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
