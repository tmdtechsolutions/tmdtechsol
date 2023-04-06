import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/SimpleFiveColumn";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";
import WhoWeAre from "components/features/TwoColSingleFeatureWithStats2";
import KeyFeatures from "components/features/DashedBorderSixFeatures";
import tw from "twin.macro";
import logo from "../images/logo-light.svg";

import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase,
} from "../components/headers/light.js";
import { Content2Xl } from "components/misc/Layouts";
import GridWithFeaturedPost from "components/blogs/GridWithFeaturedPost";
import ThreeColSimpleWithImageAndDashedBorder from "components/blogs/ThreeColSimpleWithImageAndDashedBorder";
import staff from "../images/staff.png";
import validation from "../images/validation.jpg";
import developement from "../images/developement.jpg";
import project from "../images/project.jpg";
import analysis from "../images/analysis.jpg";
import crm from "../images/crm.jpg";
import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter";

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(
  NavLinkBase
)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(
  PrimaryLinkBase
)`ml-4 mr-3 shadow-raised lg:bg-orange-600 lg:hocus:bg-orange-400	`;
const imageCss = tw`rounded-4xl`;
export default () => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logo} alt="Logo" />
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
      <PrimaryLink href="/career">Carrer</PrimaryLink>
      <PrimaryLink href="/contact-us">Contactus</PrimaryLink>
    </NavLinks>,
  ];
  const defaultCards = [
    {
        imageSrc: staff,
      title: "IT Staff Augmentation",
      description:
        "TMD Tech Solutions can improve the competitiveness of clients through a set of consulting practices that result in knowledge-intensive business solutions.. ",
    },
    {
        imageSrc: crm,
      title: "Software Quality Assurance",
      description:
        "All companies have already realized the benefits of Software Quality Assurance (SQA). However, concerns over quality, cost and project management can make this a difficult decision..",
    },
    {
        imageSrc: analysis,
      title: "Business Analysis",
      description:
        "TMD Tech Solutions Business Analysis takes a pragmatic, face-to-face approach, performing research and analysis through observation, interviews, design workshops and focus groups.  ",
    },
    {
        imageSrc: developement,
      title: "Application Development",
      description:
        "In contrast with most systems integrators, TMD Tech Solutions develops most of the technology it sells. ",
    },
    {
        imageSrc: validation,
      title: "Computer System Validation",
      description:
        "TMD Tech Solutions has become a recognized leader in providing a variety of compliance services to the Life Sciences/Pharmaceutical/Biotech Industry.. ",
    },
    {
        imageSrc: project,
      title: "Project Management",
      description:
        "When deadlines are pressing and resources are tight, but the stakes are high, you will need highly experienced project management professionals that serve as an extension of your staff to help support and manage your project initiatives..",
    },
    {
        imageSrc: crm,
      title: "CRM Implementation",
      description:
        "Choosing the right CRM for your needs is the first step, the second step is to implement the new solution in a proper method. Implementation is one of the most complex, and often neglected aspect of a successful CRM launch.. ",
    },
  ];
  return (
    <AnimationRevealPage>
      <Content2Xl>
        <Header showHeader={true} logoLink={logoLink} links={navLinks} />
        <Testimonial
          //   subheading="Testimonials"
          heading={<>What we offer ?</>}
          description="TMD Tech Solutions provides IT business solutions to clients worldwide. Our primary goal is to provide high quality and cost effective business solutions and consulting services."
          description2="To stay ahead of the game, TMD Tech Solutions uses the latest technologies and techniques as well as brings together both line-of-business and multi-platform expertise. An in-depth knowledge of various technology areas enables us to provide end-to-end solutions and services. All our services are designed to quickly deliver solutions that create lasting value and enhance efficiency and profits for our esteemed clients"
          testimonials={[]}
          textOnLeft={false}
        />
        <ThreeColSimpleWithImageAndDashedBorder data={defaultCards} />
        <SimpleSubscribeNewsletter />
        <Footer />
      </Content2Xl>
    </AnimationRevealPage>
  );
};
