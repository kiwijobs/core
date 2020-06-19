import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container } from '../Grid';
import { CheckboxControl, Field, Label, Message, RadioControl } from './';

storiesOf('Atoms|Form', module)
  .add('Fields', () => (
    <Container marginY={3}>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Label>default</Label>
        <Field />
      </Box>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Label>disabled</Label>
        <Field disabled />
      </Box>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Label>error</Label>
        <Field error />
      </Box>
    </Container>
  ))
  .add('Label', () => (
    <Container marginY={3}>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Label>Imię</Label>
      </Box>
    </Container>
  ))
  .add('Messages', () => (
    <Container marginY={3}>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Message>Nie pamiętasz hasła?</Message>
      </Box>
      <Box bg="white" width={[1, 0.5]} paddingX={4} paddingY={4}>
        <Message color="pinkRed">To pole musi być uzupełnione</Message>
      </Box>
    </Container>
  ))
  .add('RadioControl', () => (
    <Container marginY={3}>
      <Box bg="white" px={4} py={5}>
        <Box my={2}>
          <RadioControl />
        </Box>
        <Box my={2}>
          <RadioControl checked />
        </Box>
        <Box my={2}>
          <RadioControl disabled />
        </Box>
        <Box my={2}>
          <RadioControl checked disabled />
        </Box>
      </Box>
    </Container>
  ))
  .add('CheckboxControl', () => (
    <Container marginY={3}>
      <Box bg="white" px={4} py={5}>
        <Box my={2}>
          <CheckboxControl />
        </Box>
        <Box my={2}>
          <CheckboxControl checked />
        </Box>
        <Box my={2}>
          <CheckboxControl disabled />
        </Box>
        <Box my={2}>
          <CheckboxControl checked disabled />
        </Box>
      </Box>
      <Box bg="white" px={4} py={5}>
        <Box my={2}>
          <CheckboxControl small />
        </Box>
        <Box my={2}>
          <CheckboxControl small checked />
        </Box>
        <Box my={2}>
          <CheckboxControl small disabled />
        </Box>
        <Box my={2}>
          <CheckboxControl small checked disabled />
        </Box>
      </Box>
    </Container>
  ));
