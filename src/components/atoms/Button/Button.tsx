import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';
import * as variants from './Button.components';

export interface ButtonProps extends BoxProps<HTMLButtonElement> {
  variant?: keyof typeof variants;
}

export const Button = forwardRef(({ sx, variant, ...props }: ButtonProps, ref) => (
  <Box
    sx={{
      ...(variant && variants[variant]),
      ...sx,
    }}
    ref={ref}
    as={'button' as 'button'}
    type="button"
    {...props}
  />
));
