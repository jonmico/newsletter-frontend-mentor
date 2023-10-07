import styled from 'styled-components';
import Header from './Header';
import List from './List';
import Email from './Email';
import Button from './Button';
import Subheader from './Subheader';

const StyledContent = styled.div`
  padding: 0 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function Content() {
  return (
    <StyledContent>
      <Header />
      <Subheader />
      <List />
      <Email />
      <Button />
    </StyledContent>
  );
}
