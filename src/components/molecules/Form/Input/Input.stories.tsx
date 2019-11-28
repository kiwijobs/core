import React from 'react';
import { storiesOf } from '@storybook/react';
import { Formik, Form } from 'formik';
import { Box } from '../../../quarks';
import { Container } from '../../../atoms/Grid';
import { Input, FormikInput } from './Input';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .label('Imię')
    .required(),
});

const handleSubmit = (values: any) => alert(values.name);

storiesOf('Molecules|Input', module)
  .add('default', () => (
    <Container marginY={3}>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Input label="Imię" />
        <Input label="Nazwisko" error="Wymagane pole" />
        <Input label="Numer" type="number" />
      </Box>
    </Container>
  ))
  .add('with Formik', () => (
    <Container marginY={3}>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <FormikInput label="Imię" name="name" />
          </Form>
        </Formik>
      </Box>
    </Container>
  ));
