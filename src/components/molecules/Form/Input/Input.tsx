import React, { forwardRef } from 'react';
import { useField } from 'formik';
import InputMask, {Props as InputMaskProps} from 'react-input-mask';
import { FieldGroup, FieldGroupProps } from '../FieldGroup';
import { Field, FieldProps } from '../../../atoms';
import { BoxProps } from '../../../quarks';

interface InputProps extends FieldGroupProps, BoxProps<HTMLInputElement> {
  mask?: string;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ label, error, value, maxLength, mask, ...props }, ref) => (
    <FieldGroup label={label} value={value} maxLength={maxLength} error={error} ref={ref}>
      {mask ? (
        <InputMask mask={mask} value={value} {...props as InputMaskProps}>
          {(inputProps: FieldProps) => (
            <Field
              as="input"
              value={value}
              maxLength={maxLength}
              error={!!error}
              {...props}
              {...inputProps}
            />
          )}
        </InputMask>
      ) : (
        <Field as="input" value={value} maxLength={maxLength} error={!!error} {...props} />
      )}
    </FieldGroup>
  )
);

export const FormikInput = ({ name = '', ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const { error, touched, ...restMeta } = meta;

  return <Input error={touched && error} {...restMeta} {...field} {...props} />;
};
