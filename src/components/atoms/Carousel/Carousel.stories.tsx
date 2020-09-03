import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container } from '../Grid';
import { Carousel } from './';

storiesOf('Atoms|Carousel', module)
  .add('Fields', () => (
    <Container marginY={3}>
      <Carousel>
        <Box display="inline-block" marginX="2" bg="1" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="2" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="3" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="1" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="2" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="2" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="3" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="3" width="300px" height="300px" />
      </Carousel>
    </Container>
  ))
  .add('With scroll bar', () => (
    <Container marginY={3}>
      <Carousel parentOverflow="visible">
        <Box display="inline-block" marginX="2" bg="1" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="2" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="3" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="1" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="2" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="2" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="3" width="300px" height="300px" />
        <Box display="inline-block" marginX="2" bg="3" width="300px" height="300px" />
      </Carousel>
    </Container>
  ));
