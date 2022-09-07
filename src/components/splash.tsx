import styled from "@emotion/styled";

const SplashContainer = styled.div`
  margin: 12rem 0 0;
`;

const SplashTextContainer = styled.div`
  display: block;
  text-align: center;
  color: #fff;
`;

const TagLine = styled.div`
  font-size: 3.25em;
  font-weight: 500;
`;

const OneLiner = styled.div`
  font-size: 1em;
  font-weight: 300;
  margin-top: 1em;
`;

export const Splash = () => {
  return (
    <SplashContainer>
      <SplashTextContainer>
        <TagLine>Your dedicated back office</TagLine>
        <OneLiner>We simplify the complexity and hassle of managing your own team</OneLiner>
      </SplashTextContainer>
    </SplashContainer>
  );
};
