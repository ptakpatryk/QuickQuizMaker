import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';
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

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
