import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { CheckboxControl } from '../../../atoms';
import { BoxProps } from '../../../quarks';
import { ControlsLabel } from './Controls.components';

interface ICheckboxProps extends BoxProps<HTMLInputElement> {
  name?: string;
  label?: string;
  direction?: string;
}

interface IFormikCheckboxProps extends ICheckboxProps {
  name: string;
}

export const Checkbox = forwardRef<HTMLDivElement, ICheckboxProps>(
  ({ label, name, sx, disabled, ...props }, ref) => (
    <ControlsLabel disabled={disabled} ref={ref}>
      <CheckboxControl name={name} sx={{ mr: 2 }} disabled={disabled} {...props} />
      {label}
    </ControlsLabel>
  )
);

export const FormikCheckbox = ({ name, ...props }: IFormikCheckboxProps) => {
  const [{ value, onChange, ...field }, meta] = useField(name);

  return <Checkbox onChange={onChange} checked={!!value} {...meta} {...field} {...props} />;
};
