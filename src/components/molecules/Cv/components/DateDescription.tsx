import React, { FC } from 'react';
import { format } from 'date-fns';
import { Text, BoxProps } from '../../../quarks';

export const DateDescription: FC<ICvCreate> = ({ createdAt, ...props }) => (
  <Text as="p" mb={3} color="2" {...props}>
    Aplikacja wysłana: {format(new Date(createdAt), 'dd.MM.yyyy')}, godz.{' '}
    {format(new Date(createdAt), 'H.mm')}
  </Text>
);

interface ICvCreate extends BoxProps {
  createdAt: string;
}
