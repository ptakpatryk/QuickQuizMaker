import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuizesProvider from 'context/QuizesContext';
import { AuthContext } from 'context/auth';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { useToastify } from 'hooks/useToastify';
import Navigation from 'components/Navigation/Navigation';

// Theme Provider & Global Style Imports
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';

// Routes components
import HomePage from 'views/HomePage';
import QuizLibrary from 'views/QuizLibrary';
import QuizBuilder from 'views/QuizBuilder';
import QuizPlayer from 'views/QuizPlayer';
import Result from 'views/Result';

const ContentWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 90px 70px 0 220px;
  margin: 0 auto;
`;

const App = () => {
  const { ToastContainer } = useToastify();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <AuthContext.Provider value={true}>
          <Navigation />
          <ContentWrapperStyled>
            <Switch>
              <QuizesProvider>
                <Route
                  path="/library"
                  component={QuizLibrary}
                />
                <PrivateRoute
                  path="/make-quiz"
                  component={QuizBuilder}
                />
                <Route
                  path="/quiz/:id"
                  component={QuizPlayer}
                />
                <Route path="/result" component={Result} />
                <Route
                  path="/"
                  exact
                  component={HomePage}
                />
              </QuizesProvider>
            </Switch>
          </ContentWrapperStyled>
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
