import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';

interface ListItemProps extends BoxProps {
  dense?: boolean;
}

type TList = React.ForwardRefExoticComponent<
  BoxProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
> & {
  Item: (props: ListItemProps) => JSX.Element;
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

List.Item = ({ sx, dense, ...props }: ListItemProps) => (
  <Box
    as="li"
    sx={{
      transition: '150ms ease-in-out',
      cursor: 'pointer',
      py: 2,
      px: 3,

      ...(dense && {
        py: 1,
        fontScale: 2,
      }),

      '&:hover': {
        bg: 'paleGreyThree',
      },
      ...sx,
    }}
    {...props}
  />
);
