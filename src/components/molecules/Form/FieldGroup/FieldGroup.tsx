import React, { FC, isValidElement } from 'react';
import { Box } from '../../../quarks';
import { Label, Message } from '../../../atoms';

export interface FieldGroupProps {
  label?: string | JSX.Element;
  error?: string | JSX.Element;
}

const getElement = (Wrapper: React.ReactType, component?: string | JSX.Element, props?: Object) => {
  if (isValidElement(component)) {
    return component;
  }
  return <Wrapper {...props}>{component}&#8203;</Wrapper>;
};

export const FieldGroup: FC<FieldGroupProps> = ({ label, error, children }) => (
  <Box>
    {getElement(Label, label)}
    {React.cloneElement(children as JSX.Element, { error: !!error })}
    {getElement(Message, error, { color: 'pinkRed' })}
  </Box>
);
