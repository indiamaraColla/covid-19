import React from 'react';
import Subheading from '../Typography/Subheading';
import TitleDescription from '../Typography/TitleDescription';
import { Container } from './styles';

const CardContainer = ({ title, label, primary, blue, red }) => (
  <Container>
    <Subheading title={title} />
    <TitleDescription label={label} primary={primary} blue={blue} red={red} />
  </Container>
);

export default CardContainer;
