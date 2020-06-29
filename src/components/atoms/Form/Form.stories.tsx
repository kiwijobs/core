import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container } from '../Grid';
import { Checkbox, Field, Label, Message, Radio } from './';

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
  .add('Radio', () => (
    <Container marginY={3}>
      <Box bg="white" px={4} py={5}>
        <Box my={2}>
          <Radio />
        </Box>
        <Box my={2}>
          <Radio checked />
        </Box>
        <Box my={2}>
          <Radio disabled />
        </Box>
        <Box my={2}>
          <Radio checked disabled />
        </Box>
      </Box>
    </Container>
  ))
  .add('Checkbox', () => (
    <Container marginY={3}>
      <Box bg="white" px={4} py={5}>
        <Box my={2}>
          <Checkbox />
        </Box>
        <Box my={2}>
          <Checkbox checked />
        </Box>
        <Box my={2}>
          <Checkbox disabled />
        </Box>
        <Box my={2}>
          <Checkbox checked disabled />
        </Box>
      </Box>
      <Box bg="white" px={4} py={5}>
        <Box my={2}>
          <Checkbox small />
        </Box>
        <Box my={2}>
          <Checkbox small checked />
        </Box>
        <Box my={2}>
          <Checkbox small disabled />
        </Box>
        <Box my={2}>
          <Checkbox small checked disabled />
        </Box>
      </Box>
    </Container>
  ));
