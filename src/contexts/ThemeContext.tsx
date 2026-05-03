// src/contexts/ThemeContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext =
  createContext<
    ThemeContextType | undefined
  >(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
 
  const [theme, setTheme] =
    useState<Theme>(() => {
      const saved = localStorage.getItem("theme");
      return (saved === "dark" ? "dark" : "light") as Theme;
    });

  const toggleTheme = () => {
    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }

  return context;
}