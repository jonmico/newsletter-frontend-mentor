import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function AppLayout() {
  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  );
}
