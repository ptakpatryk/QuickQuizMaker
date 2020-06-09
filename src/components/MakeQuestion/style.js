import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 90px;
  width: 80%;
  margin: 0 auto;
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const GridAnswersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

export const RelativeWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;
