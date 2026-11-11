import React from "react";
import { FiCloud, FiCode, FiCpu } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent, profile } from "../../data/portfolioData";
import { useRealtimeAge } from "../../hooks/useRealtimeAge";
import "./About.css";

const pillarIcons = {
  "fullstack-erp": FiCode,
  salesforce: FiCloud,
  "ai-driven": FiCpu,
};

export default function About() {
  const { lang } = useLanguage();
  const content = getPortfolioContent(lang);
  const { about } = content;
  const age = useRealtimeAge(profile.birthDate);

  return (
    <section id="sobre" className="about-section section-band">
      <div className="container-olivario">
        <div className="about-header">
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-heading">{about.heading}</h2>
          <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
            {about.subtitle}
          </p>
        </div>

        <div className="tech-card about-story-card">
          <p className="about-story-text">
            {about.storyP1BeforeAge} <strong>{profile.fullName}</strong>
            {about.storyP1Tenho} {age.years} {about.yearsLabel} {about.storyP1Born}{" "}
            {about.birthShort}
            {about.storyP1AfterBorn} <strong>{content.location}</strong>. {about.storyP1Grad}{" "}
            <strong>{about.storyP1Degree}</strong> {about.storyP1AfterGrad}{" "}
            <strong>{about.storyP1Role}</strong>.
          </p>

          <p className="about-story-text">{about.storyP2}</p>
          <p className="about-story-text">{about.storyP3}</p>
        </div>

        <div className="pillars-grid">
          {about.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || FiCode;
            return (
              <div
                key={pillar.id}
                className={`tech-card pillar-card accent-${pillar.accent}`}
              >
                <div className="pillar-top">
                  <div className="pillar-icon-box">
                    <Icon size={21} />
                  </div>
                  <span className="pillar-badge">{pillar.badge}</span>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
