import React, { FC, ReactChild } from 'react';
import { Text, BoxProps } from '../../quarks';

export const Heading: FC<BoxProps> = ({ sx, ...props }) => (
  <Text
    as="p"
    sx={{ px: 2, mb: 3, mt: 4, borderRadius: 1, fontWeight: 'bold', bg: 5, ...sx }}
    {...props}
  />
);

export const Element: FC<IDescriptionProps> = ({ children, label, ...props }) => (
  <Text as="p" mb={2} mt={0} {...props}>
    {label}
    <Text color="2">{children}</Text>
  </Text>
);

interface IDescriptionProps extends BoxProps {
  label: ReactChild;
}
