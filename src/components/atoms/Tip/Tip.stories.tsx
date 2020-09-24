import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Grid';
import { Tip } from './Tip';

storiesOf('Atoms/Tip', module).add('Basic Tip', () => (
  <Container marginY={3}>
    <Tip>Hello, this is tip!</Tip>
  </Container>
));
