import React from 'react';
import { FieldGroup, FieldGroupProps } from '../FieldGroup';
import { Field } from '../../../atoms';
import { BoxProps } from '../../../quarks';

interface InputProps extends FieldGroupProps, BoxProps<HTMLInputElement> {}

export const Input = ({ label, error, ...props }: InputProps) => (
  <FieldGroup label={label} error={error}>
    <Field as="input" {...props} />
  </FieldGroup>
);
