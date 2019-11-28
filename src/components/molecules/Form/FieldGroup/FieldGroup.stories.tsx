import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../../quarks';
import { Container } from '../../../atoms/Grid';
import { Field } from '../../../atoms';
import { FieldGroup } from './FieldGroup';

storiesOf('Molecules|Field Group', module).add('default', () => (
  <Container marginY={3}>
    <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
      <FieldGroup label="Imię">
        <Field />
      </FieldGroup>
      <FieldGroup label="Nazwisko" error="To pole jest wymagane">
        <Field />
      </FieldGroup>
      <FieldGroup label="Numer telefonu">
        <Field/>
      </FieldGroup>
    </Box>
  </Container>
));
