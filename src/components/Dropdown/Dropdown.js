import React from "react";
import { FiMail, FiTerminal, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/portfolioData";
import "../Header/Header.css";

const mobileNavItems = [
  { id: "sobre", label: "Sobre Mim" },
  { id: "experiencia", label: "Experiência & Formação" },
  { id: "projetos", label: "Projetos" },
  { id: "stack", label: "Stack Tecnológica" },
  { id: "certificacoes", label: "Certificações" },
  { id: "contato", label: "Contato" },
];

export default function Dropdown({ isOpen, toggle }) {
  const handleJump = (id) => {
    toggle();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`mobile-drawer ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      <div>
        <div className="mobile-drawer-top">
          <div className="brand-lockup">
            <span className="brand-symbol-box" style={{ color: "#22C55E" }}>
              <FiTerminal size={20} />
            </span>
            <span className="brand-text-col">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-sub">Full Stack Developer</span>
            </span>
          </div>

          <button
            type="button"
            onClick={toggle}
            className="mobile-menu-btn"
            aria-label="Fechar menu"
          >
            <FiX />
          </button>
        </div>

        <nav className="mobile-drawer-links" aria-label="Menu mobile">
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleJump(item.id)}
              className="mobile-drawer-link"
            >
              <span>{item.label}</span>
              <span style={{ color: "#22C55E", fontSize: "0.875rem" }}>→</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mobile-drawer-footer">
        <button
          type="button"
          onClick={() => handleJump("contato")}
          className="btn-olive"
          style={{ width: "100%" }}
        >
          <FiMail /> Entrar em Contato
        </button>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-slate"
            style={{ flex: 1 }}
          >
            <FaLinkedin color="#0284C7" /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-slate"
            style={{ flex: 1 }}
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
