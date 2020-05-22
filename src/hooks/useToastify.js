/* eslint-disable import/prefer-default-export */
import { toast, ToastContainer as Container } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const ToastContainer = styled(Container)`
  right: 50%;
  transform: translateX(-20%);
  div {
    border-radius: 15px;
    text-align: center;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const useToastify = () => {
  const customText = "Whoops! Error has occurred! We're working on that!";
  const showToast = (notificationText = customText, type = 'info') =>
    toast[type](notificationText, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });

  return {
    showToast,
    ToastContainer,
  };
};
