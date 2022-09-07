import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../../colors";
import { NavBrand } from "./navbrand";

const NavFixedPositon = styled.div`
  // position: fixed;
  width: 100%;
  // max-width: 1440px;
  top: 0;
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
`;

const NavLeft = styled.nav`
  display: flex;
`;

const NavRight = styled.nav`
  display: flex;
`;

const Nav = ({ left, right }: { left: React.ReactNode; right: React.ReactNode }) => {
  return (
    <NavFixedPositon>
      <NavContainer>
        <NavLeft>{left}</NavLeft>
        <NavRight>{right}</NavRight>
      </NavContainer>
    </NavFixedPositon>
  );
};

const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  border-radius: 0;
  margin: 0em 1.5em 0 0;
  text-decoration: none;
`;

const NavCTA = styled.div`
  padding: 0.8em 2em;
  border-radius: 0.2em;
  background: ${COLORS.NAVY};
`;

export const Navigation = () => {
  return (
    <Nav
      left={<NavBrand />}
      right={
        <>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">
            <NavCTA>Join waitlist</NavCTA>
          </NavLink>
        </>
      }
    />
  );
};
