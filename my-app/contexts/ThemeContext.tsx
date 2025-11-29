"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const updateTheme = (isDark: boolean) => {
    if (typeof window === "undefined") return;
    
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Só executa no cliente
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved !== null ? saved === "true" : prefersDark;
    
    setDarkMode(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      console.log("Toggling dark mode to:", newMode); // Debug
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", String(newMode));
        updateTheme(newMode);
        console.log("Theme updated, classList:", document.documentElement.classList.toString()); // Debug
      }
      return newMode;
    });
  };

  // Sempre fornece o contexto, mesmo antes de estar montado
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

