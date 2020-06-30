import React, { FC } from 'react';
import { Invisifield } from '../Invisifield';
import { BoxProps } from '../../../quarks';
import { RadioControl } from './Controls.components';

export const Radio: FC<BoxProps> = ({ checked, disabled, sx, ...props }) => (
  <>
    <Invisifield type="radio" checked={checked} disabled={disabled} {...props} />
    <RadioControl checked={checked} disabled={disabled} sx={sx} />
  </>
);
