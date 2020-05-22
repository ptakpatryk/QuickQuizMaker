import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'context/auth';
import { useToastify } from 'hooks/useToastify';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();
  const { showToast } = useToastify();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authState.token) {
          return <Component {...props} />;
        }
        showToast('You need to be log in', 'info');
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
