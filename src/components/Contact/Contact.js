import React, { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent, profile } from "../../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();
  const content = getPortfolioContent(lang);
  const { contact } = content;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contato" className="contact-section section-band">
      <div className="container-olivario">
        <div className="contact-banner">
          <div className="contact-banner-glow" />

          <div className="contact-grid">
            <div>
              <span className="contact-badge">{contact.badge}</span>
              <h2 className="contact-title">{contact.title}</h2>
              <p className="contact-text">{contact.text}</p>

              <div className="contact-cta-row">
                <a href={`mailto:${profile.email}`} className="btn-olive">
                  <FiMail size={16} />
                  {contact.sendEmail}
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slate"
                >
                  <FaLinkedin size={16} color="#0284C7" />
                  {contact.connectLinkedIn}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#22C55E",
                  marginBottom: "0.65rem",
                }}
              >
                {contact.primaryEmailLabel}
              </p>

              <div className="contact-email-box">
                <span className="contact-email-text">{profile.email}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="contact-copy-btn"
                  aria-label={contact.copyAria}
                >
                  {copied ? (
                    <>
                      <FiCheck size={14} /> {contact.copied}
                    </>
                  ) : (
                    <>
                      <FiCopy size={14} /> {contact.copy}
                    </>
                  )}
                </button>
              </div>

              <div className="contact-channels">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-link"
                >
                  <span className="contact-channel-left">
                    <FaLinkedin size={17} color="#0284C7" />
                    <span>linkedin.com/in/mariofernandes340</span>
                  </span>
                  <FiArrowUpRight size={15} color="#22C55E" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-link"
                >
                  <span className="contact-channel-left">
                    <FaGithub size={17} color="#F8FAFC" />
                    <span>github.com/marioantonio340</span>
                  </span>
                  <FiArrowUpRight size={15} color="#22C55E" />
                </a>

                <div className="contact-channel-link" style={{ cursor: "default" }}>
                  <span className="contact-channel-left">
                    <FiMapPin size={16} color="#22C55E" />
                    <span>{content.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
