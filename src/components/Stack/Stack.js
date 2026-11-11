import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent } from "../../data/portfolioData";
import "./Stack.css";

export default function Stack() {
  const { lang } = useLanguage();
  const { stack } = getPortfolioContent(lang);

  return (
    <section id="stack" className="stack-section">
      <div className="container-olivario">
        <div className="section-header-split">
          <div>
            <p className="section-eyebrow">{stack.eyebrow}</p>
            <h2 className="section-heading">{stack.heading}</h2>
          </div>
          <p className="section-subtitle" style={{ maxWidth: 460 }}>
            {stack.subtitle}
          </p>
        </div>

        <div className="stack-grid">
          {stack.categories.map((category) => (
            <div
              key={category.id}
              className={`tech-card stack-card accent-${category.accent}`}
            >
              <div className="stack-card-header">
                <span className="stack-dot" />
                <h3 className="stack-cat-title">{category.title}</h3>
              </div>

              <div className="stack-items-wrap">
                {category.items.map((item) => (
                  <span key={item.name} className="stack-item-pill">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={`stack-item-icon ${item.invertDark ? "invert-dark" : ""}`}
                        loading="lazy"
                      />
                    ) : (
                      <span className="stack-item-badge">{item.badge}</span>
                    )}
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
