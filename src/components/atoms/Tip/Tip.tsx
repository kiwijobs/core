import React, { FC } from 'react';
import { Box, BoxProps } from '../../quarks';

export const Tip: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{
      fontScale: 2,
      bg: 5,
      p: 3,
      borderRadius: 1,
      ...sx,
    }}
    {...props}
  />
);
