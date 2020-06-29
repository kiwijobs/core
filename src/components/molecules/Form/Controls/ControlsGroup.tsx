import React, { forwardRef, ReactText } from 'react';
import { xor, flatten } from 'lodash';
import { useField, useFormikContext } from 'formik';
import { TOption, TValue } from '../Form.types';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { ControlsWrapper } from './Controls.components';

export interface ControlsGroupProps {
  options: TOption[];
  value: TValue | TValue[];
  onChange(value: TValue | TValue[]): void;
  type: 'Radio' | 'Checkbox';
}

interface IFormikControlsGroupProps extends Omit<ControlsGroupProps, 'value' | 'onChange'> {
  name: string;
}

const components = { Checkbox, Radio };

export const ControlsGroup = forwardRef<HTMLDivElement, ControlsGroupProps>(
  ({ options, value, onChange, type, ...props }, ref) => {
    const Component = components[type];

    const change = (id: ReactText) => () => {
      onChange(type === 'Checkbox' ? xor(value as TValue[], [id]) : id);
    };

    return (
      <ControlsWrapper ref={ref} {...props}>
        {options.map(option => (
          <Component
            key={option.id}
            label={option.name}
            onChange={change(option.id)}
            checked={flatten([value]).some(x => x === option.id)}
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
