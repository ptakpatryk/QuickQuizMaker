import React from 'react';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';
import { Wrapper } from './style';

const HomePage = () => {
  return (
    <Wrapper>
      <Heading>Welcome in QuickQuizMaker</Heading>
      <Paragraph>Enjoy your quick quiz maker...</Paragraph>
      <br />
      <br />
      <h4>Register to be able to:</h4>
      <ul>
        <li>- Make your own quiz</li>
        <li>- Maintain it (delete/edit)</li>
      </ul>
    </Wrapper>
  );
};

export default HomePage;
