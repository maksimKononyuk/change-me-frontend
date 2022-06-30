import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
// redux
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function AuthProvider({ children }) {
  const { getInitialize } = useAuth();

  useEffect(() => {
    getInitialize();
  }, []);

  return children;
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
