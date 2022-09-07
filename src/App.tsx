import { Navigation } from "./components/navigation/navigation";
import { Splash } from "./components/splash";
import { AboutV2 } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import styled from "@emotion/styled";
import { ColorKey, COLORS, getColor } from "./colors";
import { useBackgroundColor } from "./hooks/useBackgroundColor";
import { useTextColor } from "./hooks/useTextColor";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true
});

const BoundingBox = ({ maxWidth, children }: { maxWidth: string; children: React.ReactNode }) => {
  return <div style={{ width: "100%", maxWidth }}>{children}</div>;
};

const CenteredPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RainbowContainer = styled.div`
  background-image: url("img/banner.svg");
  background-size: cover;
  padding-bottom: 300px;
  width: 100vw;
`;

const CurveContainer = styled.div`
  background-image: url("img/curve.svg");
  background-position: top center;
  background-size: cover;
  position: relative;
  top: -200px;
  padding-top: 50px;
  width: 100vw;
`;

const App = () => {
  useBackgroundColor(getColor(ColorKey.BACKGROUND));
  useTextColor(getColor(ColorKey.PRIMARY));
  return (
    <>
      <RainbowContainer>
        <CenteredPageContainer>
          <BoundingBox maxWidth={"1440px"}>
            <Navigation />
            <BoundingBox maxWidth="100%">
              <Splash />
            </BoundingBox>
            <BoundingBox maxWidth="100%">
              <Contact />
            </BoundingBox>
          </BoundingBox>
        </CenteredPageContainer>
      </RainbowContainer>
      <CurveContainer>
        <CenteredPageContainer>
          <BoundingBox maxWidth="1440px">
            <BoundingBox maxWidth="100%">
              <AboutV2 />
            </BoundingBox>
            <BoundingBox maxWidth="100%">
              <Footer />
            </BoundingBox>
          </BoundingBox>
        </CenteredPageContainer>
      </CurveContainer>
    </>
  );
};

export default App;
