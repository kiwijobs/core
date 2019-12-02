import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';

interface FieldProps extends BoxProps<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ sx, error, disabled, ...props }, ref) => (
    <Box
      as="input"
      ref={ref}
      sx={{
        color: 'dark',
        marginY: 1,
        border: 1,
        borderRadius: 1,
        width: '100%',
        paddingX: 3,
        paddingY: 2,
        outline: 'none',
        webkitAppearance: 'none',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          webkitAppearance: 'none',
          margin: 0,
        },

        '&[type="number"]': {
          mozAppearance: 'textfield',
        },

        '&:hover': {
          borderColor: 'steel',
        },

        '&:focus': {
          borderColor: 'lightishBlue',
        },

        ...(error && {
          borderColor: 'pinkRed',
          '&:hover': {
            borderColor: 'pinkRed',
          },
          '&:focus': {
            borderColor: 'pinkRed',
          },
        }),

        ...(disabled && {
          backgroundColor: 'paleGreyTwo',
          color: 'steel',
          pointerEvents: 'none',
          '&:hover': {
            borderColor: 'paleGrey',
          },
        }),

        ...sx,
      }}
      fontScale={4}
      {...props}
    />
  )
);
