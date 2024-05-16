import PropTypes from 'prop-types';
import React, { useMemo, useReducer } from 'react';
import { loginContext } from './useAuth';

const initalState = {
  username: '',
  password: '',
  email: '',
  fullName: '',
  phoneNumber: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_FULLNAME':
      return { ...state, fullName: action.payload };
    case 'SET_RESET':
      return { ...state, username: '', password: '', email: '', fullName: '' };
    case 'SET_PHONE':
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <loginContext.Provider value={contextValue}>
      {children}
    </loginContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
