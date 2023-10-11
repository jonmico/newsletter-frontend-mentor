import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--color-dark-slate-grey);
  color: var(--color-white);
  font-weight: 700;
  padding: 1rem;
  border: none;
  border-radius: 7px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
  }

  @media only screen and (max-width: 675px) {
    font-size: 1rem;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
