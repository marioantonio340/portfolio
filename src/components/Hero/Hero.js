import React, { useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCloud,
  FiCpu,
  FiLayers,
  FiMapPin,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/portfolioData";
import { useRealtimeAge } from "../../hooks/useRealtimeAge";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import "./Hero.css";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const age = useRealtimeAge(profile.birthDate);

  const toggle = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="top">
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header isOpen={isOpen} toggle={toggle} closeMenu={closeMenu} />

      <section className="hero-section">
        <div className="hero-glow-main" />
        <div className="hero-glow-corner" />

        <div className="container-olivario">
          <div className="hero-grid">
            {/* Left Column */}
            <div className="hero-left">
              <div className="hero-badge">
                <span className="pulse-dot" />
                <span>Salesforce • Full Stack (React & TS) • AI-Driven Engineering</span>
              </div>

              <h1 className="hero-title">
                Construindo sistemas corporativos com{" "}
                <span className="gradient-tech">Engenharia, Salesforce & IA.</span>
              </h1>

              <p className="hero-description">
                Olá, eu sou <strong>{profile.name}</strong> ({age.years} anos). Atuo como{" "}
                <strong>{profile.role}</strong> no <strong>{profile.company}</strong> e sou
                fundador da <strong>{profile.founderCompany}</strong>, desenvolvendo CRMs,
                portais de BI, integrações com ERP TOTVS Protheus e automações inteligentes de ponta a ponta.
              </p>

              <div className="hero-cta-row">
                <button
                  type="button"
                  onClick={() => scrollTo("projetos")}
                  className="btn-olive"
                >
                  Explorar Projetos <FiArrowRight size={17} />
                </button>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slate"
                >
                  <FaLinkedin size={17} color="#0284C7" />
                  LinkedIn
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slate"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>
              </div>

              <div className="hero-metrics">
                <div>
                  <p className="hero-metric-val">Full Stack</p>
                  <p className="hero-metric-label">React, Next.js & Node</p>
                </div>
                <div>
                  <p className="hero-metric-val olive">Salesforce</p>
                  <p className="hero-metric-label">Apex, Flows & DevOps</p>
                </div>
                <div>
                  <p className="hero-metric-val lime">IA & MCP</p>
                  <p className="hero-metric-label">Claude Code & Testes</p>
                </div>
              </div>
            </div>

            {/* Right Column: Executive Profile & Live Age Card */}
            <div>
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-avatar-wrap">
                    <img
                      src={
                        avatarError
                          ? `${process.env.PUBLIC_URL}/symbol-olivario-icon.svg`
                          : profile.avatarUrl
                      }
                      alt={profile.name}
                      className="hero-avatar"
                      onError={() => setAvatarError(true)}
                    />
                    <span className="hero-avatar-badge" title="Olivario Software">
                      <img
                        src={`${process.env.PUBLIC_URL}/symbol-olivario-icon.svg`}
                        alt="Olivario"
                      />
                    </span>
                  </div>

                  <div>
                    <h2 className="hero-card-name">{profile.name}</h2>
                    <p className="hero-card-role">
                      {profile.role} @ {profile.company}
                    </p>
                    <p className="hero-card-loc">
                      <FiMapPin size={12} color="#22C55E" />
                      {profile.location}
                    </p>
                  </div>
                </div>

                {/* Live Real-Time Age Widget */}
                <div className="age-telemetry-box">
                  <div className="age-telemetry-top">
                    <span className="age-telemetry-label">
                      Idade em tempo real • Nasc. {profile.birthLabel}
                    </span>
                    <span className="age-live-pill">
                      <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                      LIVE
                    </span>
                  </div>
                  <div className="age-telemetry-main">
                    <div className="age-years">
                      {age.years} <span>anos</span>
                    </div>
                    <div className="age-breakdown" aria-live="polite">
                      {age.months}m · {String(age.days).padStart(2, "0")}d ·{" "}
                      {age.formattedClock}
                    </div>
                  </div>
                </div>

                <div className="hero-focus-list">
                  <div className="hero-focus-item accent-electric">
                    <div className="hero-focus-icon">
                      <FiCloud size={16} />
                    </div>
                    <div>
                      <h3 className="hero-focus-title">Ecossistema Salesforce & CRM</h3>
                      <p className="hero-focus-desc">
                        Apex, Flows, SF CLI, DevOps Center e migração de processos para aplicações próprias.
                      </p>
                    </div>
                  </div>

                  <div className="hero-focus-item accent-olive">
                    <div className="hero-focus-icon">
                      <FiLayers size={16} />
                    </div>
                    <div>
                      <h3 className="hero-focus-title">Integrações ERP & Microsoft</h3>
                      <p className="hero-focus-desc">
                        TOTVS Protheus, Microsoft Entra ID, Power BI Embedded e SharePoint conectados.
                      </p>
                    </div>
                  </div>

                  <div className="hero-focus-item accent-lime">
                    <div className="hero-focus-icon">
                      <FiCpu size={16} />
                    </div>
                    <div>
                      <h3 className="hero-focus-title">IA Aplicada & Qualidade</h3>
                      <p className="hero-focus-desc">
                        Claude Code, servidores MCP, Vitest, Playwright e revisão contínua de código.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hero-card-footer">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    <FiCheckCircle size={14} color="#22C55E" />
                    Fundador da Olivario Software
                  </span>
                  <a
                    href={profile.olivarioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#22C55E", fontWeight: 600 }}
                  >
                    olivario.com.br →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
