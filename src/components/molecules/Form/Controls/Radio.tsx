import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { RadioControl } from '../../../atoms';
import { BoxProps, Text } from '../../../quarks';
import { ControlsLabel } from './Controls.components';

interface IRadioProps extends BoxProps<HTMLInputElement> {
  name?: string;
  label?: string;
  value?: string;
}

interface IFormikRadioProps extends IRadioProps {
  name: string;
}

export const Radio = forwardRef<HTMLDivElement, IRadioProps>(
  ({ label, name, disabled, ...props }, ref) => (
    <ControlsLabel disabled={disabled} ref={ref}>
      <RadioControl name={name} sx={{ mr: 2 }} {...props} />
      <Text>{label}</Text>
    </ControlsLabel>
  )
);

export const FormikRadio = ({ name, ...props }: IFormikRadioProps) => {
  const [{ onChange, value }] = useField(name);
  return <Radio onChange={onChange} id={name} value={name} checked={value === name} {...props} />;
};
