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
`;

export default function Card() {
  return (
    <StyledCard>
      <Content />
      <Image />
    </StyledCard>
  );
}
