import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/SimpleFiveColumn";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import WhoWeAre from "components/features/TwoColSingleFeatureWithStats2"
import KeyFeatures from "components/features/DashedBorderSixFeatures";

export default () => {
  return (
    <AnimationRevealPage style={{"padding-bottom":"0","padding-top":"0"}}>
      <Hero showHeader={true}/>
      <WhoWeAre style={{"padding-bottom":"0","padding-top":"0"}}/>
      <KeyFeatures  />
      <Footer />
    </AnimationRevealPage>
  );
}
