import React, { FC } from 'react';
import { HiddenField } from './HiddenField';
import { Box, BoxProps } from '../../../quarks';

export const RadioControl: FC<BoxProps> = ({ sx, checked, disabled, ...props }) => (
  <>
    <HiddenField type="radio" checked={checked} disabled={disabled} {...props} />
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
        ...(!disabled && { '&:hover': { borderColor: 1, cursor: 'pointer' } }),
        ...sx,
      }}
    />
  </>
);
