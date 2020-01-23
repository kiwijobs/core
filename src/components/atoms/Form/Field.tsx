import React, { forwardRef } from 'react';
import { Box, BoxProps } from '../../quarks';

export interface FieldProps extends BoxProps<HTMLInputElement> {
  error?: boolean;
  disabled?: boolean;
  value?: number | string | undefined;
  maxLength?: number;
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ sx, error, disabled, ...props }, ref) => (
    <Box
      as="input"
      ref={ref}
      sx={{
        color: '1',
        display: 'block',
        border: 1,
        borderRadius: 1,
        width: '100%',
        paddingX: 3,
        paddingY: 2,
        resize: 'none',
        outline: 'none',
        '-webkit-appearance': 'none',
        transition: 'border-color 150ms ease-in-out',

        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          webkitAppearance: 'none',
          margin: 0,
        },

        '&[type="number"]': {
          mozAppearance: 'textfield',
        },

        '&:hover': {
          borderColor: 2,
        },

        '&:focus': {
          borderColor: 'secondary',
        },

        ...(error && {
          borderColor: 'pink',
          '&:hover': {
            borderColor: 'pink',
          },
          '&:focus': {
            borderColor: 'pink',
          },
        }),

        ...(disabled && {
          backgroundColor: 5,
          color: 'steel',
          pointerEvents: 'none',
          '&:hover': {
            borderColor: 4,
          },
        }),
        ...sx,
      }}
      fontScale={3}
      {...props}
    />
  )
);
