import React from "react";
import { FiCloud, FiCode, FiCpu } from "react-icons/fi";
import { engineeringPillars, profile } from "../../data/portfolioData";
import { useRealtimeAge } from "../../hooks/useRealtimeAge";
import "./About.css";

const pillarIcons = {
  "fullstack-erp": FiCode,
  salesforce: FiCloud,
  "ai-driven": FiCpu,
};

export default function About() {
  const age = useRealtimeAge(profile.birthDate);

  return (
    <section id="sobre" className="about-section section-band">
      <div className="container-olivario">
        <div className="about-header">
          <p className="section-eyebrow">Sobre Mim</p>
          <h2 className="section-heading">
            Desenvolvimento Full Stack orientado a resolver problemas reais.
          </h2>
          <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
            Sistemas internos de ponta a ponta, integrações corporativas e engenharia moderna com
            foco em qualidade e entrega contínua.
          </p>
        </div>

        <div className="about-bio-grid">
          <div className="tech-card about-story-card">
            <p className="about-story-text">
              Sou <strong>{profile.fullName}</strong>, tenho{" "}
              <strong style={{ color: "#22C55E" }}>{age.years} anos</strong> (nascido em{" "}
              {profile.birthLabel}) e sou natural de <strong>Patos de Minas, MG</strong>.
              Graduado em <strong>Sistemas de Informação pelo UNIPAM</strong> (2023), atuo como{" "}
              <strong>Desenvolvedor Full Stack no Grupo Setta</strong>.
            </p>

            <p className="about-story-text">
              Construo sistemas internos completos de ponta a ponta — incluindo{" "}
              <strong>CRM próprio, portais de BI, integrações com o ERP TOTVS Protheus</strong> e
              com a plataforma <strong>Microsoft (Entra ID, Power BI Embedded e SharePoint)</strong>.
              Também trabalho com o ecossistema <strong>Salesforce (Apex, Flows, SF CLI, DevOps Center)</strong>,
              conduzindo a evolução e migração de processos comerciais para aplicações próprias.
            </p>

            <p className="about-story-text">
              Utilizo <strong>AI-Driven Engineering</strong> no dia a dia com{" "}
              <strong>Claude Code e servidores MCP</strong> para acelerar entregas, sempre aliado
              a revisão de código, boas práticas de arquitetura e testes automatizados com{" "}
              <strong>Vitest e Playwright</strong>.
            </p>
          </div>

          <div className="tech-card about-facts-card">
            <div>
              <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>
                Ficha Técnica
              </p>

              <div className="about-fact-row">
                <span className="about-fact-key">Idade (Tempo Real)</span>
                <span className="about-fact-val mono-olive">
                  {age.years}a {age.months}m {String(age.days).padStart(2, "0")}d ·{" "}
                  {age.formattedClock}
                </span>
              </div>

              <div className="about-fact-row">
                <span className="about-fact-key">Nascimento</span>
                <span className="about-fact-val">06 de agosto de 1998</span>
              </div>

              <div className="about-fact-row">
                <span className="about-fact-key">Cargo Atual</span>
                <span className="about-fact-val">Desenvolvedor Full Stack</span>
              </div>

              <div className="about-fact-row">
                <span className="about-fact-key">Empresa</span>
                <span className="about-fact-val">Grupo Setta</span>
              </div>

              <div className="about-fact-row">
                <span className="about-fact-key">Formação</span>
                <span className="about-fact-val">Sistemas de Informação • UNIPAM</span>
              </div>

              <div className="about-fact-row">
                <span className="about-fact-key">Idiomas</span>
                <span className="about-fact-val">Português (Nativo) • Inglês (Interm.)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pillars-grid">
          {engineeringPillars.map((pillar) => {
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
