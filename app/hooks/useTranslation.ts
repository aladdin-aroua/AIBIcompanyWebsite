import { useState, useEffect } from "react";
import en from "../translations/en.json";

// You can adjust this interface to match the exact shape of your JSON.
// For very large translation trees, you may keep it looser:
interface Translations {
  [key: string]: string | Translations;
}

/**
 * A custom translation hook that:
 * 1. Manages the current language (defaults to "en").
 * 2. Loads the appropriate translation data.
 * 3. Provides a function `t(key)` to retrieve a translation by dot-separated path.
 */
export function useTranslation() {
  const [language, setLanguage] = useState<"en">("en");
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    // For demonstration: load English translations statically.
    // If you support multiple languages, you could do a dynamic import here.
    if (language === "en") {
      setTranslations(en as Translations);
    }
  }, [language]);

  /**
   * Retrieve a translation for a given key (dot-separated).
   * If missing, return the key itself.
   */
  function t(key: string): string {
    if (!key) return "";

    const segments = key.split(".");
    let current: string | Translations = translations;

    for (const segment of segments) {
      if (
        current &&
        typeof current === "object" &&
        current[segment] !== undefined
      ) {
        current = current[segment] as string | Translations;
      } else {
        // If at any point the path doesn't exist, return the key as a fallback
        return key;
      }
    }

    // At the end, if the value is a string, return it; otherwise fallback to the key
    return typeof current === "string" ? current : key;
  }

  return {
    t,
    language,
    setLanguage,
  };
}
