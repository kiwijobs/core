import React, { FC } from 'react';
import { Box, Flex, BoxProps } from '../../../quarks';
import { Icon } from '../../Icon';
import { TControl } from '../Form.types';

interface ICheckboxProps extends BoxProps {
  disabled?: boolean;
  variant?: TControl;
}

export const CheckboxControl: FC<ICheckboxProps> = ({ sx, checked, disabled, variant }) => (
  <Flex
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      mr: 2,
      size: variant === 'small' ? '16px' : '20px',
      borderRadius: variant === 'small' ? '2px' : 1,
      border: 1,
      borderColor: 'inherit',
      backgroundColor: 'white',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 1,
      },

      ...(checked && {
        borderColor: 'secondary',
        backgroundColor: 'secondary',
        '&:hover': {
          borderColor: 'secondary',
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

      ...sx,
    }}
  >
    <Icon name="Check" color="white" size={variant === 'small' ? '10px' : '12px'} />
  </Flex>
);

export const RadioControl: FC<BoxProps> = ({ sx, checked, disabled }) => (
  <Box
    sx={{
      position: 'relative',
      mr: 2,
      size: '16px',
      border: 1,
      borderColor: 'inherit',
      borderRadius: '50%',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 1,
      },
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
      ...(disabled && { borderColor: 3, cursor: 'default' }),
      ...sx,
    }}
  />
);
