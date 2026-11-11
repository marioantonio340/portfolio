import React from "react";
import { FiArrowUpRight, FiCode, FiFolder, FiGlobe, FiServer, FiSmartphone, FiStar } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const categoryIcons = {
  web: FiGlobe,
  api: FiServer,
  mobile: FiSmartphone,
};

export default function ProjectCard({ project, repoMeta, labels }) {
  const Icon = categoryIcons[project.category] || FiFolder;
  const stars = repoMeta?.stargazers_count ?? 0;
  const language = repoMeta?.language;

  return (
    <article className={`tech-card project-card accent-${project.accent || "olive"}`}>
      <div>
        <div className="project-card-top">
          <div className="project-icon-box">
            <Icon size={20} />
          </div>

          <div className="project-badges">
            {stars > 0 && (
              <span className="project-star-pill" title={labels.starsTooltip}>
                <FiStar size={12} /> {stars}
              </span>
            )}
            {language && (
              <span className="project-subtitle-pill" style={{ color: "#84CC16" }}>
                <FiCode size={11} style={{ display: "inline", marginRight: 4 }} />
                {language}
              </span>
            )}
            <span className="project-subtitle-pill">{project.subtitle}</span>
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>

      <div>
        <div className="project-tech-list">
          {project.tech_stack.map((tech, idx) => (
            <span key={idx} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-primary"
            >
              {labels.liveDemo} <FiArrowUpRight size={15} />
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className={project.demo_url ? "project-link-secondary" : "project-link-primary"}
            >
              <FaGithub size={15} /> {labels.viewRepo} <FiArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
