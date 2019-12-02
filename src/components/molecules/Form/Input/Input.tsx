import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { FieldGroup, FieldGroupProps } from '../FieldGroup';
import { Field } from '../../../atoms';
import { BoxProps } from '../../../quarks';

interface InputProps extends FieldGroupProps, BoxProps<HTMLInputElement> {}

export const Input = forwardRef<HTMLDivElement, InputProps>(({ label, error, ...props }, ref) => (
  <FieldGroup label={label} error={error} ref={ref}>
    <Field as="input" {...props} />
  </FieldGroup>
));

export const FormikInput = ({ name = '', ...props }: InputProps) => {
  const [field, meta] = useField(name);

  return <Input {...meta} {...field} {...props} />;
};
