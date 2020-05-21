/* eslint-disable no-use-before-define */
import React, { useContext, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyA8-gsDOJ267N9NA4vV2lvuKfUMELAij_E';
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: '',
    userId: '',
    error: null,
    loading: false,
  });

  const authFn = (email, password, method) => {
    setAuthState({});
    let authUrl =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    if (method === 'register') {
      authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`;
    }
    axios
      .post(authUrl + API_KEY, {
        email,
        password,
        returnSecureToken: true,
      })
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() +
            response.data.expiresIn * 1000,
        );
        localStorage.setItem(
          'expirationDate',
          expirationDate,
        );
        localStorage.setItem(
          'token',
          response.data.idToken,
        );
        setAuthExpiration(response.data.expiresIn);
        setAuthState({
          ...authState,
          token: response.data.idToken,
          userId: response.data.localId,
        });
      })
      .catch((error) =>
        console.log(error.response.data.error),
      );
  };

  const setAuthExpiration = (expirationTime) => {
    setTimeout(() => {
      logoutFn();
    }, expirationTime * 1000);
  };

  const logoutFn = () => {
    setAuthState({
      token: '',
      userId: '',
      error: null,
      loading: false,
    });
  };

  const autoAuthCheck = () => {
    const token = localStorage.get('token');
    const expirationTime = localStorage.get(
      'expirationDate',
    );
    const expiresIn = new Date(expirationTime);
    console.log(token);
    console.log(expirationTime);
    console.log(expiresIn);
  };

  return (
    <AuthContext.Provider
      value={{ authState, authFn, logoutFn, autoAuthCheck }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
