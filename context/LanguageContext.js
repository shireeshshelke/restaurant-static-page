'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import mr from '../locales/mr.json';

const LanguageContext = createContext();

const translations = {
  en,
  mr,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get language from localStorage or browser preference
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Default to English
      setLanguage('en');
    }
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
