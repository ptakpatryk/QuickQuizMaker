import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 90px;
  width: 80%;
  margin: 0 auto;
`;

export const FlexColumnWrapper = styled.div`
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-start;

         @media (max-width: ${({ theme }) => theme.medium}) {
           flex-direction: row;
           align-items: unset;
           margin-bottom: 15px;

           > :nth-child(2) {
             margin-left: 30px;
           }
         }
       `;

export const FlexRowWrapper = styled.div`
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: flex-start;

         @media (max-width: ${({ theme }) => theme.medium}) {
           align-items: center;
           flex-direction: column;

          > :last-child {
            margin: 15px auto 30px;

          }
         }
       `;

export const GridAnswersWrapper = styled.div`
         display: grid;
         grid-template-columns: 1fr 1fr;
         grid-column-gap: 20px;

         @media (max-width: ${({ theme }) => theme.medium}) {
           display: block;
         }
       `;

export const RelativeWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;
