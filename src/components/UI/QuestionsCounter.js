import React from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.secondaryDark};
  border-radius: 100px;
`;

const ProgressBar = styled.div`
  overflow: hidden;
  height: 100%;
  width: ${({ progress }) => progress}%;
  border-radius: 100px;
`;

const ProgressColor = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.pink} 0%,
    ${({ theme }) => theme.blue} 100%
  );
`;

const ProgressText = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  color: white;
`;

const QuestionsCounter = ({ questionNumber, questionsLength }) => {
  const progress = ((questionNumber / questionsLength) * 100).toFixed(2);

  return (
    <BarWrapper>
      <ProgressText>
        {questionNumber}/{questionsLength}
      </ProgressText>
      <ProgressBar progress={progress}>
        <ProgressColor />
      </ProgressBar>
    </BarWrapper>
  );
};

export default QuestionsCounter;
