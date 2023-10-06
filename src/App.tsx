import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

import Card from './ui/Card';

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-charcoal-grey);
`;

export default function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Card />
    </StyledApp>
  );
}
