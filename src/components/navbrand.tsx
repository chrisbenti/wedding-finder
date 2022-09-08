import styled from "@emotion/styled";

const NavBrandLink = styled.a`
  text-decoration: none;
`;

const NavBrandTextContainer = styled.div`
  display: block;
  letter-spacing: 0.05rem;
  text-align: left;
  vertical-align: middle;
  line-height: 0.85;
`;

const NavBrandText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: black;
`;

const NavBrandImg = styled.img`
  width: 30px;
  margin-right: 0.6em;
`;

const NavBrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBrand = () => {
  return (
    <NavBrandContainer>
      <NavBrandImg src="img/cute-owl.svg" alt="logo" />
      <NavBrandLink href="#page-top">
        <NavBrandTextContainer>
          <NavBrandText>Hoos Who</NavBrandText>
        </NavBrandTextContainer>
      </NavBrandLink>
    </NavBrandContainer>
  );
};
