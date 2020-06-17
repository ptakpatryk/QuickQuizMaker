import styled, { keyframes, css } from 'styled-components';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(50%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const Wrapper = styled.div`
         position: relative;
         margin: 0 auto 90px;
         display: grid;
         grid-template-columns: 3fr 1fr 1fr;
         max-width: 800px;
         min-height: 110px;
         border: 1.5px solid ${({ theme }) => theme.primaryLight};
         border-radius: 15px;
         margin-bottom: 20px;
         animation: 0.3s ${fadeIn} ease-out forwards;
         opacity: 0;
         transform: translateY(50%);
         animation-delay: ${({ numInOrder }) => `${numInOrder * 0.1}s`};

         @media (max-width: ${({ theme }) => theme.medium}) {
           display: flex;
           flex-direction: column;
           text-align: center;
           margin-bottom: 35px;

           ${({isOwner}) => isOwner && css`
           `}
         }
       `;

export const InfoWrapper = styled.div`
         padding: 15px 20px;
         max-width: 60%;

         @media (max-width: ${({ theme }) => theme.medium}) {
           max-width: none;
           width: 100%;
         }
       `;

export const ButtonWrapperRow = styled.div`
         position: absolute;
         right: -25px;
         top: 50%;
         transform: translateY(-50%);
         display: flex;
         align-items: center;
         flex-direction: row;

         @media (max-width: ${({ theme }) => theme.medium}) {
          position: relative;
          flex-direction: column;
          right: 50%;
          top: auto;
          bottom: -25px;
          transform: translateX(50%);
          }
       `;

export const ButtonWrapperColumn = styled.div`
         display: flex;
         align-items: center;
         flex-direction: column;
         
         @media (max-width: ${({ theme }) => theme.medium}) {
          flex-direction: row;
         }
       `;

export const HeadingStyled = styled(Heading)`
  font-size: ${({ theme }) => theme.textSize.l};
`;

export const ParagraphStyled = styled(Paragraph)`
  font-size: ${({ theme }) => theme.textSize.s};
  margin: 0;
`;

export const QuestionsCounter = styled.div`
         background-color: ${({ theme }) => theme.primaryLight};
         align-self: stretch;
         padding: 0 15px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         text-align: center;
         color: ${({ theme }) => theme.mainBg};

         @media (max-width: ${({ theme }) => theme.medium}) {
           padding: 7px 0;
         }

         h3 {
           position: relative;
           top: 5px;
           font-size: ${({ theme }) => theme.textSize.xl};
         }

         p {
           position: relative;
           bottom: 5px;
           font-weight: ${({ theme }) => theme.bold};
         }
       `;

export const IconButton = styled.button`
  width: ${({ big }) => (big ? '45px' : '30px')};
  height: ${({ big }) => (big ? '45px' : '30px')};
  border-radius: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center center;
  background-color: ${({ theme, color }) => theme[color]};
  border: none;
  margin: 3px;
  transition: transform 150ms ease-in-out;
  outline: none;

  :hover,
  :focus {
    transform: scale(1.15);
  }
`;
