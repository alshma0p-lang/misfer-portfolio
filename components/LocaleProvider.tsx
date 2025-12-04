"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

type SupportedLocale = "en" | "ar";

type LocaleContextValue = {
  locale: SupportedLocale;
  setLocale: (nextLocale: SupportedLocale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: SupportedLocale;
};

export const LocaleProvider = ({ children, initialLocale = "en" }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<SupportedLocale>(initialLocale);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const stored = window.localStorage.getItem("locale");
    if (stored === "en" || stored === "ar") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "en" ? "ar" : "en")),
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
