import React, { FC } from 'react';
import { Invisifield } from '../Invisifield';
import { BoxProps } from '../../../quarks';
import { CheckboxControl } from './Controls.components';
import { TControl } from '../Form.types';

interface ICheckboxProps extends BoxProps<HTMLInputElement> {
  variant?: TControl;
}

export const Checkbox: FC<ICheckboxProps> = ({
  onChange,
  checked,
  disabled,
  sx,
  variant = 'default',
  ...props
}) => {
  return (
    <>
      <Invisifield
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <CheckboxControl checked={checked} disabled={disabled} variant={variant} sx={sx} />
    </>
  );
};
