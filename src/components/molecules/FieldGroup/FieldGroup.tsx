import React, { isValidElement } from 'react';
import { Box, BoxProps } from '../../quarks';
import { Label, Message } from '../../atoms';

interface FieldGroupProps extends BoxProps {
  label?: string | JSX.Element;
  children: JSX.Element;
  error?: string | JSX.Element;
}

const getElement = (Wrapper: React.ReactType, component?: string | JSX.Element, props?: Object) => {
  if (isValidElement(component)) {
    return component;
  }
  return <Wrapper {...props}>{component}&#8203;</Wrapper>;
};

export const FieldGroup = ({ label, error, children }: FieldGroupProps) => (
  <Box>
    {getElement(Label, label)}
    {React.cloneElement(children, { error: !!error })}
    {getElement(Message, error, { color: 'pinkRed' })}
  </Box>
);
