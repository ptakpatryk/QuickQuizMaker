import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ModalBackground,
  ModalWindow,
  HeadingStyled,
  ParagraphStyled,
  ButtonStyled,
} from './style';

const ErrorModal = ({ errorMessage, closeModalFn }) => {
  const backgroundRef = useRef();

  useEffect(() => {
    const clickedFn = (e) => {
      if (e.target === backgroundRef.current) {
        closeModalFn();
      }
    };

    const backgroundElement = backgroundRef.current;
    backgroundElement.addEventListener('click', clickedFn);
    return () => {
      backgroundElement.removeEventListener('click', clickedFn);
    };
  }, [closeModalFn]);

  return (
    <ModalBackground ref={backgroundRef}>
      <ModalWindow>
        <HeadingStyled>Whoops...</HeadingStyled>
        <ParagraphStyled>{errorMessage}</ParagraphStyled>
        <ButtonStyled onClick={closeModalFn}>Got It!</ButtonStyled>
      </ModalWindow>
    </ModalBackground>
  );
};

ErrorModal.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  closeModalFn: PropTypes.func.isRequired,
};

export default ErrorModal;
