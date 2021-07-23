import React from "react";

import { AiFillHeart } from "react-icons/ai";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello!
        <br />
        My name is Yaroslav
        <br />I like React{" "}
        <span>
          <AiFillHeart color="D63B2F" size="4rem"/>
        </span>
      </SectionTitle>
      <SectionText>
        I approach tasks with creative and linear thinking
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/yaroslavom")}
      >
        Open GitHub
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
