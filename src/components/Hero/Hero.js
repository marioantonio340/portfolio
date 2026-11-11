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
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent, profile } from "../../data/portfolioData";
import { useRealtimeAge } from "../../hooks/useRealtimeAge";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import "./Hero.css";

const focusIcons = {
  fullstack: FiCode,
  integrations: FiLayers,
  ai: FiCpu,
};

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const { lang } = useLanguage();
  const content = getPortfolioContent(lang);
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
                {content.hero.greeting}{" "}
                <span className="gradient-tech">{profile.name}.</span>
              </h1>

              <div className="hero-type-line" aria-live="polite">
                <TypeAnimation
                  key={lang}
                  cursor={true}
                  sequence={content.hero.typeSequence}
                  speed={55}
                  deletionSpeed={68}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>

              <p className="hero-description">
                {content.hero.introBeforeAge} {age.years} {content.hero.yearsOldLabel}{" "}
                {content.hero.introMiddle}{" "}
                <strong>{content.hero.introRole}</strong> {content.hero.introAt}{" "}
                <strong>{profile.company}</strong>
                {content.hero.introAfterCompany}
              </p>

              <div className="hero-cta-row">
                <button
                  type="button"
                  onClick={() => scrollTo("projetos")}
                  className="btn-olive"
                >
                  {content.hero.ctaProjects} <FiArrowRight size={17} />
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
                {content.hero.metrics.map((metric) => (
                  <div key={metric.val}>
                    <p className={`hero-metric-val ${metric.tone}`}>{metric.val}</p>
                    <p className="hero-metric-label">{metric.label}</p>
                  </div>
                ))}
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
                      {content.role} @ {profile.company}
                    </p>
                    <p className="hero-card-loc">
                      <FiMapPin size={12} color="#22C55E" />
                      {content.location}
                    </p>
                  </div>
                </div>

                <div className="hero-focus-list">
                  {content.hero.card.focusItems.map((item) => {
                    const Icon = focusIcons[item.id] || FiCode;
                    return (
                      <div
                        key={item.id}
                        className={`hero-focus-item accent-${item.accent}`}
                      >
                        <div className="hero-focus-icon">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h3 className="hero-focus-title">{item.title}</h3>
                          <p className="hero-focus-desc">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="hero-card-footer">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    <FiCheckCircle size={14} color="#22C55E" />
                    {content.hero.card.footerBadge}
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
