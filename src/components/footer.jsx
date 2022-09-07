import styled from "@emotion/styled";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const today = new Date();

export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <span>Copyright &copy; {today.getFullYear()} Block Office</span>
    </FooterContainer>
  );
};
