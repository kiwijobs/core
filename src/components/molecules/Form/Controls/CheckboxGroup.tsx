import React, { forwardRef, ReactText } from 'react';
import { xor } from 'lodash';
import { useField, useFormikContext } from 'formik';
import { TOption } from '../Form.types';
import { Checkbox } from './Checkbox';
import { ControlsWrapper } from './Controls.components';

type TValue = ReactText[];

export interface CheckboxGroupProps {
  options: TOption[];
  value: TValue;
  onChange(value: TValue): void;
}

interface IFormikCheckboxGroupProps extends Omit<CheckboxGroupProps, 'value' | 'onChange'> {
  name: string;
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ options, value, onChange, ...props }, ref) => {
    const change = (id: ReactText) => () => {
      onChange(xor(value, [id]));
    };

    return (
      <ControlsWrapper ref={ref} {...props}>
        {options.map(option => (
          <Checkbox
            key={option.id}
            label={option.name}
            onChange={change(option.id)}
            checked={value.some(x => x === option.id)}
          />
        ))}
      </ControlsWrapper>
    );
  }
);

export const FormikCheckboxGroup = ({ name, ...props }: IFormikCheckboxGroupProps) => {
  const { setFieldValue } = useFormikContext<any>();
  const [{ value, onChange, ...field }] = useField<TValue>(name);

  const handleChange = (value: TValue) => setFieldValue(name, value);

  return <CheckboxGroup value={value} onChange={handleChange} {...field} {...props} />;
};
