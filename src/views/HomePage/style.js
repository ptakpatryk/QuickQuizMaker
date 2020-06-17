/* eslint-disable import/prefer-default-export */
// There's gonna be more styled componentes in the future
import styled from 'styled-components';

export const Wrapper = styled.div`
         width: 100%;
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         text-align: center;

         ul {
           padding: 0;
           list-style: none;
         }

         @media (max-width: ${({ theme }) => theme.medium}) {
           width: 90%;
           margin: 0 auto;
         }
       `;
