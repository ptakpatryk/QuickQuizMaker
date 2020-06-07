import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// UI Imports
import Heading from 'components/UI/Heading';
import ButtonLink from 'components/UI/ButtonLink';
import authVector from 'assets/authForAccess.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.div`
  width: 50%;
  height: 50%;
  margin-bottom: 30px;
  background: url(${authVector}) center center no-repeat;
  background-size: contain;
`;

const HeadingStyled = styled(Heading)`
  margin-bottom: 15px;
`;

const ButtonLinkStyled = styled(ButtonLink)`
  font-size: ${({ theme }) => theme.textSize.xs};
  font-weight: ${({ theme }) => theme.light};
`;

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
