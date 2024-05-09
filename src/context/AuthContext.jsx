import PropTypes from 'prop-types';
import React, { useMemo, useReducer } from 'react';
import { loginContext } from './useAuth';

const initalState = {
  isLoggedIn: false,
  username: 'coiicii',
  password: 'isisiaixoa',
  email: 'jhndoe@jgfs.com',
  token: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
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
