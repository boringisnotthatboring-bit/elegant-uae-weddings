/**
 * Minimal i18n service. Only "en" is implemented today; the toggle in the
 * header flips a `lang` state so the Arabic version can be plugged in later
 * as a drop-in replacement (RTL + translated dictionaries) without touching
 * component JSX.
 */
import { createContext, useContext } from "react";

export type Locale = "en" | "ar";

export interface I18nState {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, fallback: string) => string;
}

export const I18nContext = createContext<I18nState>({
  locale: "en",
  setLocale: () => {},
  t: (_k, fallback) => fallback,
});

export const useI18n = () => useContext(I18nContext);
