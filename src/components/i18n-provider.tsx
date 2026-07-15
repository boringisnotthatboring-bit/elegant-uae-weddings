import { useState, type ReactNode } from "react";
import { I18nContext, type Locale } from "@/lib/i18n";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = (_key: string, fallback: string) => fallback;
  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
