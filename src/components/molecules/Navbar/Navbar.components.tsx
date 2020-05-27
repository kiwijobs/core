import React, { FC, memo } from 'react';
import { useTheme } from '../../../hooks';
import { Box, BoxProps } from '../../quarks';
import { Icon, Button } from '../../atoms';
import { rgba } from '../../../theme';

export const NavbarOuter: FC<BoxProps> = ({ sx, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bg: '1',
        color: 'white',
        px: 4,
        width: '100%',
        height: theme?.vars.navbarHeight,
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: '0',
        ...sx,
      }}
      {...props}
    />
  );
};

export const NavbarLogo: FC<INavbarLogo> = memo(({ sx, withOlx = true, children, ...props }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', ...sx }} {...props}>
    <Icon sx={{ width: 80 }} name="Kiwi" />
    {withOlx && (
      <>
        <Box sx={{ ml: 2, mr: 1, fontScale: 1 }}>część</Box>
        <Icon sx={{ width: 26 }} name="Olx" />
      </>
    )}
    {children}
  </Box>
));

export const NavbarContainer: FC<BoxProps> = memo(({ sx, ...props }) => (
  <Box
    sx={{
      flex: 1,
      mx: 6,
      display: 'flex',
      height: 'inherit',
      ...sx,
    }}
    {...props}
  />
));

export const NavbarItem: FC<INavbarItem> = memo(({ sx, children, active, ...props }) => (
  <Button
    sx={{
      display: 'flex',
      alignItems: 'center',
      height: 'inherit',
      position: 'relative',
      px: 3,
      textTransform: 'uppercase',
      transition: 'all 150ms ease-in-out',

      ...(active && {
        bg: rgba(0.05).white,

        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          mx: 3,
          height: '3px',
          bg: 'primary',
        },
      }),

      '&:hover': {
        bg: rgba(0.1).white,
      },

      ...sx,
    }}
    {...props}
  >
    {children}
  </Button>
));

interface INavbarLogo extends BoxProps {
  withOlx?: boolean;
}
interface INavbarItem extends BoxProps<HTMLButtonElement> {
  active?: boolean;
}
