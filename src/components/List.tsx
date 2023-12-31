import styled from 'styled-components';

import ListItem from './ListItem';

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media only screen and (max-width: 950px) {
    gap: 0.5rem;
  }

  @media only screen and (max-width: 675px) {
    gap: 0.75rem;
  }
`;

export default function List() {
  return (
    <StyledUL>
      <ListItem>Product discovery and building what matters</ListItem>
      <ListItem>Measuring to ensure updated are a success</ListItem>
      <ListItem>And much more!</ListItem>
    </StyledUL>
  );
}
