import styled, { css } from 'styled-components';
// import { fonts } from '../Helpers/constants';

// const TextDefault = styled.p`
//   font-family: ${fonts.productSans};
// font-family: ${fonts.playfairDisplay};

// `;

export const HeadlineText = styled.h1`
  color: #009688;
  font-size: 34px;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const SubheadingText = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

export const ParagraphText = styled.p`
  color: #d3d3d3;
`;

export const TextDescription = styled.p`
  font-size: 20px;
  color: ${(props) => (props.primary ? '#32CD32' : '#ecc94b')};
  ${(props) =>
    props.red &&
    css`
      color: #ff6347;
    `}
  ${(props) =>
    props.blue &&
    css`
      color: #1e90ff;
    `}
`;
