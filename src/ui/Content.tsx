import styled from 'styled-components';
import Header from './Header';
import List from './List';
import Email from './Email';
import Button from './Button';

const StyledContent = styled.div`
  padding: 0 1.5rem;
`;

export default function Content() {
  return (
    <StyledContent>
      <Header />
      <List />
      <Email />
      <Button />
    </StyledContent>
  );
}
