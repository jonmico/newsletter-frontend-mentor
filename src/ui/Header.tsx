import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 3.25rem;
  color: var(--color-dark-slate-grey);
`;

export default function Header() {
  return <StyledH1>Stay updated!</StyledH1>;
}
