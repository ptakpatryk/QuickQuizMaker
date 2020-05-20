import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import selectArrowIcon from 'assets/icons/select_arrow_down.svg';

const InputStyled = styled.input`
  background: none;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 15px;
  padding: 10px 20px;
  width: 100%;
  outline: none;

  ::placeholder {
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.textSize.m};
    color: ${({ theme }) => theme.secondary};
  }

  :focus {
    background-color: rgba(255, 255, 255, 0.05);
  }

  ${({ gridArea }) =>
    gridArea &&
    css`
      grid-area: ${gridArea};
      margin-bottom: 0;
    `}
`;

const TextareaStyled = styled.textarea`
  background: none;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 15px;
  padding: 10px 20px;
  width: 100%;
  outline: none;

  ::placeholder {
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.textSize.m};
    color: ${({ theme }) => theme.secondary};
  }

  :focus {
    background-color: rgba(255, 255, 255, 0.05);
  }

  ${({ gridArea }) =>
    gridArea &&
    css`
      grid-area: ${gridArea};
      max-width: 100%;
      margin-bottom: 0;
    `}
`;

const SelectStyled = styled.select`
  background: none;
  margin-bottom: 20px;
  background-image: url(${selectArrowIcon});
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 96% 52%;
  appearance: none;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 15px;
  padding: 10px 20px;
  width: 100%;
  outline: none;

  ::placeholder {
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.textSize.m};
    color: ${({ theme }) => theme.secondary};
  }

  :focus {
    background-color: rgba(255, 255, 255, 0.05);
  }

  ${({ gridArea }) =>
    gridArea &&
    css`
      grid-area: ${gridArea};
      max-width: 100%;
      margin-bottom: 0;
    `}
`;

const Input = ({
  id,
  type,
  elementConfig,
  changed,
  gridArea,
}) => {
  let inputElement = null;

  switch (type) {
    case 'input':
      inputElement = (
        <InputStyled
          {...elementConfig}
          onChange={(e) => changed(e, id)}
          gridArea={gridArea}
        />
      );

      break;
    case 'textarea':
      inputElement = (
        <TextareaStyled
          {...elementConfig}
          onChange={(e) => changed(e, id)}
          gridArea={gridArea}
        />
      );
      break;
    case 'select':
      inputElement = (
        <SelectStyled
          name={id}
          id={id}
          onChange={(e) => changed(e, id)}
        >
          {elementConfig.map((option) => (
            <option
              key={option.value}
              value={option.value}
              default={option.default}
            >
              {option.text}
            </option>
          ))}
        </SelectStyled>
      );
      break;
    default:
      inputElement = <p>Wrong input passed</p>;
  }
  return <>{inputElement}</>;
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  elementConfig: PropTypes.instanceOf(Object).isRequired,
  gridArea: PropTypes.string,
  changed: PropTypes.func.isRequired,
};

Input.defaultProps = {
  gridArea: null,
  id: null,
};

export default Input;
