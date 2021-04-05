import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background-color: #4f4f4f;
  border: 0;
  padding: 16px;
  text-transform: capitalize;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
  &:hover {
    box-shadow: 0 0 2px 2px #009688;
  }
  @media all and (min-width: 900px) {
    width: 200px;
  }
`;
