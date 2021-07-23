import React from "react";
import { DiBootstrap, DiReact} from "react-icons/di";
import { SiRedux } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListTitle,
  ImageContainer
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with web technologies:</SectionText>
    <List >
      <ListItem>
        <ImageContainer><DiReact size="3rem" /></ImageContainer>
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
      <ImageContainer><SiRedux size="2.5rem" style={{margin: "3px 0"}}/></ImageContainer>
        <ListContainer>
          <ListTitle>Redux</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
      <ImageContainer><DiBootstrap size="3rem" /></ImageContainer>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
