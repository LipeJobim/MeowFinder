// src/components/Footer.tsx

import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        MeowFinder © 2026 — Desenvolvido por{" "}
        <strong>Felipe Jobim</strong>
      </p>

      <a
        href="https://github.com/LipeJobim"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub />
        GitHub
      </a>
    </footer>
  );
}