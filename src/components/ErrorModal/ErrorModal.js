import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// UI Imports
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const ModalWindow = styled.div`
  padding: 20px 50px;
  border-radius: 15px;
  background: white;
`;

const HeadingStyled = styled(Heading)`
  color: ${({ theme }) => theme.mainBg};
  font-size: ${({ theme }) => theme.textSize.xl};
`;

const ParagraphStyled = styled(Paragraph)``;

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.mainBg};
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 100px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #191f38;
  }
`;

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
      backgroundElement.removeEventListener(
        'click',
        clickedFn,
      );
    };
  }, [closeModalFn]);

  return (
    <ModalBackground ref={backgroundRef}>
      <ModalWindow>
        <HeadingStyled>Whoops...</HeadingStyled>
        <ParagraphStyled>{errorMessage}</ParagraphStyled>
        <ButtonStyled onClick={closeModalFn}>
          Got It!
        </ButtonStyled>
      </ModalWindow>
    </ModalBackground>
  );
};

export default ErrorModal;
