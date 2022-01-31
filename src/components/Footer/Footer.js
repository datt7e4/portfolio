import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

import { iconURLs } from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:206-355-5193">206-355-5193</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:datt7e4@gmail.com">datt7e4@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"It is never wrong to do the right thing"</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={iconURLs.gitHub} target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={iconURLs.linkedIn} target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href={iconURLs.other} target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
