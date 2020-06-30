import React, { forwardRef, ReactText } from 'react';
import { xor, flatten } from 'lodash';
import { useField, useFormikContext } from 'formik';
import { TOption, TValue } from '../Form.types';
import { ControlsWrapper } from './Controls.components';
import { Control } from './Control';
import { TControl } from '../Form.types';

export interface ControlsGroupProps {
  options: TOption[];
  value: TValue | TValue[];
  onChange(value: TValue | TValue[]): void;
  type: 'Radio' | 'Checkbox';
  variant?: TControl;
}

interface IFormikControlsGroupProps extends Omit<ControlsGroupProps, 'value' | 'onChange'> {
  name: string;
}

export const ControlsGroup = forwardRef<HTMLDivElement, ControlsGroupProps>(
  ({ options, value, onChange, type, variant, ...props }, ref) => {
    const change = (id: ReactText) => () => {
      onChange(type === 'Checkbox' ? xor(value as TValue[], [id]) : id);
    };

    return (
      <ControlsWrapper ref={ref} {...props}>
        {options.map(({ id, name }) => (
          <Control
            key={id}
            type={type}
            label={name}
            onChange={change(id)}
            checked={flatten([value]).some(x => x === id)}
            variant={variant}
          />
        ))}
      </ControlsWrapper>
    );
  }
);

export const FormikControlsGroup = ({ name, ...props }: IFormikControlsGroupProps) => {
  const { setFieldValue } = useFormikContext<any>();
  const [{ value, onChange, ...field }] = useField<TValue>(name);

  const handleChange = (value: TValue) => setFieldValue(name, value);

  return <ControlsGroup value={value} onChange={handleChange} {...field} {...props} />;
};
