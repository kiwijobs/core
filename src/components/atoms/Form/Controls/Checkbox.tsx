import React, { FC } from 'react';
import { Invisifield } from '../Invisifield';
import { BoxProps } from '../../../quarks';
import { CheckboxControl } from './Controls.components';

interface ICheckboxProps extends BoxProps<HTMLInputElement> {
  disabled?: boolean;
  small?: boolean;
}

export const Checkbox: FC<ICheckboxProps> = ({
  onChange,
  checked,
  disabled,
  small,
  sx,
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
      <CheckboxControl checked={checked} disabled={disabled} small={small} sx={sx} />
    </>
  );
};
