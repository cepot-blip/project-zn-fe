import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedLayout({ children }) {
  const authenticated = Cookies.get('token');
  if (!authenticated) return <Navigate to="/login" replace />;

  return children;
}

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
