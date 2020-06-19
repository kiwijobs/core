import React, { forwardRef } from 'react';
import { useField, useFormikContext } from 'formik';
import { Radio } from './Radio';
import { ControlsWrapper } from './Controls.components';

type TOption = { name: string };
type TValue = string;

export interface RadioGroupProps {
  options: TOption[];
  value: TValue;
  onChange(value: TValue): void;
}

interface IFormikRadioGroupProps extends Omit<RadioGroupProps, 'value' | 'onChange'> {
  name: TValue;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, value, onChange, ...props }, ref) => {
    const change = (name: TValue) => () => {
      onChange(name);
    };

    return (
      <ControlsWrapper ref={ref} {...props}>
        {options.map((x, index) => (
          <Radio
            key={x.name + index}
            label={x.name}
            onChange={change(x.name)}
            checked={value === x.name}
          />
        ))}
      </ControlsWrapper>
    );
  }
);

export const FormikRadioGroup = ({ name, ...props }: IFormikRadioGroupProps) => {
  const { setFieldValue } = useFormikContext<any>();
  const [{ value, onChange, ...field }] = useField(name);

  const handleChange = (value: string) => setFieldValue(name, value);

  return <RadioGroup value={value} onChange={handleChange} {...field} {...props} />;
};
