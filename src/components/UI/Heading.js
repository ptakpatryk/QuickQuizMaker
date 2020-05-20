import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.textSize.xl};
`;

export default Heading;
