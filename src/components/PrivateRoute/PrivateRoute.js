import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'context/auth';

import AccessDenied from './AccessDenied';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authState.token) {
          return <Component {...props} />;
        }
        return <AccessDenied />;
      }}
    />
  );
};

export default PrivateRoute;
