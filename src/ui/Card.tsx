import styled from 'styled-components';
import Content from './Content';
import Image from './Image';

const StyledCard = styled.div`
  background-color: var(--color-white);
  width: 900px;
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 950px) {
    width: 650px;
  }
`;

export default function Card() {
  return (
    <StyledCard>
      <Content />
      <Image />
    </StyledCard>
  );
}
