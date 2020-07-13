import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { Radio, Checkbox } from '../../../atoms';
import { BoxProps, Text } from '../../../quarks';
import { ControlsLabel } from './Controls.components';

export type TControl = 'default' | 'small';

interface IControlProps extends BoxProps<HTMLInputElement> {
  name?: string;
  label?: string;
  value?: string;
  type: 'Radio' | 'Checkbox';
  variant?: TControl;
}

interface IFormikControlProps extends IControlProps {
  name: string;
}

const components = { Radio, Checkbox };

export const Control = forwardRef<HTMLDivElement, IControlProps>(
  ({ label, name, checked, disabled, variant, type, ...props }, ref) => {
    const Component = components[type];

    return (
      <ControlsLabel disabled={disabled} checked={checked} ref={ref}>
        <Component name={name} checked={checked} disabled={disabled} variant={variant} {...props} />
        <Text color={disabled ? 2 : 1} fontScale={variant === 'small' ? 2 : 3}>
          {label}
        </Text>
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
