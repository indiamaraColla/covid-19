import React from 'react';
import { TextDescription } from './styles';

const TitleDescription = ({ label, primary, blue, red }) => {
  return (
    <TextDescription primary={primary} blue={blue} red={red}>
      {label}
    </TextDescription>
  );
};

export default TitleDescription;
