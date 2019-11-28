import React from 'react';
import { Box, BoxProps } from '../../quarks';
import { rgba } from '../../../theme/colors';
import { useBodyLock } from '../../../hooks';

export const Backdrop = ({ sx, ...props }: BoxProps) => {
  const [ref] = useBodyLock();

  return (
    <Box
      ref={ref}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: rgba(0.4).dark,
        zIndex: -1,
        ...sx,
      }}
      {...props}
    />
  );
};
