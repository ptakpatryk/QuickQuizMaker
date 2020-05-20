import React from 'react';
import styled from 'styled-components';

// UI Imports
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

// Icons import
import editIcon from 'assets/icons/edit.svg';
import deleteIcon from 'assets/icons/delete.svg';
import arrowGoIcon from 'assets/icons/arrow-go.svg';

const WrapperStyled = styled.div`
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  max-width: 800px;
  min-height: 110px;
  border: 1.5px solid ${({ theme }) => theme.primaryLight};
  border-radius: 15px;
  margin-bottom: 20px;
`;

const InfoWrapper = styled.div`
  padding: 15px 20px;
  max-width: 60%;
`;

const ButtonWrapperRow = styled.div`
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const ButtonWrapperColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeadingStyled = styled(Heading)`
  font-size: ${({ theme }) => theme.textSize.l};
`;

const ParagraphStyled = styled(Paragraph)`
  font-size: ${({ theme }) => theme.textSize.s};
  margin: 0;
`;

const QuestionsCounter = styled.div`
  background-color: ${({ theme }) => theme.primaryLight};
  align-self: stretch;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.mainBg};
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

const IconButton = styled.button`
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

const QuizElement = ({
  title,
  description,
  questionsQuantity,
  id,
  deleteQuizFn,
  openQuizFn,
}) => {
  return (
    <WrapperStyled>
      <InfoWrapper>
        <HeadingStyled as="h2">{title}</HeadingStyled>
        <ParagraphStyled>{description}</ParagraphStyled>
      </InfoWrapper>
      <QuestionsCounter>
        <h3>{questionsQuantity}</h3>
        <p>questions</p>
      </QuestionsCounter>
      <ButtonWrapperRow>
        <ButtonWrapperColumn>
          <IconButton icon={editIcon} color="blue" />
          <IconButton
            onClick={() => deleteQuizFn(id)}
            icon={deleteIcon}
            color="red"
          />
        </ButtonWrapperColumn>
        <IconButton
          onClick={() => openQuizFn(id)}
          icon={arrowGoIcon}
          color="primaryLight"
          big
        />
      </ButtonWrapperRow>
    </WrapperStyled>
  );
};

export default QuizElement;
