import React, { useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayers,
  FiMapPin,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
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
              <h1 className="hero-title">
                Olá, eu sou{" "}
                <span className="gradient-tech">{profile.name}.</span>
              </h1>

              <div className="hero-type-line" aria-live="polite">
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "A Full-Stack Developer.",
                    1600,
                    "Desenvolvedor Full Stack no Grupo Setta.",
                    1600,
                    "Formado em Sistemas de Informação — UNIPAM.",
                    1400,
                    "A problem solver.",
                    1300,
                    "An innovative thinker.",
                    1300,
                    "A....",
                    900,
                    "A.... cool guy?",
                    1400,
                    "Ok...",
                    900,
                    "Ok... I'm running out of ideas...",
                    1300,
                    "Uhh...",
                    900,
                    "Uhh... you can scroll down now...",
                    1500,
                    "Seriously???",
                    1100,
                    "You're uh...",
                    900,
                    "You're uh... still here?",
                    1300,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                    1400,
                    "See ya! :)",
                    900,
                  ]}
                  speed={55}
                  deletionSpeed={68}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>

              <p className="hero-description">
                Tenho <strong>{age.years} anos</strong> e atuo como{" "}
                <strong>Desenvolvedor Full Stack</strong> no <strong>{profile.company}</strong>,
                projetando sistemas internos de ponta a ponta — de front-ends em{" "}
                <strong>React, Next.js e TypeScript</strong> a back-ends em{" "}
                <strong>Node.js</strong>, integrações com ERP TOTVS Protheus, Microsoft e
                ecossistema Salesforce.
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
                  <p className="hero-metric-val">Front-end</p>
                  <p className="hero-metric-label">React, Next.js & TS</p>
                </div>
                <div>
                  <p className="hero-metric-val olive">Back-end & DB</p>
                  <p className="hero-metric-label">Node, Prisma & SQL</p>
                </div>
                <div>
                  <p className="hero-metric-val lime">Salesforce & IA</p>
                  <p className="hero-metric-label">Apex, Flows & MCP</p>
                </div>
              </div>
            </div>

            {/* Right Column: Developer Summary Card */}
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

                <div className="hero-focus-list">
                  <div className="hero-focus-item accent-olive">
                    <div className="hero-focus-icon">
                      <FiCode size={16} />
                    </div>
                    <div>
                      <h3 className="hero-focus-title">Sistemas Web Ponta a Ponta</h3>
                      <p className="hero-focus-desc">
                        CRMs próprios, portais de BI, APIs em Node.js/.NET e interfaces em React,
                        Next.js e TypeScript.
                      </p>
                    </div>
                  </div>

                  <div className="hero-focus-item accent-electric">
                    <div className="hero-focus-icon">
                      <FiLayers size={16} />
                    </div>
                    <div>
                      <h3 className="hero-focus-title">Integrações ERP, Microsoft & Salesforce</h3>
                      <p className="hero-focus-desc">
                        TOTVS Protheus, Microsoft Entra ID, Power BI Embedded, SharePoint, Apex e
                        Flows.
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
                    Full Stack Developer
                  </span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#22C55E", fontWeight: 600 }}
                  >
                    github.com/{profile.githubUsername} →
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
