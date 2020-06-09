import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HalfSpinner = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 100%;
  position: relative;
  margin: 0 auto;

  * {
    box-sizing: border-box;
  }

  .circle {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
  }
  .circle.circle-1 {
    border-top-color: ${({ theme }) => theme.primaryDark};
    animation: half-circle-spinner-animation
      ${({ animationDuration }) => animationDuration}ms infinite;
  }
  .circle.circle-2 {
    border-bottom-color: ${({ theme }) => theme.primaryLight};
    animation: half-circle-spinner-animation
      ${({ animationDuration }) => animationDuration}ms infinite alternate;
  }
  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ size, animationDuration, isVisible }) => (
  <HalfSpinner
    size={size}
    animationDuration={animationDuration}
    isVisible={isVisible}
  >
    <div className="circle circle-1" />
    <div className="circle circle-2" />
  </HalfSpinner>
);

Spinner.propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  isVisible: PropTypes.bool,
};

Spinner.defaultProps = {
  size: 60,
  animationDuration: 1000,
  isVisible: true,
};

export default Spinner;
