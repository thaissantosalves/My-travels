"use client";

import { useEffect } from "react";

export default function ThemeScript() {
  useEffect(() => {
    // Aplica o tema antes da hidratação completa
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved !== null ? saved === "true" : prefersDark;
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return null;
}

