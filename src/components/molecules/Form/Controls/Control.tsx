import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { Radio, Checkbox } from '../../../atoms';
import { BoxProps, Text } from '../../../quarks';
import { ControlsLabel } from './Controls.components';

interface IControlProps extends BoxProps<HTMLInputElement> {
  name?: string;
  label?: string;
  value?: string;
  type: 'Radio' | 'Checkbox';
}

interface IFormikControlProps extends IControlProps {
  name: string;
}

const components = { Radio, Checkbox };

export const Control = forwardRef<HTMLDivElement, IControlProps>(
  ({ label, name, disabled, type, ...props }, ref) => {
    const Component = components[type];
    return (
      <ControlsLabel disabled={disabled} checked={props.checked} ref={ref}>
        <Component name={name} sx={{ mr: 2 }} disabled={disabled} {...props} />
        <Text>{label}</Text>
      </ControlsLabel>
    );
  }
);

export const FormikControl = ({ name, type, ...props }: IFormikControlProps) => {
  const [{ onChange, value, ...field }] = useField(name);
  const checked = type === 'Radio' ? value === name : !!value.length;

  return (
    <Control onChange={onChange} checked={checked} value={name} type={type} {...field} {...props} />
  );
};
