import styled from 'styled-components';

const StyledImageDesktop = styled.img`
  height: 100%;
  max-height: 650px;
  width: 100%;

  @media only screen and (max-width: 675px) {
    display: none;
  }
`;

const StyledImageMobile = styled.img`
  display: none;

  @media only screen and (max-width: 675px) {
    display: inherit;

    height: 100%;
    max-height: 650px;
    width: 100%;
  }
`;

export default function Image() {
  return (
    <div>
      <StyledImageDesktop
        src='illustration-sign-up-desktop.svg'
        alt='Sign Up Desktop Image'
      />
      <StyledImageMobile
        src='illustration-sign-up-mobile.svg'
        alt='Sign Up Mobile Image'
      />
    </div>
  );
}
