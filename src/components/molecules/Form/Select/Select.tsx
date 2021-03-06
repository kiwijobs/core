import React, { useState } from 'react';
import { flatten, xor, find, get } from 'lodash';
import { useField } from 'formik';
import { FieldGroup, FieldGroupProps } from '../FieldGroup';
import { Field, List, Menu, MenuProps, Paper, Backdrop } from '../../../atoms';
import { Flex, Box, BoxProps } from '../../../quarks';
import { Icon } from '../../../atoms/Icon';
import { TOption, TValue } from '../Form.types';

interface SelectProps
  extends Omit<FieldGroupProps, 'value'>,
    Omit<BoxProps<HTMLInputElement>, 'value' | 'onChange'> {
  name?: string;
  menuProps?: Omit<MenuProps, 'layer' | 'trigger'>;
  options: TOption[];
  multi?: boolean;
  withBackdrop?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange(value: TValue | TValue[]): void;
  value: TValue | TValue[];
  'data-testid'?: string;
  renderOption?: (option: TOption, checkbox?: JSX.Element) => JSX.Element;
}

const isChecked = (value: TValue | TValue[], current: TOption) =>
  flatten([value]).some(x => x === current.id);

const getCurrent = (value: TValue, options: TOption[]) =>
  get(find(options, ['id', value]), 'name', '');

const getValue = (value: TValue | TValue[], options: TOption[]) =>
  Array.isArray(value)
    ? value.map(x => getCurrent(x, options)).join(', ')
    : getCurrent(value, options);

const splitToBold = (str: string, phrase: string) => {
  if (!str) return null;
  if (!phrase) return str;
  // eslint-disable-next-line no-unused-vars
  const [, gr1, gr2, gr3] = str.match(new RegExp(`(.*)(${phrase})(.*)`, 'i')) || [];

  return (
    <>
      {gr1}
      <b>{gr2}</b>
      {gr3}
    </>
  );
};

const useSelectSearch = (readOnly: boolean) => {
  if (readOnly) {
    return {};
  }

  const [internalValue, setInternalValue] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const onFocus = () => {
    setSearchFocused(true);
    setInternalValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInternalValue(e.target.value);

  return {
    internalValue,
    onFocus,
    onChange,
    searchFocused,
    setSearchFocused,
  };
};

export const Select = ({
  multi = false,
  menuProps,
  error,
  label,
  options = [],
  onChange,
  withBackdrop,
  value,
  readOnly = true,
  disabled,
  'data-testid': dataTestId,
  renderOption: renderOptionProp,
  placeholder = 'Wybierz',
  ...props
}: SelectProps) => {
  const { internalValue, searchFocused, setSearchFocused, ...searchProps } = useSelectSearch(
    readOnly
  );

  const handleSearchBlur = () => {
    if (setSearchFocused) {
      setSearchFocused(false);
    }
  };

  const handleClick = (param: TValue) => () => {
    const v: TValue[] = value ? flatten([value]) : [];
    const p: TValue[] = flatten([param]);
    const payload: TValue[] = xor(v, p);

    handleSearchBlur();

    return onChange(multi ? payload : param);
  };

  const renderOption = (option: TOption = {} as TOption) => {
    const checked = isChecked(value, option);

    const checkbox = (
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 1,
          border: '1px solid',
          borderColor: checked ? 'secondary' : '2',
          backgroundColor: checked ? 'secondary' : 'white',
          size: '1.6rem',
          flexShrink: 0,
          mr: 2,
        }}
      >
        <Icon name="Check" color="white" size="1rem" />
      </Flex>
    );

    return (
      <List.Item
        key={option.id}
        onClick={handleClick(option.id)}
        sx={{
          ...(multi && {
            ':hover': {
              'div:first-child': {
                borderColor: checked ? undefined : '1',
              },
            },
          }),
        }}
      >
        {renderOptionProp ? (
          renderOptionProp(option, checkbox)
        ) : (
          <>
            {multi && (
              <Flex
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: checked ? 'secondary' : '2',
                  backgroundColor: checked ? 'secondary' : 'white',
                  size: '1.6rem',
                  flexShrink: 0,
                  mr: 2,
                }}
              >
                <Icon name="Check" color="white" size="1rem" />
              </Flex>
            )}
            <Box>{splitToBold(option.name, internalValue || '')}</Box>
          </>
        )}
      </List.Item>
    );
  };

  const getOptions = () => {
    if (readOnly) {
      return options.map(renderOption);
    }

    return options
      .filter(el => new RegExp(internalValue || '', 'i').test(el.name))
      .map(renderOption);
  };

  const parsedOptions = getOptions();

  const isListNotEmpty = parsedOptions.length > 0;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Menu
        onOutsideClick={handleSearchBlur}
        placement={{
          anchor: 'BOTTOM_LEFT',
          snapToAnchor: true,
          triggerOffset: 0,
          autoAdjust: false,
        }}
        closeOnDisappear={readOnly ? 'full' : undefined}
        {...menuProps}
        trigger={({ isOpen, open, toggle, triggerRef }) => (
          <FieldGroup error={error} label={label}>
            <Box
              ref={triggerRef}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                ...(isOpen && {
                  zIndex: 1,
                }),
                ...(disabled && {
                  pointerEvents: 'none',
                }),
              }}
              onClick={readOnly ? toggle : open}
            >
              <Field
                sx={{
                  textOverflow: 'ellipsis',
                  paddingRight: '36px',
                  cursor: 'pointer',
                  ...(isOpen && {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }),
                  ...(disabled && {
                    color: '1',
                  }),
                  ...(readOnly && {
                    '&:focus': {},
                  }),
                  '&:hover': {
                    borderColor: isOpen ? undefined : [null, '2'],
                  },
                  ...(error && {
                    '&:hover': {
                      borderColor: 'pink',
                    },
                  }),
                  '&::selection': {
                    color: 'none',
                    background: 'none',
                  },
                }}
                data-testid={dataTestId ? `${dataTestId}-trigger` : undefined}
                {...props}
                disabled={disabled}
                readOnly={readOnly}
                error={!!error}
                value={searchFocused ? internalValue : getValue(value, options)}
                placeholder={placeholder}
                {...searchProps}
              />
              <Icon
                name="Chevron"
                color="2"
                width="1.2rem"
                height="1.2rem"
                direction={isOpen ? 'UP' : 'DOWN'}
                sx={{
                  position: 'absolute',
                  right: 3,
                  top: 0,
                  bottom: 0,
                  margin: 'auto',
                  pointerEvents: 'none',
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
                minHeight: '9rem',
                maxHeight: '18.8rem',
                overflowY: 'auto',
                display: 'flex',
                padding: 0,
                borderTop: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
              onClick={multi ? undefined : close}
              data-testid={dataTestId ? `${dataTestId}-layer` : undefined}
              {...props}
            >
              {isListNotEmpty ? (
                <List>{parsedOptions}</List>
              ) : (
                <Flex
                  sx={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Brak wyników
                </Flex>
              )}
            </Paper>
            {isOpen && withBackdrop && <Backdrop />}
          </>
        )}
      />
    </Box>
  );
};

export const FormikSelect = ({ name = '', ...props }: Omit<SelectProps, 'onChange' | 'value'>) => {
  const [field, meta, { setValue }] = useField(name);
  const error = meta.touched && meta.error;

  return <Select {...field} {...meta} onChange={setValue} error={error} name={name} {...props} />;
};
