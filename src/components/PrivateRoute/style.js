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
`;

export const MainImage = styled.div`
  width: 50%;
  height: 50%;
  margin-bottom: 30px;
  background: url(${authVector}) center center no-repeat;
  background-size: contain;
`;

export const HeadingStyled = styled(Heading)`
  margin-bottom: 15px;
`;

export const ButtonLinkStyled = styled(ButtonLink)`
  font-size: ${({ theme }) => theme.textSize.xs};
  font-weight: ${({ theme }) => theme.light};
`;
