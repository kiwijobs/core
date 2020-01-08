import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Message = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      color: '2',
      ...sx,
    }}
    fontScale={2}
    {...props}
  />
);
