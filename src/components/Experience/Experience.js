import React from "react";
import { FiAward, FiBookOpen, FiBriefcase, FiCheck, FiCompass } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const { lang } = useLanguage();
  const { experience } = getPortfolioContent(lang);

  return (
    <section id="experiencia" className="experience-section">
      <div className="container-olivario">
        <div className="section-header-split">
          <div>
            <p className="section-eyebrow">{experience.eyebrow}</p>
            <h2 className="section-heading">{experience.heading}</h2>
          </div>
          <p className="section-subtitle" style={{ maxWidth: 440 }}>
            {experience.subtitle}
          </p>
        </div>

        <div className="timeline-list">
          {experience.items.map((exp, idx) => {
            const isEducation = exp.accent === "electric";
            const Icon = isEducation
              ? FiBookOpen
              : exp.accent === "lime"
              ? FiCompass
              : FiBriefcase;

            return (
              <article
                key={idx}
                className={`tech-card timeline-card accent-${exp.accent}`}
              >
                <div className="timeline-card-top">
                  <div className="timeline-role-wrap">
                    <div className="timeline-icon-box">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <p className="timeline-org">
                        {exp.organization} •{" "}
                        <span style={{ color: "#94A3B8", fontWeight: 400 }}>
                          {exp.location}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <span className="timeline-type-pill">{exp.type}</span>
                    <span className="timeline-period-pill">{exp.period}</span>
                  </div>
                </div>

                <p className="timeline-summary">{exp.summary}</p>

                <ul className="timeline-highlights">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="timeline-highlight-item">
                      <FiCheck size={15} className="timeline-highlight-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Certifications */}
        <div id="certificacoes" className="certs-block">
          <div className="section-header-split" style={{ marginBottom: 0 }}>
            <div>
              <p className="section-eyebrow">{experience.certsEyebrow}</p>
              <h2 className="section-heading">{experience.certsHeading}</h2>
            </div>
            <p className="section-subtitle" style={{ maxWidth: 420 }}>
              {experience.certsSubtitle}
            </p>
          </div>

          <div className="certs-grid">
            {experience.certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`tech-card cert-card accent-${cert.accent}`}
              >
                <div className="cert-top">
                  <div className="cert-icon">
                    <FiAward size={18} />
                  </div>
                  <span className="cert-cat">{cert.category}</span>
                </div>

                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
