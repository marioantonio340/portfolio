import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { profile, projectCategories, projectsList } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [repoMap, setRepoMap] = useState({});
  const [publicRepoCount, setPublicRepoCount] = useState(19);

  useEffect(() => {
    let active = true;

    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?per_page=30`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !Array.isArray(data)) return;
        const map = {};
        data.forEach((repo) => {
          map[repo.name.toLowerCase()] = repo;
        });
        setRepoMap(map);
        if (data.length > 0) {
          setPublicRepoCount(data.length);
        }
      })
      .catch(() => {
        // Fallback silencioso para dados estáticos locais
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  return (
    <section id="projetos" className="projects-section section-band">
      <div className="container-olivario">
        <div className="projects-top-bar">
          <div>
            <p className="section-eyebrow">Portfólio & Código Aberto</p>
            <h2 className="section-heading">Projetos e entregas em destaque.</h2>
            <p className="section-subtitle" style={{ marginTop: "0.6rem", maxWidth: 580 }}>
              Seleção de soluções web, APIs, containers e aplicativos publicados no meu GitHub e
              na Olivario Software.
            </p>
          </div>

          <div className="projects-filters" role="tablist" aria-label="Filtrar projetos">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-pill ${activeCategory === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const meta = project.repoName
              ? repoMap[project.repoName.toLowerCase()]
              : undefined;
            return <ProjectCard key={project.id} project={project} repoMeta={meta} />;
          })}
        </div>

        <div className="projects-github-footer">
          <div>
            <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }}>
              Quer explorar mais código?
            </p>
            <p style={{ color: "#94A3B8", fontSize: "0.85rem", marginTop: "0.2rem" }}>
              +{publicRepoCount} repositórios públicos no GitHub cobrindo TypeScript, Node.js,
              Docker, C# e Kotlin.
            </p>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-slate"
            style={{ padding: "0.65rem 1.15rem", fontSize: "0.85rem" }}
          >
            <FaGithub size={16} />
            github.com/{profile.githubUsername}
            <FiArrowUpRight size={15} color="#22C55E" />
          </a>
        </div>
      </div>
    </section>
  );
}
