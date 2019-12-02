import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Message = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      color: 'steel',
      marginBottom: 1,
      ...sx,
    }}
    fontScale={5}
    {...props}
  />
);
