import styled from 'styled-components';
import useEmail from '../hooks/useEmail';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

const Input = styled.input<{ $error: string }>`
  height: 2.75rem;
  border-radius: 5px;
  padding: 1rem 1.25rem;

  outline: none;
  margin-bottom: 1.25rem;
  color: ${(props) =>
    props.$error ? `var(--color-primary)` : `var(--color-charcoal-grey)`};

  cursor: pointer;

  border: ${(props) =>
    props.$error
      ? `1px solid var(--color-primary)`
      : `1px solid var(--color-grey-light)`};

  background-color: ${(props) =>
    props.$error ? `var(--color-primary-light)` : ''};

  &:active,
  &:focus {
    border: 1px solid var(--color-charcoal-grey);
  }

  @media only screen and (max-width: 675px) {
    height: 3.5rem;
    font-size: 1rem;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Error = styled.span`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.85rem;

  @media only screen and (max-width: 950px) {
    font-size: 0.75rem;
  }
`;

export default function Email() {
  const { email, handleChangeEmail } = useEmail();
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setEmailError('');

    if (!email || !email.includes('@')) {
      setEmailError('Valid email required.');
      return;
    }

    navigate('/registered');
  }

  return (
    <StyledEmail onSubmit={handleSubmit}>
      <LabelContainer>
        <Label htmlFor='email'>Email address</Label>
        {emailError && <Error>{emailError}</Error>}
      </LabelContainer>
      <Input
        $error={emailError}
        type='text'
        value={email}
        onChange={handleChangeEmail}
        placeholder={'email@company.com'}
      />
      <Button>Subscribe to monthly newsletter</Button>
    </StyledEmail>
  );
}
