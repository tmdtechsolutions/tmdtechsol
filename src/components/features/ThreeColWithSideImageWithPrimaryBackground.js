import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(
  SectionDescription
)`max-w-4xl  lg:text-base w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
  cards = null,
  heading = "What we offer",
  subheading = "",
  description = "To stay ahead of the game, TMD Tech Solutions uses the latest technologies and techniques as well as brings together both line-of-business and multi-platform expertise. An in-depth knowledge of various technology areas enables us to provide end-to-end solutions and services. All our services are designed to quickly deliver solutions that create lasting value and enhance efficiency and profits for our esteemed clients",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "IT Staff Augmentation",
      description:
        "TMD Tech Solutions can improve the competitiveness of clients through a set of consulting practices that result in knowledge-intensive business solutions.. ",
    },
    {
      imageSrc: SupportIconImage,
      title: "Software Quality Assurance",
      description:
        "All companies have already realized the benefits of Software Quality Assurance (SQA). However, concerns over quality, cost and project management can make this a difficult decision..",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Business Analysis",
      description:
        "TMD Tech Solutions Business Analysis takes a pragmatic, face-to-face approach, performing research and analysis through observation, interviews, design workshops and focus groups.  ",
    },
    {
      imageSrc: ReliableIconImage,
      title: "Application Development",
      description:
        "In contrast with most systems integrators, TMD Tech Solutions develops most of the technology it sells. ",
    },
    {
      imageSrc: FastIconImage,
      title: "Computer System Validation",
      description:
        "TMD Tech Solutions has become a recognized leader in providing a variety of compliance services to the Life Sciences/Pharmaceutical/Biotech Industry.. ",
    },
    {
      imageSrc: SimpleIconImage,
      title: "Project Management",
      description:
        "When deadlines are pressing and resources are tight, but the stakes are high, you will need highly experienced project management professionals that serve as an extension of your staff to help support and manage your project initiatives..",
    },
    {
      imageSrc: SimpleIconImage,
      title: "CRM Implementation",
      description:
        "Choosing the right CRM for your needs is the first step, the second step is to implement the new solution in a proper method. Implementation is one of the most complex, and often neglected aspect of a successful CRM launch.. ",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
