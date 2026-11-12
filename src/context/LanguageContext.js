import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_lang";

const LanguageContext = createContext({
  lang: "pt",
  setLang: () => {},
  toggleLang: () => {},
});

function getInitialLanguage() {
  if (typeof window === "undefined") return "pt";

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang === "en" || urlLang === "pt") {
    return urlLang;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") {
      return saved;
    }
  } catch {
    // Ignore storage access issues
  }

  return "pt";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage access issues
    }

    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.title =
      lang === "en"
        ? "Mário Fernandes • Full Stack Developer"
        : "Mário Fernandes • Desenvolvedor Full Stack";
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

