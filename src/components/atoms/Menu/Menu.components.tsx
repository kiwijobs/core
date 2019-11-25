import React, { FC, forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';

export const MenuWrapper: FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => (
    <Box width={['100vw', 'initial']} paddingX={3} {...props}>
      <Box
        sx={{
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'paleGrey',
          transformOrigin: 'center top',
          '&:focus': {
            outline: 'none',
          },
        }}
        width="100%"
        py={3}
        bg="white"
        ref={ref}
      >
        {children}
      </Box>
    </Box>
  )
);

export const MenuList: FC<BoxProps> = props => <Box {...props} />;
export const MenuItem: FC<BoxProps> = props => (
  <Box
    sx={{
      transition: '150ms ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        bg: 'paleGreyThree',
      },
    }}
    py={3}
    px={6}
    {...props}
  />
);
