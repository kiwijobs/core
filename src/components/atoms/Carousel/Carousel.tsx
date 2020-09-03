import React from 'react';
import { Box, BoxProps } from '../../quarks';

interface ICarousel extends BoxProps {
  parentOverflow?: string;
}

export const Carousel = ({ parentOverflow = 'hidden', sx, children, ...props }: ICarousel) => (
  <Box
    sx={{
      overflow: parentOverflow,
      mt: '-20px !important',
    }}
  >
    <Box
      sx={{
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
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  </Box>
);
