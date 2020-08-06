import React, { FC } from 'react';
import { BoxProps, Flex } from '../../quarks';
import { rgba } from '../../../theme';

export const Tag: FC<BoxProps> = ({ sx, ...props }) => (
  <Flex
    sx={{
      bg: rgba(0.1).secondary,
      px: 2,
      py: 1,
      borderRadius: 1,
      color: 'secondary',
      fontScale: 2,
      alignSelf: 'center',
      justifySelf: 'center',
      flexShrink: 0,
      ...sx,
    }}
    {...props}
  />
);
