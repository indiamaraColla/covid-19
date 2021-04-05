import React, { useEffect, useState } from 'react';

import CardDate from '../../components/CardDate';
import CardWorld from '../../components/CardContainerWorld';
import TableAllStates from '../../components/TableAllCountries';
import HeadlineText from '../../components/Typography/Headline';
import { Container, ContainerArea, CardDescTitle } from '../../components/ContainerStyles';

import reportCountriesService from '../../services/reportCountriesService';
import worldService from '../../services/worldService';

const initialState = [];

const isState = [];

const columnsCountry = [
  { id: '1', label: 'Países' },
  { id: '2', label: 'Confirmados' },
  { id: '3', label: 'Recuperados' },
  { id: '4', label: 'Mortes' },
];

const World = () => {
  const [dataGlobal, setDataGlobal] = useState(initialState);
  const [dataAllCountry, setDataAllCountry] = useState(isState);

  useEffect(() => {
    const payload = {
      TotalDeaths: dataGlobal.TotalDeaths,
      TotalRecovered: dataGlobal.TotalRecovered,
      TotalConfirmed: dataGlobal.TotalConfirmed,
    };

    worldService(payload).then((response) => {
      setDataGlobal(response.Global);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const payload = {
      country: dataAllCountry.country,
      confirmed: dataAllCountry.confirmed,
      deaths: dataAllCountry.deaths,
      recovered: dataAllCountry.recovered,
    };

    reportCountriesService(payload).then((response) => {
      const countryAll = response.data;
      setDataAllCountry(countryAll);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataDay = dataGlobal.Date;

  return (
    <Container>
      <CardDescTitle>
        <HeadlineText title="Casos no Mundo" />
        <CardDate dataDay={dataDay} />
      </CardDescTitle>
      <ContainerArea>
        <CardWorld dataGlobal={dataGlobal} />
        <TableAllStates dataAllCountry={dataAllCountry} columnsCountry={columnsCountry} />
      </ContainerArea>
    </Container>
  );
};

export default World;
