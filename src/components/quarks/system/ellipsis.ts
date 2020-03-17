import { system } from 'styled-system';
import { BoxProps } from '../Reflexbox';

export const transformEllipsis = (_props: BoxProps) => (value: any) => {
  return `${value}`;
};

export const ellipsis = (props: BoxProps) =>
  system({
    ellipsis: {
      transform: transformEllipsis(props),
    },
  });
