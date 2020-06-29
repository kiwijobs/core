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
      ...(disabled && {
        color: '2',
        cursor: 'default',
      }),
      ...(!disabled && {
        cursor: 'pointer',
      }),
      ...(!disabled &&
        !checked && {
          '&:hover': {
            '> div': {
              borderColor: '1',
            },
          },
        }),
    }}
    {...props}
  />
);
