import { rgb, rgba } from './colors';
import { breakpoints } from './breakpoints';

export const colors = {
  ...rgb,
  rgba,
};

const shadows: Array<string> & {
  [key: string]: any;
} = ['none', '0 5px 10px 0 rgba(140, 158, 255, 0.1)', '0 2px 4px 0 #bbbdca'];
shadows.bold = '0.5px 0 0 currentColor';

export const theme = {
  breakpoints,
  space: [0, 4, 8, 16, 24, 32, 40],
  colors,
  fonts: [`"Open Sans"`],
  fontScales: [
    { fontSize: 'inherit', lineHeight: 'inherit' },
    { fontSize: '1.0rem', lineHeight: '1.2rem' },
    { fontSize: '1.2rem', lineHeight: '1.6rem' },
    { fontSize: '1.4rem', lineHeight: '2.4rem' },
    { fontSize: '1.6rem', lineHeight: '2.4rem' },
    { fontSize: '1.8rem', lineHeight: '2.4rem' },
    { fontSize: '2rem', lineHeight: '2.4rem' },
    { fontSize: '2.4rem', lineHeight: '4rem' },
  ],
  borders: ['none', `1px solid ${rgb.paleGrey};`],
  radii: ['0', '0.3rem'],
  shadows,
  variants: {},
};
