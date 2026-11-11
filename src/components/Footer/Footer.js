import React from "react";
import { FiExternalLink, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/portfolioData";

export default function Footer() {
  const scrollTo = (id) => {
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
              <span className="brand-symbol-box">
                <img
                  src={`${process.env.PUBLIC_URL}/symbol-olivario-icon.svg`}
                  alt="Olivario"
                />
              </span>
              <span className="brand-text-col">
                <span className="brand-name">{profile.name}</span>
                <span className="brand-sub">Olivario Software</span>
              </span>
            </div>
            <p style={{ lineHeight: 1.65, maxWidth: 320 }}>
              Salesforce Developer, Desenvolvedor Full Stack no Grupo Setta e Fundador da
              Olivario Software.
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <FiMapPin size={14} color="#22C55E" />
              {profile.location}
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
              Navegação
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              <li>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  style={{ color: "#94A3B8" }}
                >
                  Início
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo("sobre")} style={{ color: "#94A3B8" }}>
                  Sobre Mim
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("experiencia")}
                  style={{ color: "#94A3B8" }}
                >
                  Experiência & Certificações
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("projetos")}
                  style={{ color: "#94A3B8" }}
                >
                  Projetos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo("stack")} style={{ color: "#94A3B8" }}>
                  Stack Tecnológica
                </button>
              </li>
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
              Conexões
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
              <a
                href={profile.olivarioUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FiExternalLink size={15} color="#84CC16" />
                olivario.com.br
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
            © {new Date().getFullYear()} {profile.name} • Olivario Software (portfolio.olivario.com.br).
          </p>
          <p>Salesforce • Full Stack • AI-Driven Engineering</p>
        </div>
      </div>
    </footer>
  );
}
