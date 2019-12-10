import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Message = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      color: 'steel',
      ...sx,
    }}
    fontScale={2}
    {...props}
  />
);
