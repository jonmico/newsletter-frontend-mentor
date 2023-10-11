import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-weight: 400;
  font-size: 1rem;

  @media only screen and (max-width: 950px) {
    font-size: 0.85rem;
  }

  @media only screen and (max-width: 675px) {
    font-size: 1rem;
  }
`;

export default function Subheader() {
  return (
    <StyledH2>
      Join 60,000+ product managers receiving monthly updates on:
    </StyledH2>
  );
}
