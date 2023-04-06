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
import TwoColWithTwoFeaturesAndButtons from "components/features/TwoColWithTwoFeaturesAndButtons";
import GetStarted from "components/cta/GetStarted";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero showHeader={true} />
      <TwoColWithTwoFeaturesAndButtons />
      <GetStarted
      primaryLinkText="Contact Us"
      primaryLinkUrl="/contact-us"
      secondaryLinkText="Get Started"
      secondaryLinkUrl="/career"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
