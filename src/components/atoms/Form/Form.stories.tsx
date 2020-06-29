import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from '../../quarks';
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
        <Flex my={2} alignItems="center" color="2">
          <Checkbox />
          <Label>default</Label>
        </Flex>
        <Flex my={2} alignItems="center" color="2">
          <Checkbox checked />
          <Label>checked</Label>
        </Flex>
        <Flex my={2} alignItems="center" color="2">
          <Checkbox disabled />
          <Label>disabled</Label>
        </Flex>
        <Flex my={2} alignItems="center" color="2">
          <Checkbox checked disabled />
          <Label>checked disabled</Label>
        </Flex>
      </Box>
      <Box bg="white" px={4} py={5}>
        <Flex my={2} alignItems="center" color="2">
          <Checkbox variant="small" />
          <Label>default small</Label>
        </Flex>
        <Flex my={2} alignItems="center" color="2">
          <Checkbox variant="small" checked />
          <Label>checked small</Label>
        </Flex>
        <Flex my={2} alignItems="center" color="2">
          <Checkbox variant="small" disabled />
          <Label>disabled small</Label>
        </Flex>
        <Flex my={2} alignItems="center" color="2">
          <Checkbox variant="small" checked disabled />
          <Label>checked disabled small</Label>
        </Flex>
      </Box>
    </Container>
  ));
