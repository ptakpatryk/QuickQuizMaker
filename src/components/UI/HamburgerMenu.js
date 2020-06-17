import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const HamburgerWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 14px;
  width: 26px;
  height: 23px;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    css`
      position: relative;

      div:nth-child(1) {
        position: absolute;
        transform: rotate(-45deg);
        top: 50%;
        left: 0;
      }

      div:nth-child(3) {
        position: absolute;
        transform: rotate(45deg);
        top: 50%;
        right: 0;
      }

      div:nth-child(2) {
        opacity: 0;
      }
    `}
`;

const HamburgerBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  transform-origin: 50% 50%;
`;

const HamburgerMenu = ({ isOpen, clickedFn }) => {
  return (
    <>
      <HamburgerWrapper isOpen={isOpen} onClick={clickedFn}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerWrapper>
    </>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  clickedFn: PropTypes.func.isRequired,
};

export default HamburgerMenu;
