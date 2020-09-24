import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container } from '../Grid';
import { Heading, Element } from './Page.components';

storiesOf('Atoms/Cv', module).add('Heading', () => (
  <Container m={3} bg="white" minHeight="50vh">
    <Box bg="white" width={[1, 0.5]}>
      <Heading>Informacje podstawowe</Heading>
    </Box>
  </Container>
));

storiesOf('Atoms/Cv', module).add('Description', () => (
  <Container m={3} bg="white" minHeight="50vh">
    <Box bg="white" width={[1, 0.5]}>
      <Element label="Status studenta: ">Tak</Element>
    </Box>
  </Container>
));
