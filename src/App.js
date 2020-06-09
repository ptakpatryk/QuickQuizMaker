import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import QuizesProvider from 'context/quizes';
import { useAuth } from 'context/auth';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { useToastify } from 'hooks/useToastify';
import Navigation from 'components/Navigation/Navigation';

// Theme Provider & Global Style Imports
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';

// Routes components
import HomePage from 'views/HomePage/HomePage';
import QuizLibrary from 'views/QuizLibrary/QuizLibrary';
import QuizBuilder from 'views/QuizBuilder/QuizBuilder';
import QuizPlayer from 'views/QuizPlayer/QuizPlayer';
import Result from 'views/Result/Result';
import Auth from 'views/Auth/Auth';
import Logout from 'components/Logout/Logout';

const ContentWrapperStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 40px 0 220px;
  margin: 0 auto;
`;

const App = () => {
  const { ToastContainer } = useToastify();
  const { autoAuthCheck } = useAuth();

  useEffect(() => {
    autoAuthCheck();
  }, [autoAuthCheck]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <ToastContainer />
        <ContentWrapperStyled>
          <Switch>
            <QuizesProvider>
              <Route path="/library" component={QuizLibrary} />
              <PrivateRoute path="/make-quiz" component={QuizBuilder} />
              <Route path="/quiz/:id" component={QuizPlayer} />
              <Route path="/result" component={Result} />
              <Route path="/login" component={Auth} />
              <Route path="/register" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route path="/" exact component={HomePage} />
            </QuizesProvider>
          </Switch>
        </ContentWrapperStyled>
      </ThemeProvider>
    </>
  );
};

export default App;
