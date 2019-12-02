import React, { forwardRef } from 'react';
import { Box, BoxProps } from './Reflexbox';

export const Button = forwardRef<HTMLButtonElement, BoxProps>(({ sx, ...props }, ref) => (
  <Box
    ref={ref}
    as={'button' as 'button'}
    type="button"
    sx={{
      cursor: 'pointer',
      color: 'inherit',
      bg: 'transparent',
      transition: 'all 150ms ease-in-out',
      textAlign: 'center',
      position: 'relative',
      ' -webkit-tap-highlight-color': 'transparent',
      boxShadow: 'none',
      outline: 'none',

      '&:disabled': {
        pointerEvents: 'none',
      },

      ...sx,
    }}
    {...props}
  />
));
