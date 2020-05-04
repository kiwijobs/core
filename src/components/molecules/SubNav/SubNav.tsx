import React from 'react';
import { useWindowSize } from 'react-use';
import { BoxProps, Box } from '../../quarks';
import { Carousel, Container } from '../../atoms';
import { SubNavButton } from './SubNav.components';

export const SubNav = ({ sx, children, ...props }: BoxProps) => {
  useWindowSize();

  return (
    <Box
      as="nav"
      sx={{
        bg: 'white',
        ...sx,
      }}
      {...props}
    >
      <Container py={0}>
        <Carousel>{children}</Carousel>
      </Container>
    </Box>
  );
};

SubNav.Button = SubNavButton;
