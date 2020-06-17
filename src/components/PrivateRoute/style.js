import styled from 'styled-components';

import Heading from 'components/UI/Heading';
import ButtonLink from 'components/UI/ButtonLink';
import authVector from 'assets/authForAccess.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MainImage = styled.div`
  width: 50%;
  height: 50%;
  max-height: 500px;
  margin-bottom: 30px;
  background: url(${authVector}) center center no-repeat;
  background-size: contain;

  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 80%;
    height: 60%;
    margin-bottom: 10px;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 80%;
    height: 30%;
    margin-bottom: 10px;
  }
`;

export const HeadingStyled = styled(Heading)`
  margin-bottom: 15px;
`;

export const ButtonLinkStyled = styled(ButtonLink)`
  font-size: ${({ theme }) => theme.textSize.xs};
  font-weight: ${({ theme }) => theme.light};
`;
