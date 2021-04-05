import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px;
  padding-bottom: 30px;
  flex: 1;
  min-height: 78vh;
  @media all and (min-width: 768px) {
    margin: 24px;
    flex: 1;
    min-height: 78vh;
  }
`;

export const ContainerArea = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 900px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const CardDescTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #009688;
  padding-bottom: 16px;
  @media all and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;
