import React from "react";
import { FiMail, FiTerminal, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent, profile } from "../../data/portfolioData";
import "../Header/Header.css";

export default function Dropdown({ isOpen, toggle }) {
  const { lang, setLang } = useLanguage();
  const content = getPortfolioContent(lang);

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
              <span className="brand-sub">{content.role}</span>
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
            <div className="lang-toggle" role="group" aria-label="Language switcher">
              <button
                type="button"
                onClick={() => setLang("pt")}
                className={`lang-toggle-btn ${lang === "pt" ? "active" : ""}`}
              >
                PT-BR
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`lang-toggle-btn ${lang === "en" ? "active" : ""}`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggle}
              className="mobile-menu-btn"
              aria-label={content.nav.closeMenu}
            >
              <FiX />
            </button>
          </div>
        </div>

        <nav className="mobile-drawer-links" aria-label="Mobile menu">
          {content.nav.mobileItems.map((item) => (
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
          <FiMail /> {content.nav.mobileCta}
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
