import { colors, rgba } from './colors';
import { breakpoints } from './breakpoints';

export interface IThemeValue extends Array<string> {
  [key: string]: any;
}

const shadows: Array<string> & {
  [key: string]: any;
} = [
  'none',
  `0 2px 8px 0 ${rgba(0.1).dark}`,
  `0 2px 8px 0 ${rgba(0.2).dark}`,
  `0 2px 8px 0 ${rgba(0.3).dark}`,
  `0 5px 10px 0 ${rgba(0.1).dark}`,
];
shadows.bold = '0.5px 0 0 currentColor';

export const theme = {
  breakpoints,
  space: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  colors,
  fonts: [`"Open Sans"`],
  fontScales: [
    { fontSize: 'inherit', lineHeight: 'inherit' },
    { fontSize: '1.0rem', lineHeight: '1.2rem' },
    { fontSize: '1.2rem', lineHeight: '1.6rem' },
    { fontSize: '1.4rem', lineHeight: '2.4rem' },
    { fontSize: '1.6rem', lineHeight: '2.4rem' },
    { fontSize: '1.8rem', lineHeight: '2.4rem' },
    { fontSize: '2rem', lineHeight: '3.2rem' },
    { fontSize: '2.4rem', lineHeight: '4rem' },
  ],
  borders: ['none', `1px solid ${colors[4]};`],
  radii: ['0', '4px', '6px'],
  shadows,
  variants: {},
  vars: {
    navbarHeight: 'calc(5.6rem + env(safe-area-inset-top) / 2)', // iPhone notch safe.
  },
};
