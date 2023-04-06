import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { GiMaterialsScience } from "react-icons/gi";
import { FaLeaf,FaWheelchair } from "react-icons/fa";
import {MdOutlineMenuBook} from "react-icons/md"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(
  SubheadingBase
)`text-2xl sm:text-2xl lg:text-2xl text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-teal-900	`;

const Features = tw.div`mt-8 max-w-lg mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto mr-5 inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`w-full font-bold text-sm mt-2 text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm`;
const mydiv = tw.div`mr-5 ml-5`;
const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`flex flex-col md:flex-row mt-3`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  subheading = "Industries",
  heading = (
    <>
      Our
      <span tw="text-primary-500"> Expertise</span> Across Various
      <span tw="text-primary-500"> Verticals</span> .
    </>
  ),
  description = "TMD Tech Solutions takes pride in the fact that nearly all of the company's employees have an experience of 2 years or more.",
  primaryButtonText = "See Our Portfolio",
  primaryButtonUrl = "https://tmdtechsolutionsusa.com",
  features = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: GiMaterialsScience,
      title: "Life Sciences, Healthcare, Biotech & Pharmaceuticals",
    },
    {
      Icon: FaLeaf,
      title: "Financial, Mortgage & Insurance",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: FaWheelchair,
      title: "Retirement Benefits",
      // description:
      //   "We have the best professional marketing people across the globe just to work with you.",
    },
    {
      Icon: MdOutlineMenuBook,
      title: "Education",
      // description:
      //   "We have the best professional marketing people across the globe just to work with you.",
    },
    {
      Icon: MoneyIcon,
      title: "Telecommunications/Wireless",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Retail/eCommerce",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Manufacturing/ Distribution",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Transportation",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Information Technology/Software Development",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Government",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Consumer Products",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Entertainment & Media",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
    {
      Icon: MoneyIcon,
      title: "Utilities/Energy",
      // description:
      //   "We promise to offer you the best rate we can - at par with the industry standard.",
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={TeamIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Description>
              With such an intellectual asset it makes very easy for Global
              Insights to serve our clients efficiently across various industry
              verticals.
            </Description>
            <Description>
              TMD Tech Solutions's Employees have a rich domain Expertise in the
              following sectors
            </Description>
            {features.map((feature, index) => (
              <LinkListItem>
                <FeatureIconContainer>
                <feature.Icon />
                </FeatureIconContainer>
                <FeatureHeading>{feature.title}</FeatureHeading>
              </LinkListItem>
            ))}
            {/* <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>
                    {<feature.Icon />}
                  </FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features> */}
            <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
