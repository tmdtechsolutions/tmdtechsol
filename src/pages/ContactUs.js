import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block font-bold text-primary-500`;
const Phone = tw.span`text-sm mt-0 block font-bold text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      {/* <Header /> */}
      <Hero showHeader={true} />

      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Contact Us",
            description: (
              <>
                <Address>
                  <AddressLine>101 century 21 drive Ste 106</AddressLine>
                  <AddressLine>Jacksonville, FL 32216</AddressLine>
                </Address>
                <Email>
                contactus@tmdtechsolutionsusa.com 
                </Email>
                
              </>
            ),
          },
          {
            title: "Careers",
            description: (
              <>
                <Email>careers@tmdtechsolutionsusa.com</Email>
              </>
            ),
          },
          
          {
            title: "HR",
            description: (
              <>
                <Email>hr@tmdtechsolutionsusa.com</Email>
              </>
            ),
          },
          
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
