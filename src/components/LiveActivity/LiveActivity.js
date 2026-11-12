import React, { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiGlobe,
  FiZap,
} from "react-icons/fi";
import { FaFire, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDuolingo, SiSalesforce } from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent, profile } from "../../data/portfolioData";
import "./LiveActivity.css";

const DUOLINGO_INITIAL = {
  streak: 668,
  totalXp: 98770,
  courseTitle: "English",
  courseXp: 98316,
  avatar:
    "https://d3gq3s1iyyx31w.cloudfront.net/static/render/bg/BackgroundColor-2/Body-2/ClothingColor-2/CostumeArtboard-56/Expression-29/EyeColor-1/FacialHair-6/FacialHairColor-1/Glasses-0/GlassesColor-1/HasCostume-1/Headwear-0/HeadwearColor-1/MainHair-69/MainHairColor-1/Nose%20Piercing-0/Piercings-0/SkinTone-5/Wrinkles-0",
};

const GITHUB_INITIAL = {
  repos: 20,
  followers: 8,
  following: 6,
  createdAt: "2018-09-18",
  recentPush: "gruposetta/assets-publicos",
};

export default function LiveActivity() {
  const { lang } = useLanguage();
  const content = getPortfolioContent(lang);
  const { activity } = content;

  const [duo, setDuo] = useState(DUOLINGO_INITIAL);
  const [duoLoading, setDuoLoading] = useState(false);
  const [gitData, setGitData] = useState(GITHUB_INITIAL);

  // Fetch Duolingo through our Worker API (falls back cleanly to verified baseline)
  useEffect(() => {
    let active = true;
    setDuoLoading(true);

    fetch(`/api/duolingo?username=${profile.duolingoUsername}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data || data.error) return;
        setDuo({
          streak: data.streak || DUOLINGO_INITIAL.streak,
          totalXp: data.totalXp || DUOLINGO_INITIAL.totalXp,
          courseTitle:
            (data.courses && data.courses[0] && data.courses[0].title) ||
            DUOLINGO_INITIAL.courseTitle,
          courseXp:
            (data.courses && data.courses[0] && data.courses[0].xp) ||
            DUOLINGO_INITIAL.courseXp,
          avatar: data.picture || DUOLINGO_INITIAL.avatar,
        });
      })
      .catch(() => {
        // Keeps verified initial data
      })
      .finally(() => {
        if (active) setDuoLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // Fetch GitHub live stats
  useEffect(() => {
    let active = true;

    fetch(`https://api.github.com/users/${profile.githubUsername}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((user) => {
        if (!active || !user) return;
        setGitData((prev) => ({
          ...prev,
          repos: user.public_repos ?? prev.repos,
          followers: user.followers ?? prev.followers,
          following: user.following ?? prev.following,
          createdAt: user.created_at
            ? user.created_at.substring(0, 10)
            : prev.createdAt,
        }));
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const memberYear = (gitData.createdAt || "2018").substring(0, 4);

  return (
    <section id="atividade" className="activity-section section-band">
      <div className="container-olivario">
        <div className="activity-header">
          <p className="section-eyebrow">{activity.eyebrow}</p>
          <h2 className="section-heading">{activity.heading}</h2>
          <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
            {activity.subtitle}
          </p>
        </div>

        <div className="activity-grid">
          {/* Duolingo Card */}
          <div className="activity-card duolingo-card">
            <div className="activity-card-glow duo-glow" />

            <div className="activity-card-top">
              <span className="activity-badge duo-badge">
                <SiDuolingo size={14} />
                {activity.duolingo.badge}
              </span>
              <span className="live-dot-wrap">
                <span className="live-dot duo-dot" />
                {duoLoading
                  ? "Syncing..."
                  : lang === "en"
                  ? "Live sync"
                  : "Ao vivo"}
              </span>
            </div>

            <div className="activity-card-content">
              <div className="activity-profile-line">
                <div className="duo-avatar-frame">
                  <img
                    src={duo.avatar}
                    alt="Duolingo Avatar"
                    className="duo-avatar-img"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="duo-flag-icon">🇺🇸</span>
                </div>
                <div>
                  <h3 className="activity-card-title">{profile.name}</h3>
                  <p className="activity-card-sub">
                    @{profile.duolingoUsername} • {duo.courseTitle}
                  </p>
                </div>
              </div>

              {/* Main metric: STREAK */}
              <div className="duo-streak-highlight">
                <div className="duo-streak-icon">
                  <FaFire size={26} />
                </div>
                <div>
                  <div className="duo-streak-val">
                    {duo.streak.toLocaleString()}{" "}
                    <span className="duo-streak-unit">
                      {lang === "en" ? "days" : "dias"}
                    </span>
                  </div>
                  <div className="duo-streak-caption">
                    {activity.duolingo.streakLabel} •{" "}
                    {lang === "en" ? "Daily habit" : "Hábito contínuo"}
                  </div>
                </div>
              </div>

              {/* Secondary metrics */}
              <div className="activity-stats-row">
                <div className="activity-stat-box">
                  <span className="activity-stat-label">
                    {activity.duolingo.xpLabel}
                  </span>
                  <span className="activity-stat-num">
                    {duo.totalXp.toLocaleString()} XP
                  </span>
                </div>
                <div className="activity-stat-box">
                  <span className="activity-stat-label">
                    {lang === "en" ? "Target" : "Meta diária"}
                  </span>
                  <span className="activity-stat-num duo-accent">
                    <FiCheckCircle size={13} style={{ marginRight: 4 }} />
                    {lang === "en" ? "Completed" : "Cumprida"}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={profile.duolingo}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-card-btn duo-btn"
            >
              <span>{activity.duolingo.viewProfile}</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="activity-card github-card">
            <div className="activity-card-glow git-glow" />

            <div className="activity-card-top">
              <span className="activity-badge git-badge">
                <FaGithub size={14} />
                {activity.github.badge}
              </span>
              <span className="live-dot-wrap">
                <span className="live-dot git-dot" />
                {lang === "en" ? "Live API" : "API Pública"}
              </span>
            </div>

            <div className="activity-card-content">
              <div className="activity-profile-line">
                <img
                  src={profile.avatarUrl}
                  alt="GitHub Avatar"
                  className="git-avatar-img"
                />
                <div>
                  <h3 className="activity-card-title">{profile.name}</h3>
                  <p className="activity-card-sub">
                    @{profile.githubUsername} • {profile.company}
                  </p>
                </div>
              </div>

              <div className="activity-stats-row three-col">
                <div className="activity-stat-box">
                  <span className="activity-stat-label">
                    {activity.github.reposLabel}
                  </span>
                  <span className="activity-stat-num">{gitData.repos}</span>
                </div>
                <div className="activity-stat-box">
                  <span className="activity-stat-label">
                    {activity.github.followersLabel}
                  </span>
                  <span className="activity-stat-num">{gitData.followers}</span>
                </div>
                <div className="activity-stat-box">
                  <span className="activity-stat-label">
                    {activity.github.sinceLabel}
                  </span>
                  <span className="activity-stat-num">{memberYear}</span>
                </div>
              </div>

              {/* GitHub Streak / Highlights */}
              <div className="git-extra-info">
                <div className="git-extra-line">
                  <FiZap size={13} color="#22C55E" />
                  <span>
                    {lang === "en" ? "Focus:" : "Foco:"}{" "}
                    <strong>TypeScript • Node.js • React • Docker</strong>
                  </span>
                </div>
                <div className="git-extra-line">
                  <FiGlobe size={13} color="#0284C7" />
                  <span>
                    {lang === "en"
                      ? "Enterprise and open-source shipping"
                      : "Engenharia corporativa e open source"}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-card-btn git-btn"
            >
              <span>{activity.github.viewProfile}</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="activity-card linkedin-card">
            <div className="activity-card-glow in-glow" />

            <div className="activity-card-top">
              <span className="activity-badge in-badge">
                <FaLinkedin size={14} />
                {activity.linkedin.badge}
              </span>
              <span className="live-dot-wrap">
                <span className="live-dot in-dot" />
                {lang === "en" ? "Professional" : "Profissional"}
              </span>
            </div>

            <div className="activity-card-content">
              <div className="activity-profile-line">
                <div className="in-avatar-wrap">
                  <FaLinkedin size={28} color="#0A66C2" />
                </div>
                <div>
                  <h3 className="activity-card-title">{profile.name}</h3>
                  <p className="activity-card-sub">
                    /in/{profile.linkedinUsername}
                  </p>
                </div>
              </div>

              <div className="in-role-box">
                <div className="in-role-title">{activity.linkedin.role}</div>
                <div className="in-company-title">
                  {activity.linkedin.company}
                </div>
                <p className="in-role-desc">
                  {lang === "en"
                    ? "Building internal enterprise systems, ERP TOTVS integrations, Salesforce, and modern full-stack web applications."
                    : "Desenvolvendo sistemas internos corporativos, integrações ERP TOTVS, Salesforce e aplicações web modernas de ponta a ponta."}
                </p>
              </div>

              <div className="in-pills-row">
                <span className="in-pill">Salesforce</span>
                <span className="in-pill">React & Next.js</span>
                <span className="in-pill">Node.js</span>
                <span className="in-pill">ERP Protheus</span>
              </div>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-card-btn in-btn"
            >
              <span>{activity.linkedin.connect}</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Trailhead - Discreto conforme solicitado */}
        <div className="trailhead-strip">
          <div className="trailhead-strip-left">
            <span className="trailhead-icon-box">
              <SiSalesforce size={22} color="#00A1E0" />
            </span>
            <div>
              <div className="trailhead-title-row">
                <span className="trailhead-badge">
                  {activity.trailhead.badge}
                </span>
                <span className="trailhead-title">
                  {activity.trailhead.title}
                </span>
              </div>
              <p className="trailhead-desc">
                {activity.trailhead.subtitle} •{" "}
                {lang === "en"
                  ? "Verified Salesforce Developer & Associate profile"
                  : "Perfil verificado de Salesforce Developer & Certified Associate"}
              </p>
            </div>
          </div>

          <a
            href={profile.trailhead}
            target="_blank"
            rel="noopener noreferrer"
            className="trailhead-link-btn"
          >
            <span>{activity.trailhead.linkText}</span>
            <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
