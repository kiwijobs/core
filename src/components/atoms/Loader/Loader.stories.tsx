import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paper } from '../Paper';
import { Loader } from './Loader';

storiesOf('Atoms/Loader', module).add('Many colors', () => (
  <Paper p={0}>
    <Loader p={4} />
    <Loader p={4} color="primary" />
    <Loader p={4} color="secondary" />
    <Loader p={4} color="tangerine" />
    <Loader p={4} color="pink" />
    <Loader p={4} color="white" bg="1" />
    <Loader p={4} color="primary.150" bg="1" />
    <Loader p={4} color="secondary.150" bg="1" />
    <Loader p={4} color="tangerine.150" bg="1" />
    <Loader p={4} color="pink.150" bg="1" />
  </Paper>
));
