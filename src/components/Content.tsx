import styled from 'styled-components';
import Header from './Header';
import List from './List';
import Email from './Email';

import Subheader from './Subheader';

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
  return (
    <StyledContent>
      <Header />
      <Subheader />
      <List />
      <Email />
    </StyledContent>
  );
}
