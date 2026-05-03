// src/components/Navbar.tsx

import { useState } from "react";
import type { ReactNode } from "react";

import { useTheme } from "../contexts/ThemeContext";

interface NavbarProps {
  children: ReactNode;
}

export function Navbar({
  children,
}: NavbarProps) {
  const [showFilters, setShowFilters] =
    useState(false);

  const { theme, toggleTheme } =
    useTheme();

  return (
    <nav className="navbar">
      <div className="nav-top">
        <h2>🐱 MeowFinder</h2>

        <div className="nav-buttons">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === "light"
              ? "🌙"
              : "☀️"}
          </button>

          <button
            className="filter-toggle"
            onClick={() =>
              setShowFilters(
                !showFilters
              )
            }
          >
            {showFilters
              ? "🔽 Fechar filtros"
              : "🔍 Filtros"}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="filters-dropdown">
          {children}
        </div>
      )}
    </nav>
  );
}