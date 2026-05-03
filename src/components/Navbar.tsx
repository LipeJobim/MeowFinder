// src/components/Navbar.tsx

import { useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-top">
        <h2>🐾 MeowFinder</h2>

        <button
          className="filter-toggle"
          onClick={() => setOpen(!open)}
        >
          ⚙️ Filtros
        </button>
      </div>

      {open && (
        <div className="filters-dropdown">
          {children}
        </div>
      )}
    </nav>
  );
}