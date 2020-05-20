import styled from 'styled-components';

const ButtonLink = styled.button`
  display: inline;
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.textSize.s};
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
  text-decoration: underline;
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;

  :hover {
    font-weight: ${({ theme }) => theme.bold};
  }
`;

export default ButtonLink;
