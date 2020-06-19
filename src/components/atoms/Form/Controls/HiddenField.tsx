import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../../quarks';

export const HiddenField = forwardRef<HTMLInputElement, BoxProps>(({ sx, ...props }, ref) => (
  <Box
    as="input"
    ref={ref}
    sx={{ visibility: 'hidden', position: 'absolute', size: 0 }}
    {...props}
  />
));
