import styled from 'styled-components';

const StyledEmail = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-weight: 700;
  color: var(--color-dark-slate-grey);
  font-size: 0.85rem;
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
`;

export default function Email() {
  return (
    <StyledEmail>
      <Label htmlFor='email'>Email address</Label>
      <Input type='email' placeholder={'email@company.com'} />
    </StyledEmail>
  );
}
