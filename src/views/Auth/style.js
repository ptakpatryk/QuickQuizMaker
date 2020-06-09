import styled from 'styled-components';

import Button from 'components/UI/Button';
import ButtonLink from 'components/UI/ButtonLink';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonLinkStyled = styled(ButtonLink)`
  font-size: ${({ theme }) => theme.textSize.xs};
  margin-top: 15px;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 25px;
`;

export const FormStyled = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;
