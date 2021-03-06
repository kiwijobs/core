import React, { forwardRef } from 'react';
import { Box, Flex, BoxProps } from '../../quarks';

type TList = React.ForwardRefExoticComponent<
  BoxProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
> & {
  Item: (props: BoxProps) => JSX.Element;
};

export const List = forwardRef<HTMLDivElement, BoxProps>(({ sx, ...props }, ref) => (
  <Box
    as="ul"
    ref={ref}
    tabIndex={0}
    sx={{
      textAlign: 'left',
      position: 'relative',
      listStyle: 'none',
      width: '100%',
      px: 0,
      m: 0,
      py: 2,
      '&:focus': {
        outline: 'none',
      },
      ...sx,
    }}
    {...props}
  />
)) as TList;

List.Item = ({ sx, ...props }: BoxProps) => (
  <Flex
    as="li"
    sx={{
      transition: '150ms ease-in-out',
      cursor: 'pointer',
      py: 2,
      px: 3,
      userSelect: 'none',
      fontScale: 2,

      '&:hover': {
        bg: '5',
      },
      ...sx,
    }}
    {...props}
  />
);
