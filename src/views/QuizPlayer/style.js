import styled from 'styled-components';
import Heading from 'components/UI/Heading';
import Paragraph from 'components/UI/Paragraph';

export const Wrapper = styled.div`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
`;

export const HeadingStyled = styled(Heading)`
  font-size: ${({ theme }) => theme.textSize.l};
  color: ${({ theme }) => theme.lightGrey};
`;

export const ParagraphStyled = styled(Paragraph)`
  font-size: ${({ theme }) => theme.textSize.s};
`;
