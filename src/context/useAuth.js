import { createContext, useContext } from 'react';

export const loginContext = createContext(undefined);

export function useAuth() {
  const context = useContext(loginContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a useAuth');
  }
  return context;
}
