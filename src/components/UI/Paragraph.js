import styled from 'styled-components';

const Paragraph = styled.h3`
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.textSize.m};
  margin-bottom: 30px;
`;

export default Paragraph;
