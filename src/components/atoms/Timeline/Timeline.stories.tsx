import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Grid';
import { Text } from '../../quarks';
import { Timeline } from './Timeline';

storiesOf('Atoms|Timeline', module).add('Timeline', () => (
  <Container marginY={3} sx={{ minHeight: '50vh', bg: 'white' }}>
    <Timeline>
      <Timeline.Point>
        <Text as="p">punkt</Text>
      </Timeline.Point>
      <Timeline.Point>drugi punkt</Timeline.Point>
    </Timeline>
  </Container>
));
