import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from 'context/auth';

const Logout = () => {
  const { logoutFn } = useAuth();

  useEffect(() => {
    logoutFn();
  }, [logoutFn]);

  return <Redirect to="/login" />;
};

export default Logout;
