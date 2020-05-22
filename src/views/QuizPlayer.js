import React, { useMemo, useState } from 'react';
import { useToastify } from 'hooks/useToastify';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useQuizes } from 'context/quizes';

// UI Imports
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';
import QuestionsCounter from 'components/UI/QuestionsCounter';
import QuestionsList from 'components/QuestionsList/QuestionsList';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingStyled = styled(Heading)`
  font-size: ${({ theme }) => theme.textSize.l};
  color: ${({ theme }) => theme.lightGrey};
`;

const ParagraphStyled = styled(Paragraph)`
  font-size: ${({ theme }) => theme.textSize.s};
`;

const QuizPlayer = ({
  match: {
    params: { id },
  },
  history: { push },
}) => {
  // Shows user stage ('selecting'/'wrong'/'correct')
  const [actualStage, setActualStage] = useState('selecting');
  const [actualPage, setActualPage] = useState(0);
  const { quizes } = useQuizes();
  const quiz = useMemo(() => quizes.find((el) => el.id === id), [quizes, id]);
  const { showToast } = useToastify();

  const currentQuestion = quiz.questions[actualPage];

  const nextPageHandler = (result) => {
    if (actualPage === quiz.questions.length - 1) {
      push({
        pathname: '/result',
        state: {
          title: quiz.title,
          result,
          questionsNumber: quiz.questions.length,
        },
      });
    }

    setActualPage(actualPage + 1);
    setActualStage('selecting');
  };

  const checkCorrectHandler = (answers, answerType, numberValue) => {
    let userAnswers;
    let correctAnswers;

    if (Object.keys(answers).length === 0 && !numberValue) {
      showToast('Pass the answer first!', 'error');
      return;
    }

    if (answerType === 'number') {
      userAnswers = numberValue;
      correctAnswers = currentQuestion.answers[0].value;
    } else if (answerType === 'boolean') {
      userAnswers = Object.keys(answers).join('');
      correctAnswers = currentQuestion.answers[0].value;
    } else {
      userAnswers = Object.keys(answers);
      correctAnswers = currentQuestion.answers
        .filter((el) => el.correct === true)
        .map((answerObj) => answerObj.id);
    }

    if (!userAnswers) {
      showToast('Pass the answer first!', 'error');
      return;
    }

    // Check correct answers for single and multiple question
    if (answerType === 'single' || answerType === 'multiple') {
      if (userAnswers.sort().join('') === correctAnswers.sort().join('')) {
        setActualStage('correct');
      } else {
        setActualStage('wrong');
      }

      return;
    }

    // Check correct answers for boolean and number question
    if (`${userAnswers}` === correctAnswers) {
      setActualStage('correct');
    } else {
      setActualStage('wrong');
    }
  };

  return (
    <Wrapper>
      <HeadingStyled>{quiz.title}</HeadingStyled>
      <ParagraphStyled>{quiz.description}</ParagraphStyled>
      <QuestionsCounter
        questionNumber={actualPage + 1}
        questionsLength={quiz.questions.length}
      />
      <QuestionsList
        type={currentQuestion.type}
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        checkCorrectFn={checkCorrectHandler}
        nextPageFn={nextPageHandler}
        userStage={actualStage}
      />
    </Wrapper>
  );
};

QuizPlayer.propTypes = {
  match: PropTypes.instanceOf(Object),
  params: PropTypes.instanceOf(Object),
  id: PropTypes.string,
};

export default QuizPlayer;
