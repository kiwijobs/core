import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';
import * as icons from './icons';

export interface IconProps extends BoxProps {
  name: keyof typeof icons;
}

export const Icon = forwardRef<HTMLOrSVGElement, IconProps>(({ name, sx, ...props }, ref) => {
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
        ...sx,
      }}
      {...rest}
      {...props}
    >
      {jsx}
    </Box>
  );
});
