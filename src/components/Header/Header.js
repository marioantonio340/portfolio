import React, { useEffect, useState } from "react";
import { FiMail, FiMenu, FiTerminal, FiX } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent, profile } from "../../data/portfolioData";
import "./Header.css";

function LanguageToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => setLang("pt")}
        className={`lang-toggle-btn ${lang === "pt" ? "active" : ""}`}
        aria-pressed={lang === "pt"}
      >
        PT-BR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`lang-toggle-btn ${lang === "en" ? "active" : ""}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

export default function Header({ isOpen, toggle, closeMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const content = getPortfolioContent(lang);

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
            aria-label={profile.name}
          >
            <span className="brand-symbol-box" style={{ color: "#22C55E" }}>
              <FiTerminal size={20} />
            </span>
            <span className="brand-text-col">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-sub">{content.role}</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {content.nav.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageToggle lang={lang} setLang={setLang} />
            <button
              type="button"
              onClick={() => scrollToSection("contato")}
              className="header-cta"
            >
              <FiMail size={15} />
              {content.nav.cta}
            </button>
          </div>

          <div className="mobile-header-controls">
            <LanguageToggle lang={lang} setLang={setLang} />
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={toggle}
              aria-label={isOpen ? content.nav.closeMenu : content.nav.openMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
