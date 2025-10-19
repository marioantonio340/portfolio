import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  //Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          {/*<ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.jpg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>*/}
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm <strong>Mário Fernandes</strong>, a 27-year-old tech enthusiast from Patos de Minas, Brazil. Passionate about tackling technical challenges, I graduated with a Bachelor’s in Information Systems from UNIPAM in 2023.   
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
             Since December 2023, I’ve been working in IT at Grupo Setta, providing technical support, maintaining systems, and training users. I’m proficient in Java, TypeScript, React, React Native, SQL, Python, Salesforce, and AI tools.         
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
