import styled from 'styled-components';
import Content from '../components/Content';
import Image from '../components/Image';

const StyledStayUpdated = styled.div`
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

  @media only screen and (max-width: 675px) {
    flex-direction: column-reverse;
    width: 375px;
    min-width: 375px;
    padding: 0;
    border-radius: 0;
  }
`;

interface StayUpdatedProps {
  handleChangeEmail: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StayUpdated({ handleChangeEmail }: StayUpdatedProps) {
  return (
    <StyledStayUpdated>
      <Content />
      <Image />
    </StyledStayUpdated>
  );
}
