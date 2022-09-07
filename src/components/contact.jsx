import styled from "@emotion/styled";
import { COLORS } from "../colors";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0 2em 0;
`;

const EmailBox = styled.div`
  background: #fff;
  border-radius: 0.2em;
  display: flex;
  padding: 0.25em;
  justify-content: space-between;
`;

const EmailInput = styled.input`
  color: #000;
  margin: 0 1em 0 1em;
  background: none;
  border: 0;
  size: 100;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bababa;
    font-family: "Heebo", sans-serif;
    font-weight: 300;
  }
`;

const CTA = styled.button`
  padding: 0.75em 2em;
  border-radius: 0.2em;
  background: ${COLORS.NAVY};
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Contact = () => {
  return (
    <ContactContainer>
      <EmailBox>
        <EmailInput placeholder="Enter email address" size={35} />
        <CTA>Join waitlist</CTA>
      </EmailBox>
    </ContactContainer>
  );
};
