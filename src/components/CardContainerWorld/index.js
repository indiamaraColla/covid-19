import React from 'react';

import CardContainer from '../CardContainer';

import { CardValues } from './styles';

const CardWorld = ({ dataGlobal }) => {
  return (
    <CardValues>
      <CardContainer title="Confirmados" label={dataGlobal.TotalConfirmed} />
      <CardContainer title="Recuperados" label={dataGlobal.TotalRecovered} blue />
      <CardContainer title="Mortes" label={dataGlobal.TotalDeaths} red />
    </CardValues>
  );
};

export default CardWorld;
