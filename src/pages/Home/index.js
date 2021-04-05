import React, { useEffect, useState } from 'react';

import reportStatesService from '../../services/reportStatesService';
import reportCountriesService from '../../services/reportCountriesService';

import CardDate from '../../components/CardDate';
import TableAllStates from '../../components/TableAllStates';
import CardBrazil from '../../components/CardContainerBrazil';
import Headline from '../../components/Typography/Headline';

import { Container, ContainerArea, CardDescTitle } from '../../components/ContainerStyles/index';

const columns = [
  { id: '1', label: 'Estados' },
  { id: '2', label: 'Confirmados' },
  { id: '3', label: 'Recuperados' },
  { id: '4', label: 'Mortes' },
];

const initialState = [];

const isState = [];

const Home = () => {
  const [dataCountry, setDataCountry] = useState(initialState);
  const [dataState, setDataState] = useState(isState);

  useEffect(() => {
    const payload = {
      cases: dataCountry.cases,
      confirmed: dataCountry.confirmed,
      deaths: dataCountry.deaths,
      recovered: dataCountry.recovered,
    };

    reportCountriesService(payload).then((response) => {
      const brasil = response.data.find((item) => item.country === 'Brazil');
      setDataCountry(brasil);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const payload = {
      uf: dataState.uf,
      state: dataState.state,
      cases: dataState.cases,
      deaths: dataState.deaths,
      suspects: dataState.suspects,
    };

    reportStatesService(payload).then((response) => {
      const states = response.data;
      setDataState(states);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataDay = dataCountry.updated_at;

  return (
    <Container>
      <CardDescTitle>
        <Headline title="Casos no Brazil" />
        <CardDate dataDay={dataDay} />
      </CardDescTitle>
      <ContainerArea>
        <CardBrazil dataCountry={dataCountry} />
        <TableAllStates dataState={dataState} columns={columns} />
      </ContainerArea>
    </Container>
  );
};

export default Home;
