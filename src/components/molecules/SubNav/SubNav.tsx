import React from 'react';
import { useWindowSize } from 'react-use';
import { BoxProps } from '../../quarks';
import { Carousel, Container } from '../../atoms';
import { SubNavButton } from './SubNav.components';

export const SubNav = ({ sx, children, ...props }: BoxProps) => {
  useWindowSize();

  return (
    <Container
      as="nav"
      sx={{
        width: '100%',
        bg: 'white',
        ...sx,
      }}
      py={0}
      {...props}
    >
      <Carousel>{children}</Carousel>
    </Container>
  );
};

SubNav.Button = SubNavButton;
