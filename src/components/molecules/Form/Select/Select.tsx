import React from 'react';
import { flatten, xor, find, get } from 'lodash';
import { useFormikContext, getIn } from 'formik';
import { FieldGroup, FieldGroupProps } from '../FieldGroup';
import { Field, List, Menu, MenuProps, Paper, Backdrop } from '../../../atoms';
import { Flex, Box, BoxProps } from '../../../quarks';
import { Icon } from '../../../atoms/Icon';

type TSelectOption = { id: number | string; name: string; [key: string]: any };
type TSelectValue = number | string;
interface SelectProps extends Omit<FieldGroupProps, 'value'> {
  name?: string;
  menuProps?: Omit<MenuProps, 'layer' | 'trigger'>;
  listProps?: BoxProps;
  options: TSelectOption[];
  dense?: boolean;
  multi?: boolean;
  withBackdrop?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange(value: TSelectValue | TSelectValue[]): void;
  value: TSelectValue | TSelectValue[];
  renderOption?: (option: TSelectOption) => JSX.Element;
}

const isChecked = (value: TSelectValue | TSelectValue[], current: TSelectOption) =>
  flatten([value]).some(x => x === current.id);
const getCurrent = (value: TSelectValue, options: TSelectOption[]) =>
  get(find(options, ['id', value]), 'name', '');

export const Select = ({
  multi = false,
  menuProps,
  error,
  label,
  options = [],
  dense,
  onChange,
  withBackdrop,
  value,
  disabled,
  renderOption: renderOptionProp,
  ...props
}: SelectProps) => {
  const handleClick = (param: TSelectValue) => () => {
    const v: TSelectValue[] = value ? flatten([value]) : [];
    const p: TSelectValue[] = flatten([param]);
    const payload: TSelectValue[] = xor(v, p);

    return onChange(multi ? payload : param);
  };

  const renderOption = (option: TSelectOption = {} as TSelectOption) => {
    const checked = isChecked(value, option);

    return (
      <List.Item
        key={option.id}
        onClick={handleClick(option.id)}
        dense={dense}
        sx={{
          alignItems: 'center',
          ...(multi && {
            ':hover': {
              'div:first-child': {
                borderColor: checked ? undefined : 'dark',
              },
            },
          }),
        }}
      >
        {multi && (
          <Flex
            mr={2}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
              border: '1px solid',
              borderColor: checked ? 'lightishBlue' : 'steel',
              backgroundColor: checked ? 'lightishBlue' : 'white',
              size: dense ? '1.5rem' : '2rem',
            }}
          >
            <Icon name="Check" color="white" size={dense ? '0.9rem' : '1.3rem'} />
          </Flex>
        )}
        {renderOptionProp ? renderOptionProp(option) : option.name}
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
          triggerOffset: 0,
        }}
        closeOnClick={!multi}
        {...menuProps}
        trigger={({ triggerRef, toggle, isOpen }) => (
          <FieldGroup error={error} label={label}>
            <Box
              ref={triggerRef}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                ...(isOpen && {
                  zIndex: 1,
                }),
              }}
              onClick={toggle}
            >
              <Field
                sx={{
                  textOverflow: 'ellipsis',
                  userSelect: 'none',
                  paddingRight: '36px',
                  cursor: 'pointer',
                  ...(isOpen && {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }),
                  ...(disabled && {
                    color: 'dark',
                  }),
                  '&:focus': {},
                  '&:hover': {
                    borderColor: isOpen ? undefined : [null, 'steel'],
                  },
                }}
                {...props}
                disabled={disabled}
                readOnly
                value={
                  Array.isArray(value)
                    ? value.map(x => getCurrent(x, options)).join(', ')
                    : getCurrent(value, options)
                }
              />
              <Icon
                name="Chevron"
                color="steel"
                width="1.2rem"
                height="1.2rem"
                direction={isOpen ? 'UP' : 'DOWN'}
                sx={{
                  position: 'absolute',
                  right: 3,
                  top: 0,
                  bottom: 0,
                  margin: 'auto',
                }}
              />
            </Box>
          </FieldGroup>
        )}
        layer={({ sx, close, isOpen, ...props }) => (
          <>
            <Paper
              sx={{
                ...sx,
                maxHeight: '18.8rem',
                overflowY: 'auto',
                padding: 0,
                borderTop: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
              onClick={multi ? undefined : close}
              {...props}
            >
              <List>{options.map(renderOption)}</List>
            </Paper>
            {isOpen && withBackdrop && <Backdrop />}
          </>
        )}
      />
    </Box>
  );
};

export const FormikSelect = ({ name = '', ...props }: Omit<SelectProps, 'onChange' | 'value'>) => {
  const { values, errors, touched, setFieldValue } = useFormikContext<any>();

  const value = getIn(values, name);
  const error = getIn(touched, name) && getIn(errors, name);

  const handleChange = (arg: TSelectValue) => setFieldValue(name, arg);

  return <Select onChange={handleChange} value={value} error={error} {...props} />;
};
