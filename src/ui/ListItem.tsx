import styled from 'styled-components';

const StyledLI = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  @media only screen and (max-width: 950px) {
    font-size: 0.85rem;
    gap: 0.75rem;
  }
`;

const StyledImage = styled.img`
  width: 18px;

  @media only screen and (max-width: 950px) {
    width: 16px;
  }
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
