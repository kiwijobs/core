import { IThemeValue } from '../theme';

export enum rgb {
  primary = 'rgb(8, 191, 130)',
  secondary = 'rgb(83, 109, 254)',
  warning = 'rgb(255, 151, 23)',
  danger = 'rgb(245, 0, 87)',
  white = 'rgb(255,255,255)',
  dark = 'rgb(0, 0, 0)',
}

export const colors: IThemeValue = [
  'inherit',
  'rgb(39,50,55)',
  'rgb(133,136,149)',
  'rgb(204,206,220)',
  'rgb(228,230,237)',
  'rgb(248,249,253)',
];
colors.dark = rgb.dark;
colors.white = rgb.white;
colors.primary = rgb.primary;
colors.secondary = rgb.secondary;
colors.warning = rgb.warning;
colors.danger = rgb.danger;

// @DEPRECATED
colors.tangerine = rgb.warning;
colors.pink = rgb.danger;

export const rgba = (alpha = 1) =>
  Object.entries(rgb).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value.replace(')', `, ${alpha})`).replace(/rgb/, 'rgba'),
    }),
    {} as typeof rgb
  );
