import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Badge = ({ sx, ...props }: BoxProps) => (
  <Box
    sx={{
      size: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontScale: 1,
      fontWeight: 'bold',
      bg: 'primary',
      color: 'white',
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: '50px',
      transform: 'translate(50%, -50%)',
      ...sx,
    }}
    {...props}
  />
);
