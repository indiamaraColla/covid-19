import React from 'react';

const CardDate = ({ dataDay }) => {
  let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  let dateDays = new Date(dataDay).toLocaleDateString('pt-BR', options);

  return <p>Data da última Atualização {dateDays}</p>;
};

export default CardDate;
