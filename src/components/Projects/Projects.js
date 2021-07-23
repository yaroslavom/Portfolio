import React from "react";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  ButtonFront
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Button from "../../styles/GlobalComponents/Button";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider divider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ description, tags, source, title, image, id }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <Button alt onClick={()=>(window.location = source)}>
              Source
            </Button>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
