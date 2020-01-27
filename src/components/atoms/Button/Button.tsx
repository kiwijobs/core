import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';
import { Loader } from '../Loader';
import * as variants from './Button.components';

export interface ButtonProps extends BoxProps<HTMLButtonElement> {
  variant?: keyof typeof variants;
  loading?: boolean;
}

export const Button = forwardRef(
  ({ sx, variant, children, loading = false, ...props }: ButtonProps, ref) => (
    <Box
      sx={{
        ...(variant && variants[variant]),
        ...sx,
      }}
      ref={ref}
      as={'button' as 'button'}
      type="button"
      {...props}
    >
      {loading ? <Loader /> : children}
    </Box>
  )
);
