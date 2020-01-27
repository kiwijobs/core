import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';

type TPaper = React.ForwardRefExoticComponent<
  BoxProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
> & {
  Separator(props: BoxProps): JSX.Element;
};

export const Paper = forwardRef(({ sx, ...props }: BoxProps, ref) => (
  <Box
    ref={ref}
    sx={{
      borderRadius: 1,
      backgroundColor: 'white',
      padding: 3,
      boxShadow: 1,
      ...sx,
    }}
    {...props}
  />
)) as TPaper;

Paper.Separator = ({ sx, ...props }) => (
  <Box
    sx={{
      backgroundColor: '4',
      height: '1px',
      width: '100%',
      paddingX: 3,
      marginLeft: -3,
      marginY: 4,
      boxSizing: 'content-box',
      ...sx,
    }}
    {...props}
  />
);
