import React, { forwardRef } from 'react';
import get from 'lodash/get';
import omit from 'lodash/omit';
import { useField, useFormikContext } from 'formik';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { FieldGroup, FieldGroupProps } from '../FieldGroup';
import { Field, FieldProps } from '../../../atoms';
import { BoxProps } from '../../../quarks';

interface InputProps extends FieldGroupProps, BoxProps<HTMLInputElement> {
  mask?: string;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ label, error, value, maxLength, ...props }, ref) => (
    <FieldGroup label={label} value={value} maxLength={maxLength} error={error} ref={ref}>
      {props.mask ? (
        <InputMask value={value} {...(props as InputMaskProps)}>
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
  const { status, setStatus } = useFormikContext();
  const [field, meta] = useField(name);
  const { onChange, ...restField } = field;
  const { error, touched, ...restMeta } = meta;

  const apiError = get(status, name, undefined);

  return (
    <Input
      error={touched && (error || apiError)}
      onChange={v => {
        if (apiError) {
          const restStatus = omit(status, name);
          setStatus(restStatus);
        }
        onChange(v);
      }}
      {...restMeta}
      {...restField}
      {...props}
    />
  );
};
