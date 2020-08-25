import React, { FC } from 'react';
import { format, parseISO } from 'date-fns';
import { Text, BoxProps } from '../../../quarks';

export const DateDescription: FC<ICvCreate> = ({ createdAt, ...props }) => (
  <Text as="p" mb={3} color="2" {...props}>
    Aplikacja wysłana: {format(parseISO(createdAt), 'dd.MM.yyyy')}, godz.{' '}
    {format(parseISO(createdAt), 'H.mm')}
  </Text>
);

interface ICvCreate extends BoxProps {
  createdAt: string;
}
