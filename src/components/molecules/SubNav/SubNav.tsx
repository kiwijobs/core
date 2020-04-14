import React from 'react';
import { useWindowSize } from 'react-use';
import { Box, BoxProps } from '../../quarks';
import { Carousel } from '../../atoms';
import { SubNavButton } from './SubNav.components';

export const SubNav = ({ sx, children, ...props }: BoxProps) => {
  useWindowSize();

  return (
    <Box
      as="nav"
      sx={{
        width: '100%',
        px: 2,
        bg: 'white',
        ...sx,
      }}
      {...props}
    >
      <Carousel>{children}</Carousel>
    </Box>
  );
};

SubNav.Button = SubNavButton;
