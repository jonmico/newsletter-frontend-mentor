import styled from 'styled-components';

const StyledLI = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
`;

const StyledImage = styled.img`
  width: 18px;
`;

interface ListItemProps {
  children: React.ReactNode;
}

export default function ListItem({ children }: ListItemProps) {
  return (
    <StyledLI>
      <StyledImage src={'icon-list.svg'} />
      <span>{children}</span>
    </StyledLI>
  );
}
