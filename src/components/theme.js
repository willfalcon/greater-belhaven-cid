import { css } from 'styled-components';

const theme = {
  red: '#E9492E',
  blue: '#0090BD',
  green: '#71AA42',
  orange: '#F99D1C',
  light: '#F4F5E1',
  black: '#4A4A4A',
  dark: '#603913',
  offWhite: '#FEF9EB',
  sizes: {
    break: 768,
    large: 1024
  },
  font: {
    family: 'adrianna, sans-serif',
    regular: '400',
    demibold: '600',
    bold: '700',
  }
};

const media = Object.keys(theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media };
export default theme;

