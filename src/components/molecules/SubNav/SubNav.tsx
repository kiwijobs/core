import React from 'react';
import { useWindowSize } from 'react-use';
import { BoxProps } from '../../quarks';
import { Carousel } from '../../atoms';
import { SubNavButton } from './SubNav.components';

export const SubNav = ({ sx, children, ...props }: BoxProps) => {
  useWindowSize();

  return (
    <Carousel
      as="nav"
      sx={{
        bg: 'white',
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Carousel>
  );
};

SubNav.Button = SubNavButton;
