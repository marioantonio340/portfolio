import React from "react";
import { FiMail, FiMapPin, FiTerminal } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent, profile } from "../../data/portfolioData";

export default function Footer() {
  const { lang } = useLanguage();
  const content = getPortfolioContent(lang);
  const { footer } = content;

  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#080E20",
        borderTop: "1px solid rgba(30, 41, 59, 0.85)",
        padding: "3.75rem 0 2.5rem",
        color: "#94A3B8",
        fontSize: "0.875rem",
      }}
    >
      <div className="container-olivario">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.25rem",
            marginBottom: "2.75rem",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <div className="brand-lockup">
              <span className="brand-symbol-box" style={{ color: "#22C55E" }}>
                <FiTerminal size={20} />
              </span>
              <span className="brand-text-col">
                <span className="brand-name">{profile.name}</span>
                <span className="brand-sub">{content.role}</span>
              </span>
            </div>
            <p style={{ lineHeight: 1.65, maxWidth: 320 }}>{footer.bio}</p>
            <p
              style={{
                fontSize: "0.78rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <FiMapPin size={14} color="#22C55E" />
              {content.location}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#ffffff",
                marginBottom: "0.9rem",
              }}
            >
              {footer.navTitle}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {footer.navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    style={{ color: "#94A3B8" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#ffffff",
                marginBottom: "0.9rem",
              }}
            >
              {footer.channelsTitle}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <a
                href={`mailto:${profile.email}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FiMail size={15} color="#22C55E" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaLinkedin size={15} color="#0284C7" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaGithub size={15} color="#F8FAFC" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(30, 41, 59, 0.85)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.78rem",
            color: "#64748B",
          }}
        >
          <p>
            © {new Date().getFullYear()} {profile.name} • {footer.copyrightSuffix}
          </p>
          <p>{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
