import React from 'react';
import { BoxProps, Box } from '../../quarks';

export interface SubNavButton extends BoxProps {
  isActive?: boolean;
}
export const SubNavButton = ({ isActive, sx, ...props }: SubNavButton) => {

  return (
    <Box
      as={'button' as 'button'}
      sx={{
        position: 'relative',
        color: isActive ? '1' : '2',
        px: 0,
        py: 3,
        border: 'none',
        '&:not(:first-of-type)': {
          ml: [6, '6rem'],
        },
        '&:hover': {
          color: '1',
        },
        ...(isActive && {
          '&:after': {
              content: '""',
              display: 'block',
              position: 'absolute',
              width: '100%',
              borderBottom: '3px solid',
              borderColor: 'primary',
              bottom: 0,
            }
        }),
        ...sx,
      }}
      {...props}
    />
  );
};
