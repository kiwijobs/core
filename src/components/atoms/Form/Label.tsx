import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Label = ({ sx, ...props }: BoxProps) => (
  <Box
    as="label"
    sx={{
      color: 'steel',
      display: 'block',
      ...sx,
    }}
    fontScale={3}
    {...props}
  />
);
