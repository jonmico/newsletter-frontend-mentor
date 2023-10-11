import styled from 'styled-components';
import { useEmail } from '../contexts/EmailContext';

const StyledEmail = styled.form`
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media only screen and (max-width: 950px) {
    padding-top: 0.5rem;
  }

  @media only screen and (max-width: 675px) {
    padding-top: 1.25rem;
  }
`;

const Label = styled.label`
  font-weight: 700;
  color: var(--color-dark-slate-grey);
  font-size: 0.85rem;

  @media only screen and (max-width: 950px) {
    font-size: 0.75rem;
  }
`;

const Input = styled.input`
  height: 2.75rem;
  border-radius: 5px;
  padding: 1rem 1.25rem;
  border: 1px solid var(--color-grey-light);
  outline: none;
  color: var(--color-charcoal-grey);
  cursor: pointer;

  &:active,
  &:focus {
    border: 1px solid var(--color-charcoal-grey);
  }

  @media only screen and (max-width: 675px) {
    height: 3.5rem;
    font-size: 1rem;
  }
`;

export default function Email() {
  const { email, handleChangeEmail } = useEmail();

  return (
    <StyledEmail>
      <Label htmlFor='email'>Email address</Label>
      <Input
        type='email'
        value={email}
        onChange={handleChangeEmail}
        placeholder={'email@company.com'}
      />
    </StyledEmail>
  );
}
