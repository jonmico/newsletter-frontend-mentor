import styled from 'styled-components';
import MediaQuery from 'react-responsive';

// const StyledImageDesktop = styled.img`
//   height: 100%;
//   max-height: 650px;
//   width: 100%;

//   @media only screen and (max-width: 675px) {
//     display: none;
//   }
// `;

// const StyledImageMobile = styled.img`
//   display: none;

//   @media only screen and (max-width: 675px) {
//     display: inherit;

//     height: 100%;
//     max-height: 650px;
//     width: 100%;
//   }
// `;

const StyledImage = styled.img`
  display: inherit;
  height: 100%;
  max-height: 650px;
  width: 100%;
`;

export default function Image() {
  return (
    <div>
      <MediaQuery minWidth={676}>
        <StyledImage
          src={'illustration-sign-up-desktop.svg'}
          alt='Sign Up Desktop Image'
        />
      </MediaQuery>
      <MediaQuery maxWidth={675}>
        <StyledImage
          src={'illustration-sign-up-mobile.svg'}
          alt='Sign Up Mobile Image'
        />
      </MediaQuery>
    </div>
  );
}
