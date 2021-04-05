import React from 'react';

import { Content, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableCellBody } from './styles';

const TableAllStates = ({ columns, dataState }) => {
  return (
    <Content>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell key={item.id}>{item.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
      <TableContainer>
        <Table>
          <TableBody>
            {dataState.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCellBody>{item.state}</TableCellBody>
                  <TableCellBody>{item.cases}</TableCellBody>
                  <TableCellBody>{item.deaths}</TableCellBody>
                  <TableCellBody>{item.suspects}</TableCellBody>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  );
};

export default TableAllStates;
