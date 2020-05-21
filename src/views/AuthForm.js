import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { useAuth } from 'context/auth';
import { useToastify } from 'hooks/useToastify';

// UI Imports
import Input from 'components/UI/Input';
import Heading from 'components/UI/Heading';
import Button from 'components/UI/Button';
import ButtonLink from 'components/UI/ButtonLink';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonLinkStyled = styled(ButtonLink)`
  font-size: ${({ theme }) => theme.textSize.xs};
  margin-top: 15px;
`;

const FormStyled = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const Auth = ({
  location: { pathname },
  history: { push },
}) => {
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
  console.log(authState);

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
        showToast(
          'Passed passwords are different',
          'error',
        );
      } else {
        authFn(email, password, 'register');
      }
    } else {
      authFn(email, password, 'login');
    }
  };

  return (
    <Wrapper>
      <Heading>
        {isLoginPage ? 'Sign in' : 'Sign up'}
      </Heading>
      <FormStyled>
        {inputs.map((el, index) => (
          <Input
            key={el.id}
            type={el.elementType}
            elementConfig={el.elementConfig}
            changed={(e) =>
              changeAnswerInputHandler(e, index)
            }
          />
        ))}
        <Button type="submit" onClick={submitHandler}>
          {isLoginPage ? 'Login' : 'Sign up'}
        </Button>
        <ButtonLinkStyled onClick={togglePage}>
          {isLoginPage
            ? `Don't have account? Sign up!`
            : 'Already registered? Sign in!'}
        </ButtonLinkStyled>
      </FormStyled>
    </Wrapper>
  );
};

export default Auth;
