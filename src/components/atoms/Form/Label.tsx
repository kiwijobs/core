import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Label = ({ sx, ...props }: BoxProps) => (
  <Box
    as="label"
    sx={{
      color: '2',
      display: 'block',
      ...sx,
    }}
    fontScale={3}
    {...props}
  />
);
