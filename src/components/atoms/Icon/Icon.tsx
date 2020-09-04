import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';
import * as icons from './icons';

type Direction = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT';

export type TIconName = keyof typeof icons;

export interface IconProps extends BoxProps<HTMLOrSVGElement> {
  name: TIconName;
  direction?: Direction;
}

const getDirection = (direction: Direction) => {
  switch (direction) {
    case 'UP':
      return;
    case 'RIGHT':
      return 'rotate(90deg)';
    case 'DOWN':
      return 'rotate(180deg)';
    case 'LEFT':
      return 'rotate(-90deg)';
    default:
      return;
  }
};

export const Icon = forwardRef<HTMLOrSVGElement, IconProps>(
  ({ name, direction = 'UP', sx, ...props }, ref) => {
    const { jsx, ...rest } = icons[name] || {};

    if (!jsx) {
      console.warn('No icon with a name: ' + name);
      return null;
    }

    return (
      <Box
        as="svg"
        ref={ref}
        sx={{
          size: '2.4rem',
          flex: '0 0 auto',
          transform: getDirection(direction),
          ...sx,
        }}
        {...rest}
        {...props}
      >
        {jsx}
      </Box>
    );
  }
);
