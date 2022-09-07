import React from "react";
import styled from "@emotion/styled";

const NavFixedPositon = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1440px;
  top: 0;
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 0 1em 0;
  background: #fff;
`;

const NavBrandLink = styled.a`
  text-decoration: none;
`;

const NavBrandTextContainer = styled.div`
  display: block;
  letter-spacing: 0.05rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1.42857143;
`;

const NavBrandText = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #333;
`;

const NavBrandImg = styled.img`
  width: 40px;
  margin-left: 0.6em;
`;

const NavLink = styled.a`
  color: #555;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 2px;
  border-radius: 0;
  margin: 0em 1.5em;
  text-decoration: none;
`;

const Logo = styled.nav`
  display: flex;
`;

const NavRight = styled.nav`
  display: flex;
`;

const NavBrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = ({ left, right }: { left: React.ReactNode; right: React.ReactNode }) => {
  return (
    <NavFixedPositon>
      <NavContainer>
        <Logo>{left}</Logo>
        <NavRight>{right}</NavRight>
      </NavContainer>
    </NavFixedPositon>
  );
};

const NavBrand = () => {
  return (
    <NavBrandContainer>
      <NavBrandLink href="#page-top">
        <NavBrandTextContainer>
          <NavBrandText className="serif">COMPANY NAME</NavBrandText>
        </NavBrandTextContainer>
      </NavBrandLink>
      <NavBrandImg src="img/logo.png" width="40px" alt="logo" />
    </NavBrandContainer>
  );
};

export const Navigation = () => {
  return (
    <Nav
      left={<NavBrand />}
      right={
        <>
          <NavLink className="nav-link page-scroll" href="#about">
            ABOUT
          </NavLink>
          <NavLink className="nav-link page-scroll" href="#contact">
            CONTACT
          </NavLink>
        </>
      }
    />
  );
};
