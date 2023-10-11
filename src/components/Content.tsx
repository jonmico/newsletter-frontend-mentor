import styled from 'styled-components';
import Header from './Header';
import List from './List';
import Email from './Email';
import Button from './Button';
import Subheader from './Subheader';

import { useNavigate } from 'react-router-dom';

const StyledContent = styled.div`
  padding: 0 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (max-width: 950px) {
    gap: 1rem;
  }

  @media only screen and (max-width: 675px) {
    padding: 2rem 1.5rem 2.5rem 1.5rem;
    gap: 1.5rem;
  }
`;

export default function Content() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/registered');
  }

  return (
    <StyledContent>
      <Header />
      <Subheader />
      <List />
      <Email />
      <Button onClick={handleClick}>Subscribe to monthly newsletter</Button>
    </StyledContent>
  );
}
