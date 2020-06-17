import styled from 'styled-components';

import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';
import thatsAllText from 'assets/thatsAllText.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 90px);

  @media (max-width: ${({ theme }) => theme.small}) {
    padding-top: 120px;
  }
`;

export const MainTextWrapper = styled.div`
  position: relative;
`;

export const MainText = styled.h2`
  position: relative;
  display: block;
  font-size: 0;
  width: 450px;
  height: 90px;
  color: ${({ theme }) => theme.mainBg};
  background: url(${thatsAllText}) center center no-repeat;
  background-size: 100%;

  @media (max-width: ${({ theme }) => theme.medium}) {
    min-width: 300px;
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 85vw;
  }
`;

export const CircleOne = styled.div`
  position: absolute;
  top: -50%;
  left: -10%;
  width: 110px;
  height: 110px;
  border-radius: 200px;
  background-color: #0e9259;
  z-index: -10;
`;

export const CircleTwo = styled.div`
  position: absolute;
  bottom: -20%;
  left: 20%;
  width: 26px;
  height: 26px;
  border-radius: 200px;
  background-color: #207ca6;
  z-index: -10;
`;

export const CircleThree = styled.div`
  position: absolute;
  top: -20%;
  left: 45%;
  width: 12px;
  height: 12px;
  border-radius: 200px;
  background-color: #78af1b;
  z-index: -10;
`;

export const CircleFour = styled.div`
  position: absolute;
  top: 10%;
  left: 65%;
  width: 43px;
  height: 43px;
  border-radius: 200px;
  background-color: #942864;
  z-index: -10;
`;

export const CircleFive = styled.div`
  position: absolute;
  bottom: -20%;
  left: 85%;
  width: 50px;
  height: 50px;
  border-radius: 200px;
  background-color: #0e9295;
  z-index: -10;
`;

export const HeadingStyled = styled(Heading)`
  color: ${({ theme }) => theme.lightGrey};
  margin: 6px 0 12px;
`;

export const ParagraphStyled = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.light};
  font-size: 2.4rem;
  margin: 20px 0 6px 0;

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 1.8rem;
  }
`;

export const ResultStyled = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.light};
  font-size: 2.4rem;

  strong {
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.lightGrey};
  }

  span {
    font-weight: ${({ theme }) => theme.bold};
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    font-size: 1.8rem;

    span {
      font-size: 1.3rem;
    }
  }
`;
