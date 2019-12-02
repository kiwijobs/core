import React from 'react';
import { Box, BoxProps } from '../../quarks';

export const Carousel = ({ sx, children, ...props }: BoxProps) => (
  <Box
    sx={{
      overflow: 'hidden',
      mt: '-20px !important',
    }}
  >
    <Box
      sx={{
        ...sx,
        pb: '20px !important',
        transform: 'translateY(20px) !important',
        scrollSnapType: ['x mandatory', 'initial'],
        overscrollBehaviorX: 'contain',
        overflow: 'hidden',
        overflowX: 'auto',
        whiteSpace: 'nowrap',

        '& > *': {
          whiteSpace: 'initial',
          scrollSnapAlign: 'center',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  </Box>
);
