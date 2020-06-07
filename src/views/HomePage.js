import React from 'react';
import styled from 'styled-components';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

const Wrapper = styled.div`
  padding-top: 90px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Heading>Welcome in QuickQuizMaker</Heading>
      <Paragraph>Enjoy your super duper fast quiz maker...</Paragraph>
    </Wrapper>
  );
};

export default HomePage;
