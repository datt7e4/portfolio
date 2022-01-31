import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My name is Dat Tran, <br />
          I'm a Back-end Developer
        </SectionTitle>
        <SectionText>
          Full-stack web developer who wants to join an emerging brand and help
          them transform the traditional web application into the blockchain.
        </SectionText>
        <Button onClick={props.handleClick}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
