import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, MainImage, HeadingStyled, ButtonLinkStyled } from './style';

const AccessDenied = () => {
  const { push } = useHistory();
  return (
    <Wrapper>
      <MainImage />
      <HeadingStyled>Log in to make your own quiz!</HeadingStyled>
      <ButtonLinkStyled onClick={() => push('/login')}>
        GO TO LOGIN PAGE
      </ButtonLinkStyled>
    </Wrapper>
  );
};

export default AccessDenied;
