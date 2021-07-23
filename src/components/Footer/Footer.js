import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegram} from "react-icons/fa";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call
        </LinkTitle>
        <LinkItem href="tel:0632035740">(063)-203-57-40</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email
        </LinkTitle>
        <LinkItem href="mailto:yarykomm@gmail.com">yarykomm@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Open to new offers
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https:/github.com/yaroslavom/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https:/linkedin.com/in/yaroslavom">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https:/t.me/yaroslavom">
        <FaTelegram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https:/instagram.com/yaroslavom/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
