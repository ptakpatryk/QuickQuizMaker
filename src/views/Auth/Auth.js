import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useAuth } from 'context/auth';
import { useToastify } from 'hooks/useToastify';

// UI Imports
import Input from 'components/UI/Input';
import Heading from 'components/UI/Heading';
import Spinner from 'components/UI/Spinner';
import { Wrapper, ButtonLinkStyled, ButtonStyled, FormStyled } from './style';

const Auth = ({ location: { pathname }, history: { push } }) => {
  const [isLoginPage] = useState(pathname === '/login');
  const [inputs, setInputs] = useState([
    {
      id: shortid.generate(),
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'E-mail',
      },
      value: '',
      correct: false,
      tickable: false,
    },
    {
      id: shortid.generate(),
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      value: '',
      correct: false,
      tickable: false,
    },
  ]);
  const { showToast } = useToastify();

  const { authState, authFn } = useAuth();

  useEffect(() => {
    if (authState.token) {
      push('/');
    }
  });

  useEffect(() => {
    const newInputs = [...inputs];
    if (isLoginPage && inputs.length > 2) {
      newInputs.pop();
      setInputs(newInputs);
    } else if (!isLoginPage) {
      newInputs.push({
        id: shortid.generate(),
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Confirm password',
        },
        value: '',
        correct: false,
        tickable: false,
      });
      setInputs(newInputs);
    }
    // Update only on route change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoginPage]);

  const changeAnswerInputHandler = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const togglePage = () => {
    if (isLoginPage) {
      push('/register');
    } else {
      push('/login');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = inputs[0].value;
    const password = inputs[1].value;

    if (!isLoginPage) {
      const passwordConfirm = inputs[2].value;
      if (password !== passwordConfirm) {
        showToast('Passed passwords are different', 'error');
      } else {
        authFn(email, password, 'register');
      }
    } else {
      authFn(email, password, 'login');
    }
  };

  let form;
  if (authState.loading) {
    form = <Spinner />;
  } else {
    form = inputs.map((el, index) => (
      <Input
        key={el.id}
        type={el.elementType}
        elementConfig={el.elementConfig}
        changed={(e) => changeAnswerInputHandler(e, index)}
      />
    ));
  }

  return (
    <Wrapper>
      <Heading>{isLoginPage ? 'Sign in' : 'Sign up'}</Heading>
      <FormStyled>
        {form}
        <ButtonStyled type="submit" onClick={submitHandler}>
          {isLoginPage ? 'Login' : 'Sign up'}
        </ButtonStyled>
        <ButtonLinkStyled onClick={togglePage}>
          {isLoginPage
            ? `Don't have account? Sign up!`
            : 'Already registered? Sign in!'}
        </ButtonLinkStyled>
      </FormStyled>
    </Wrapper>
  );
};

Auth.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Auth;
