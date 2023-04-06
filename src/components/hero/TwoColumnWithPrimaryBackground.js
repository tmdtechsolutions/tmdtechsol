import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase,
} from "../headers/light.js";
import {
  Container as ContainerBase,
  ContentWithVerticalPadding,
  Content2Xl,
} from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/logo-light.svg";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(
  NavLinkBase
)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(
  PrimaryLinkBase
)`ml-4 mr-3 shadow-raised lg:bg-orange-600 lg:hocus:bg-orange-400	`;
// const PrimaryLink = tw(PrimaryLinkBase)`ml-4 mr-3 shadow-raised lg:bg-orange-600 lg:hocus:bg-orange-400	`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(
  SectionHeading
)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(
  SectionDescription
)`mt-4 max-w-4xl  lg:text-base mx-auto lg:mx-0 text-gray-300`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 mb-2 mr-2 ml-2 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`;

export default ({
  heading = "TMD Tech Solutions USA",
  description = "TMD Tech Solutions provides IT business solutions to clients worldwide. Our primary goal is to provide high quality and cost effective business solutions and consulting services.",
  primaryButtonText = "Contact Us",
  primaryButtonText2 = "Join the team",
  primaryButtonUrl = "#",
  imageSrc = serverIllustrationImageSrc,
  showHeader = false,
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      TMD Tech Solutions USA
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/who-we-are">Who we are</NavLink>
      <NavLink href="/what-we-offer">What we offer</NavLink>
      <NavLink href="/industries">Industries</NavLink>
      <NavLink href="/news-and-events">News & Events</NavLink>
      <PrimaryLink href="/careers">Careers</PrimaryLink>
      <PrimaryLink href="/contact-us">Contactus</PrimaryLink>
    </NavLinks>,
  ];

  if(showHeader){
    return(
      <Header showHeader={showHeader} logoLink={logoLink} links={navLinks} />
    )
  }
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
      <Header showHeader={showHeader} logoLink={logoLink} links={navLinks} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <PrimaryButton as="a" href={'/careers'}>
                  {primaryButtonText2}
                </PrimaryButton>
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
