import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  background-color: #4f4f4f;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 2px 2px #009688;
  }
  @media all and (min-width: 900px) {
    margin-left: 24px;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  background-color: #4f4f4f;
  color: #fff;
  border-radius: 4px;
  table-layout: fixed;
  padding: 0 4px;
  line-height: 2.3;
  @media all and (min-width: 500px) {
    padding: 0 16px;
  }
`;

export const TableHead = styled.thead`
  font-size: 14px;
  color: #009688;
  @media all and (min-width: 500px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const TableCell = styled.th`
  padding: 6px 0;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  @media all and (min-width: 500px) {
    padding: 6px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: auto;
`;

export const TableBody = styled.tbody`
  font-size: 14px;
  @media all and (min-width: 500px) {
    font-size: 18px;
  }
`;

export const TableRow = styled.tr``;

export const TableCellBody = styled.td`
  padding: 6px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
`;
