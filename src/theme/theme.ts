import { rgb, rgba } from './colors';
import { breakpoints } from './breakpoints';

export const colors = {
  ...rgb,
  rgba,
};

export const theme = {
  breakpoints,
  space: [0, 4, 8, 16, 24, 32],
  colors,
  fonts: [`"Open Sans"`],
  fontScales: [
    { fontSize: 'inherit', lineHeight: 'inherit' },
    { fontSize: '2rem', lineHeight: '2.4rem' },
    { fontSize: '1.8rem', lineHeight: '2.4rem' },
    { fontSize: '1.6rem', lineHeight: '2.4rem' },
    { fontSize: '1.4rem', lineHeight: '2.4rem' },
    { fontSize: '1.2rem', lineHeight: '1.6rem' },
    { fontSize: '1.0rem', lineHeight: '1.2rem' },
  ],
  radii: ['0', '0.3rem'],
  variants: {},
};
