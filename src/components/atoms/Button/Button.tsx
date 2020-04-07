import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';
import { Loader } from '../Loader';

export interface ButtonProps extends BoxProps<HTMLButtonElement> {
  loading?: boolean;
  variant: Pick<BoxProps, 'theme'>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading = false, ...props }, ref) => (
    <Box ref={ref} tx="buttons" as={'button' as 'button'} type="button" {...props}>
      {loading ? <Loader /> : children}
    </Box>
  )
);
