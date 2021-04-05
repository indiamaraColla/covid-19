import React from 'react';

import { Content, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableCellBody } from './styles';

const TableAllCountries = ({ columnsCountry, dataAllCountry }) => {
  return (
    <Content>
      <Table>
        <TableHead>
          <TableRow>
            {columnsCountry.map((item) => (
              <TableCell key={item.id}>{item.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
      <TableContainer>
        <Table>
          <TableBody>
            {dataAllCountry.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCellBody>{item.country}</TableCellBody>
                  <TableCellBody>{item.confirmed}</TableCellBody>
                  <TableCellBody>{item.recovered}</TableCellBody>
                  <TableCellBody>{item.deaths}</TableCellBody>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>
  );
};

export default TableAllCountries;
