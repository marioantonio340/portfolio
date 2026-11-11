import React, { useEffect, useState } from "react";
import { FiExternalLink, FiMail, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../../data/portfolioData";
import "./Header.css";

const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "stack", label: "Stack" },
  { id: "certificacoes", label: "Certificações" },
  { id: "contato", label: "Contato" },
];

export default function Header({ isOpen, toggle, closeMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    if (closeMenu) closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`olivario-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-olivario">
        <div className="olivario-header-inner">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="brand-lockup"
            aria-label="Início — Mário Fernandes"
          >
            <span className="brand-symbol-box">
              <img
                src={`${process.env.PUBLIC_URL}/symbol-olivario-icon.svg`}
                alt="Olivario"
              />
            </span>
            <span className="brand-text-col">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-sub">portfolio.olivario.com.br</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.olivarioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Olivario <FiExternalLink size={13} />
            </a>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              onClick={() => scrollToSection("contato")}
              className="header-cta"
            >
              <FiMail size={15} />
              Falar Comigo
            </button>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggle}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
