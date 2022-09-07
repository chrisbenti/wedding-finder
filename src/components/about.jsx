import styled from "@emotion/styled";

import { breakpoint } from "../breakpoints";
import { ColorKey, getColor } from "../colors";

const AboutContainer = styled.div`
  @media ${breakpoint.md} {
    padding: 5em 0 5em 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutText = styled.div`
  font-variant: small-caps;
  color: ${getColor(ColorKey.PRIMARY)};
  letter-spacing: 0.1em;
  font-weight: 400;
  font-size: 1.25em;
`;

const InvestorImages = styled.div`
  display: flex;
  width: 70%;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;
`;

const InvestorImage = styled.img`
  // margin: 2em;
`;

export const AboutV2 = (props) => {
  return (
    <div id="about">
      <AboutContainer>
        <AboutText>backed by investors from</AboutText>
        <InvestorImages>
          <InvestorImage src="img/partners/accel.svg" />
          <InvestorImage src="img/partners/atomico.svg" />
          <InvestorImage src="img/partners/coinbase.svg" />
          <InvestorImage src="img/partners/draper.svg" />
          <InvestorImage src="img/partners/kkr.svg" />
          <InvestorImage src="img/partners/nansen.svg" />
          <InvestorImage src="img/partners/revolut.svg" />
          <InvestorImage src="img/partners/sequoia.svg" />
          <InvestorImage src="img/partners/solana.svg" />
          <InvestorImage src="img/partners/temasek.svg" />
          <iInvestorImagemg src="img/partners/wise.svg" />
        </InvestorImages>
      </AboutContainer>
    </div>
  );
};
