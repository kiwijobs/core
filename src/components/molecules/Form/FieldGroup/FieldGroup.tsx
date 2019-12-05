import React, { forwardRef, isValidElement } from 'react';
import { Box } from '../../../quarks';
import { Label, Message } from '../../../atoms';

export interface FieldGroupProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  error?: React.ReactNode;
}

const getElement = (
  Wrapper: React.ReactType,
  component?: React.ReactNode,
  props?: Object
) => {
  if (isValidElement(component) || component === null) {
    return component;
  }
  return <Wrapper {...props}>{component}&#8203;</Wrapper>;
};

export const FieldGroup = forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ label, error, children, ...props }, ref) => (
    <Box ref={ref} {...props}>
      {getElement(Label, label)}
      {React.cloneElement(children as JSX.Element, { error: !!error })}
      {getElement(Message, error, { color: 'pinkRed' })}
    </Box>
  )
);
