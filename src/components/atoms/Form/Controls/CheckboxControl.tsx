import React, { FC } from 'react';
import { Invisifield } from '../Invisifield';
import { BoxProps, Flex } from '../../../quarks';
import { Icon } from '../../Icon';

interface ICheckboxProps extends BoxProps<HTMLInputElement> {
  disabled?: boolean;
  small?: boolean;
}

export const CheckboxControl: FC<ICheckboxProps> = ({
  onChange,
  checked,
  disabled,
  small,
  sx,
  ...props
}) => {
  return (
    <>
      <Invisifield
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          size: small ? '16px' : '20px',
          borderRadius: small ? '2px' : 1,
          border: 1,
          borderColor: '2',
          backgroundColor: 'white',

          ...(checked && {
            borderColor: 'secondary',
            backgroundColor: 'secondary',
            '&:hover': {
              cursor: 'pointer',
            },
          }),

          ...(disabled && {
            borderColor: 3,
            '&:hover': {
              cursor: 'auto',
            },
          }),

          ...(disabled &&
            checked && {
              backgroundColor: 3,
            }),

          ...(!disabled &&
            !checked && {
              '&:hover': {
                borderColor: 1,
                cursor: 'pointer',
              },
            }),

          ...sx,
        }}
      >
        <Icon name="Check" color="white" size={small ? '10px' : '12px'} />
      </Flex>
    </>
  );
};
