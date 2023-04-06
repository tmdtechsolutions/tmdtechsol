import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as Linkidm } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { FaLinkedin } from "react-icons/fa";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(
  Column
)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <Column>
          {/* <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>TMD TechSolution USA</LogoText>
          </LogoContainer> */}
          <ColumnHeading>TMD TechSolution USA</ColumnHeading>

          <CompanyDescription>
            Founded in 2021, TMD Tech Solutions has delivered number of solutions
            to over 100+ satisfied customers. Our customers have rewarded us
            with 11 consecutive years of profitable growth.
          </CompanyDescription>
          <SocialLinksContainer>
            {/* <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink> */}
          </SocialLinksContainer>
        </Column>
        <Column>
          <ColumnHeading>Contact</ColumnHeading>
          <LinkList>
            <LinkListItem>
            101 Century 21 Dr Ste 106
              <LinkListItem href="#">
              Jacksonville, FL 32216
              </LinkListItem>
            </LinkListItem>
            <LinkListItem>contactus@tmdtechsolutionsusa.com</LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>News</ColumnHeading>

          <CompanyDescription>
            {" "}
            <LinkListItem>
              TMD Tech Solutions announces an advanced End-to-End Testing
              Solution..
            </LinkListItem>
            <LinkListItem>
              TMD Tech Solutions inaugurates new corporate office.
            </LinkListItem>
          </CompanyDescription>
        </Column>

        {/* <Column>
          <LogoContainer>
            <LogoText>News</LogoText>
          </LogoContainer>
          <CompanyDescription>
            Founded in 2021, TMD Tech Solutions has delivered hundreds of solutions
            to over 1000 satisfied customers. Our customers have rewarded us
            with 11 consecutive years of profitable growth.
          </CompanyDescription>
        </Column> */}
      </FiveColumns>
    </Container>
  );
};
