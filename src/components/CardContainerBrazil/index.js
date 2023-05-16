import React from 'react'

import CardContainer from '../CardContainer'

import { CardValues } from './styles'

const CardBazil = ({ dataCountry }) => {
  return (
    <CardValues>
      <CardContainer title="Confirmados" label={dataCountry.confirmed} />
      <CardContainer title="Ativos" label={dataCountry.cases} primary />
      <CardContainer title="Recuperados" label={dataCountry.recovered} blue />
      <CardContainer title="Mortes" label={dataCountry.deaths} red />
    </CardValues>
  )
}

export default CardBazil
