import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Stack from "../components/Stack/Stack";
import LiveActivity from "../components/LiveActivity/LiveActivity";
import Contact from "../components/Contact/Contact";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <LiveActivity />
        <Contact />
      </main>
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
