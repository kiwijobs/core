import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../../quarks';
import { Container } from '../../../atoms/Grid';
import { Input } from './Input';

storiesOf('Molecules|Input', module).add('Field Group', () => (
  <Container marginY={3}>
    <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
      <Input label="Imię" />
      <Input label="Nazwisko" error="Wymagane pole" />
      <Input label="Numer" type="number" />
    </Box>
  </Container>
));
