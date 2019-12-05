import React from 'react';
import { storiesOf } from '@storybook/react';
import { Formik, Form } from 'formik';
import { Container, Row, Col, Paper } from '../../atoms';
import { FormikInput, FormikSelect } from './';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.number(),
  active: yup.string(),
  recruiters: yup
    .array(yup.number())
    .min(1)
    .required(),
});

storiesOf('Molecules|Form', module).add('Simple Form', () => (
  <Container marginY={3}>
    <Paper>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          age: '',
          recruiters: [],
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Form>
          <Row>
            <Col py={0} width={[1, 0.5]}>
              <FormikInput name="name" label="Imię" />
            </Col>
            <Col py={0} width={[1, 0.5]}>
              <FormikInput name="lastname" label="Nazwisko" />
            </Col>
            <Col py={0} width={[1, 1 / 3]}>
              <FormikSelect
                name="recruiters"
                label="Rekruterzy"
                dense
                multi
                placeholder="Wybierz rekrutera"
                options={[
                  { id: 1, name: 'Kendrick Daniel' },
                  { id: 2, name: 'Clarabelle Boyle' },
                  { id: 3, name: 'Stephan Carroll' },
                  { id: 4, name: 'Hallie Gusikowski' },
                  { id: 5, name: 'Steve Schmeler' },
                  { id: 6, name: 'Russell Pfeffer' },
                  { id: 7, name: 'Nat Tromp DVM' },
                  { id: 8, name: 'Miss Audie Williamson' },
                  { id: 9, name: 'Sydni Leannon II' },
                  { id: 10, name: "Wilburn D'Amore Sr." },
                  { id: 11, name: 'Kendrick Daniel' },
                  { id: 12, name: 'Clarabelle Boyle' },
                  { id: 13, name: 'Stephan Carroll' },
                  { id: 14, name: 'Hallie Gusikowski' },
                  { id: 15, name: 'Steve Schmeler' },
                  { id: 16, name: 'Russell Pfeffer' },
                  { id: 17, name: 'Nat Tromp DVM' },
                  { id: 18, name: 'Miss Audie Williamson' },
                  { id: 19, name: 'Sydni Leannon II' },
                  { id: 20, name: "Wilburn D'Amore Sr." },
                ]}
              />
            </Col>
            <Col py={0} width={[1, 1 / 3]}>
              <FormikSelect
                name="active"
                label="Aktywny"
                options={[
                  { id: 'active', name: 'Aktywny' },
                  { id: 'inactive', name: 'Nieaktywny' },
                ]}
              />
            </Col>
            <Col py={0} width={[1, 1 / 3]}>
              <FormikInput name="age" type="number" label="Wiek" />
            </Col>
          </Row>
          <button style={{ marginTop: '20px' }} type="submit">
            submit
          </button>
        </Form>
      </Formik>
    </Paper>
  </Container>
));
