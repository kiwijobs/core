import React, { FC } from 'react';
import { Box, Flex, BoxProps } from '../../../quarks';
import { Icon } from '../../Icon';

interface ICheckboxProps extends BoxProps {
  disabled?: boolean;
  small?: boolean;
}

export const CheckboxControl: FC<ICheckboxProps> = ({ sx, checked, disabled, small }) => (
  <Flex
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      size: small ? '16px' : '20px',
      borderRadius: small ? '2px' : 1,
      border: 1,
      borderColor: '2',
      backgroundColor: 'white',

      ...(checked && {
        borderColor: 'secondary',
        backgroundColor: 'secondary',
        '&:hover': {
          cursor: 'pointer',
        },
      }),

      ...(disabled && {
        borderColor: 3,
        '&:hover': {
          cursor: 'default',
        },
      }),

      ...(disabled &&
        checked && {
          backgroundColor: 3,
        }),

      ...(!disabled &&
        !checked && {
          '&:hover': {
            borderColor: 1,
            cursor: 'pointer',
          },
        }),

      ...sx,
    }}
  >
    <Icon name="Check" color="white" size={small ? '10px' : '12px'} />
  </Flex>
);

export const RadioControl: FC<BoxProps> = ({ sx, checked, disabled }) => (
  <Box
    sx={{
      position: 'relative',
      size: '16px',
      border: 1,
      borderColor: 2,
      borderRadius: '50%',
      ...(checked && {
        '&:after': {
          content: '""',
          position: 'absolute',
          size: '10px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: disabled ? 3 : 'secondary',
          borderRadius: '50%',
        },
      }),
      ...(disabled && { borderColor: 3 }),
      ...(!disabled && { '&:hover': { borderColor: 1, cursor: 'default' } }),
      ...sx,
    }}
  />
);
