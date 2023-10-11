import { createContext, useContext, useState } from 'react';

interface IEmailContext {
  email: string;
  handleChangeEmail: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailContext = createContext<IEmailContext | null>(null);

interface EmailProviderProps {
  children: React.ReactNode;
}

function EmailProvider({ children }: EmailProviderProps) {
  const [email, setEmail] = useState('');

  function handleChangeEmail(evt: React.ChangeEvent<HTMLInputElement>) {
    setEmail(evt.target.value);
  }

  return (
    <EmailContext.Provider value={{ email, handleChangeEmail }}>
      {children}
    </EmailContext.Provider>
  );
}

function useEmail() {
  const value = useContext(EmailContext);

  if (!value) {
    throw new Error('EmailContext was used outside the EmailProvider.');
  }

  return value;
}

export { EmailProvider, useEmail };
