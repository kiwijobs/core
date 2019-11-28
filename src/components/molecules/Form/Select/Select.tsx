import React from 'react';
import { flatten, xor, find, get } from 'lodash';
import { useFormikContext, getIn } from 'formik';
import { FieldGroup, FieldGroupProps } from '../FieldGroup';
import { Field, List } from '../../../atoms';
import { Menu, MenuProps } from '../../Menu';
import { Box, BoxProps } from '../../../quarks';

type TSelectOption = { id: number | string; name: string };
type TSelectValue = number | string;
interface SelectProps extends FieldGroupProps {
  name?: string;
  menuProps?: Omit<MenuProps, 'layer' | 'trigger'>;
  listProps?: BoxProps;
  options: TSelectOption[];
  dense?: boolean;
  multi?: boolean;
  readOnly?: boolean;
  onChange(value: TSelectValue | TSelectValue[]): void;
  value: TSelectValue | TSelectValue[];
}

const isChecked = (value: TSelectValue | TSelectValue[], current: TSelectOption) =>
  flatten([value]).some(x => x === current.id);
const getCurrent = (value: TSelectValue, options: TSelectOption[]) =>
  get(find(options, ['id', value]), 'name', '');

export const Select = ({
  multi = false,
  readOnly = true,
  menuProps,
  listProps,
  error,
  label,
  options = [],
  dense,
  onChange,
  value,
  ...props
}: SelectProps) => {
  const handleClick = (param: TSelectValue) => () => {
    const v: TSelectValue[] = value ? flatten([value]) : [];
    const p: TSelectValue[] = flatten([param]);
    const payload: TSelectValue[] = xor(v, p);

    return onChange(multi ? payload : payload[payload.length - 1]);
  };

  const renderOption = (option: TSelectOption = {} as TSelectOption) => {
    return (
      <List.Item key={option.id} onClick={handleClick(option.id)} dense={dense}>
        {multi && <Box as={'span' as 'span'}>{isChecked(value, option) ? '[V]' : '[]'}</Box>}
        {option.name}
      </List.Item>
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Menu
        placement={{
          anchor: 'BOTTOM_LEFT',
          snapToAnchor: true,
          triggerOffset: -20,
        }}
        closeOnClick={!multi}
        {...menuProps}
        trigger={({ triggerRef, open, toggle, isOpen }) => (
          <FieldGroup ref={triggerRef} error={error} label={label}>
            <Field
              sx={{
                textOverflow: 'ellipsis',
                userSelect: 'none',
                ...(isOpen && {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }),
                cursor: readOnly ? 'pointer' : 'initial',
              }}
              {...props}
              onFocus={readOnly ? undefined : open}
              onClick={readOnly ? toggle : undefined}
              readOnly={readOnly}
              value={
                Array.isArray(value)
                  ? value.map(x => getCurrent(x, options)).join(', ')
                  : getCurrent(value, options)
              }
            />
          </FieldGroup>
        )}
        layer={
          <List
            sx={{
              maxHeight: '18.8rem',
              overflowY: 'auto',
              borderTop: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            {...listProps}
          >
            {options.map(renderOption)}
          </List>
        }
      />
    </Box>
  );
};

export const FormikSelect = ({ name = '', ...props }: Omit<SelectProps, 'onChange' | 'value'>) => {
  const { values, errors, setFieldValue } = useFormikContext<any>();

  const value = getIn(values, name);
  const error = getIn(errors, name);
  const handleChange = (arg: TSelectValue) => setFieldValue(name, arg);

  return <Select onChange={handleChange} value={value} error={error} {...props} />;
};
