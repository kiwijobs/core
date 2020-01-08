import { BoxProps } from '../Reflexbox';
import { system } from 'styled-system';

export const transformFontScale = (props: BoxProps) => (value: any, scale: any) => {
  const { fontSize, lineHeight } = scale[value];
  const fonts = props?.theme?.fonts ?? 'sans-serif';
  return `${fontSize} / ${lineHeight} ${fonts[0]}`;
};
export const fontScale = (props: BoxProps) =>
  system({
    fontScale: {
      scale: 'fontScales',
      property: 'font',
      transform: transformFontScale(props),
    },
  });
