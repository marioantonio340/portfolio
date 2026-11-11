import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styled from "@emotion/styled";
import { profile } from "../../data/portfolioData";

const SocialContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 1.25rem;
  transform: translateY(-50%);
  z-index: 40;
  display: none;

  @media (min-width: 1320px) {
    display: block;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.65rem;
    border-radius: 9999px;
    background: rgba(15, 23, 42, 0.82);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(30, 41, 59, 0.9);
  }

  a {
    width: 38px;
    height: 38px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #94a3b8;
    transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: #22c55e;
      background: rgba(34, 197, 94, 0.12);
      transform: translateY(-1px);
    }
  }
`;

export default function FixSocialIcon() {
  return (
    <SocialContainer aria-label="Redes sociais">
      <ul>
        <li>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${profile.email}`}
            aria-label="E-mail"
            title={profile.email}
          >
            <FiMail />
          </a>
        </li>
      </ul>
    </SocialContainer>
  );
}
