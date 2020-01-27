import { get } from 'lodash';
import { system } from 'styled-system';
import { rgb } from '../../../theme/colors';
export const cc = (color: number, l: number, bg: number) => Math.floor(color * l + bg * (1 - l));
export const colorKeys = ['bg', 'backgroundColor', 'color', 'borderColor', 'fill', 'stroke'];

function hexify(color: string, lightness: number) {
  const toLight = lightness > 100;
  const hslAlpha = (toLight ? (lightness - 200) * -1 : lightness) / 100;
  const values = color
    ? color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',')
        .map(c => cc(Number(c), hslAlpha, toLight ? 255 : 0))
        .join(', ')
    : '';

  return `rgb(${values})`;
}

export const transform = (value: any, scale: any) => {
  if (!value) return;

  const scaledValue = get(scale, value, '');
  if (scaledValue.length > 1) {
    return scaledValue;
  }

  if (value.indexOf('rgb') > -1 || value.indexOf('#') > -1) {
    return value;
  }

  const [colorOrValue, lightness] = value.split('.') || [];
  const color = scale[colorOrValue];

  if (!lightness) {
    return color || colorOrValue;
  }

  return hexify(color, lightness);
};

const config = {
  color: {
    property: 'color' as 'color',
    scale: 'colors' as 'colors',
    transform,
  },
  backgroundColor: {
    property: 'backgroundColor' as 'backgroundColor',
    scale: 'colors' as 'colors',
    transform,
  },
  opacity: true,
  bg: {},
};
config.bg = config.backgroundColor;

export const color = system(config);

export type TColor = keyof typeof rgb | number | string;

export interface ISystemColor {
  backgroundColor?: TColor;
  bg?: TColor;
  color?: TColor;
  borderColor?: TColor;
  fill?: TColor;
  stroke?: TColor;
}
