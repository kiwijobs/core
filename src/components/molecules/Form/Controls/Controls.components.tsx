import React, { FC } from 'react';
import { BoxProps, Flex } from '../../../quarks';

export const ControlsWrapper: FC<BoxProps> = props => (
  <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }} {...props} />
);

export const ControlsLabel: FC<BoxProps> = ({ checked, disabled, ...props }) => (
  <Flex
    as="label"
    sx={{
      alignItems: 'center',
      mr: 2,
      mb: 3,
      color: 2,
      cursor: 'pointer',
      '&:hover': {
        borderColor: '1',
      },
      ...(disabled && {
        color: '2',
        cursor: 'default',
      }),
    }}
    {...props}
  />
);
