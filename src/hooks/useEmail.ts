import { useContext } from 'react';
import { EmailContext } from '../contexts/EmailContext';

export default function useEmail() {
  const value = useContext(EmailContext);

  if (!value) {
    throw new Error('EmailContext was used outside the EmailProvider.');
  }

  return value;
}
