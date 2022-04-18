import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { resumeLink } from "../../constants/constants";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(resumeLink);
  };
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            My name is Dat Tran, I'm a Web Developer
          </SectionTitle>
          <SectionText>
            Full-stack web developer who wants to join an emerging brand and
            help them transform the traditional web application into the
            blockchain.
          </SectionText>
          <Button onClick={handleClick}>View Resume</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
