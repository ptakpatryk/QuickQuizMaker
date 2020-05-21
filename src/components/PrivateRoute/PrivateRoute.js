import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'context/auth';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const { authState } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authState.token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
