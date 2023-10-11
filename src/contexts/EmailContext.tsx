import { createContext, useState } from 'react';

interface IEmailContext {
  email: string;
  handleChangeEmail: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearEmail: () => void;
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

  function handleClearEmail() {
    setEmail('');
  }

  return (
    <EmailContext.Provider
      value={{ email, handleChangeEmail, handleClearEmail }}
    >
      {children}
    </EmailContext.Provider>
  );
}

export { EmailProvider, EmailContext };
