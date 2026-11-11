import React, { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { MdKeyboardArrowUp } from "react-icons/md";
import styled from "@emotion/styled";
import { useLanguage } from "../../context/LanguageContext";
import { getPortfolioContent } from "../../data/portfolioData";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 45;
  background-color: #0F172A !important;
  border: 1px solid rgba(34, 197, 94, 0.4) !important;
  box-shadow: 0 10px 25px -8px rgba(2, 6, 23, 0.9);
  transition: transform 0.2s ease, background-color 0.2s ease !important;

  &:hover {
    background-color: #22C55E !important;
    transform: translateY(-2px);
    svg {
      color: #0B132B !important;
    }
  }
`;

export default function ScrollToTop() {
  const [shouldRender, setShouldRender] = useState(false);
  const { lang } = useLanguage();
  const { scrollToTop } = getPortfolioContent(lang);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShouldRender(window.scrollY > 420);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!shouldRender) return null;

  return (
    <Tooltip title={scrollToTop} placement="left">
      <StyledIconButton size="medium" aria-label={scrollToTop} onClick={handleClick}>
        <MdKeyboardArrowUp size={26} color="#22C55E" />
      </StyledIconButton>
    </Tooltip>
  );
}
