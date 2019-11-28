import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Paper = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      borderRadius: 1,
      backgroundColor: 'white',
      padding: [3, 5],
      boxShadow: 1,
      ...sx,
    }}
    {...props}
  />
);

Paper.Separator = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      backgroundColor: 'paleGrey',
      height: '1px',
      width: '100%',
      paddingX: [3, 5],
      marginLeft: [-3, -5],
      marginY: [4, 5],
      boxSizing: 'content-box',
      ...sx,
    }}
    {...props}
  />
);
