import React from 'react';
import styled from 'styled-components';

// UI Imports
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';
import Button from 'components/UI/Button';

import thatsAllText from 'assets/thatsAllText.svg';

const Wrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainTextWrapper = styled.div`
  position: relative;
`;

const MainText = styled.h2`
  position: relative;
  display: block;
  font-size: 0;
  width: 450px;
  height: 90px;
  color: ${({ theme }) => theme.mainBg};
  background: url(${thatsAllText}) center center no-repeat;
  z-index: 10;
  background-size: 100%;
`;

const CircleOne = styled.div`
  position: absolute;
  top: -50%;
  left: -10%;
  width: 110px;
  height: 110px;
  border-radius: 200px;
  background-color: #0e9259;
  z-index: -10;
`;

const CircleTwo = styled.div`
  position: absolute;
  bottom: -20%;
  left: 20%;
  width: 26px;
  height: 26px;
  border-radius: 200px;
  background-color: #207ca6;
  z-index: -10;
`;

const CircleThree = styled.div`
  position: absolute;
  top: -20%;
  left: 45%;
  width: 12px;
  height: 12px;
  border-radius: 200px;
  background-color: #78af1b;
  z-index: -10;
`;

const CircleFour = styled.div`
  position: absolute;
  top: 10%;
  left: 65%;
  width: 43px;
  height: 43px;
  border-radius: 200px;
  background-color: #942864;
  z-index: -10;
`;

const CircleFive = styled.div`
  position: absolute;
  bottom: -20%;
  left: 85%;
  width: 50px;
  height: 50px;
  border-radius: 200px;
  background-color: #0e9295;
  z-index: -10;
`;

const HeadingStyled = styled(Heading)`
  color: ${({ theme }) => theme.lightGrey};
  margin: 6px 0 12px;
`;

const ParagraphStyled = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.light};
  font-size: 2.4rem;
  margin: 20px 0 6px 0;
`;

const ResultStyled = styled(Paragraph)`
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
`;

const Result = ({ location, history: { push } }) => {
  let title, result, questionsNumber;

  // useEffect(() => {
  //   if (!location.state) {
  //     push('/');
  //   }
  // }, [location, push]);

  if (location.state) {
    title = location.state.title;
    result = location.state.result;
    questionsNumber = location.state.questionsNumber;
  }

  const percent = Math.round(
    (result / questionsNumber) * 100,
  );

  return (
    <Wrapper>
      <MainTextWrapper>
        <MainText>That's all!</MainText>
        <CircleOne />
        <CircleTwo />
        <CircleThree />
        <CircleFour />
        <CircleFive />
      </MainTextWrapper>
      {/* <h3>you finished the quiz {title}</h3> */}
      <ParagraphStyled>
        You've finished the quiz
      </ParagraphStyled>
      <HeadingStyled>{title}</HeadingStyled>
      <ResultStyled>
        Your result:{' '}
        <strong>
          {result}/{questionsNumber}
        </strong>{' '}
        <span>({percent}%)</span>
      </ResultStyled>
      <Button color="green" onClick={() => push('/')}>
        Finish
      </Button>
    </Wrapper>
  );
};

export default Result;
