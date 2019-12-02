import React, { useState, RefObject } from 'react';
import { Box, BoxProps } from '../../quarks';
import { SubNavButton, SubNavContext } from './SubNav.components';

export const SubNav = ({ sx, children, ...props }: BoxProps) => {
  const [active, setActive] = useState<RefObject<HTMLButtonElement>>({ current: null });
  const { width = 0, left = 0 } = active.current ? active.current.getBoundingClientRect() : {};

  return (
    <SubNavContext.Provider value={setActive}>
      <Box
        as="nav"
        sx={{ px: 4, bg: 'white', width: '100%', position: 'relative', ...sx }}
        {...props}
      >
        {children}
        <Box
          sx={{
            bg: 'greenBlue',
            height: '3px',
            position: 'absolute',
            bottom: '0',
            left,
            width,
            transition: 'all 150ms ease-in-out',
          }}
        />
      </Box>
    </SubNavContext.Provider>
  );
};

SubNav.Button = SubNavButton;
