import styled from 'styled-components';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

export const ModalBackground = styled.div`
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

export const ModalWindow = styled.div`
  padding: 20px 50px;
  border-radius: 15px;
  background: white;
`;

export const HeadingStyled = styled(Heading)`
  color: ${({ theme }) => theme.mainBg};
  font-size: ${({ theme }) => theme.textSize.xl};
`;

export const ParagraphStyled = styled(Paragraph)``;

export const ButtonStyled = styled.button`
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
