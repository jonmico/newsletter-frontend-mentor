import styled from 'styled-components';

const StyledImage = styled.img`
  height: 100%;
  max-height: 650px;
  width: 100%;
`;

export default function Image() {
  return (
    <div>
      <StyledImage
        src='illustration-sign-up-desktop.svg'
        alt='Sign Up Desktop Image'
      />
    </div>
  );
}
