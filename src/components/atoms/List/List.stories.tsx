import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container } from '../Grid';
import { List } from './List';

storiesOf('Atoms|List', module).add('Basic List', () => (
  <Container marginY={3}>
    <Box bg="white" width={[1, 0.5]}>
      <List>
        <List.Item>Lista ofert</List.Item>
        <List.Item>Lista spotkań</List.Item>
        <List.Item>Dostęp</List.Item>
        <List.Item>Profil</List.Item>
        <List.Item>Rekruterzy</List.Item>
      </List>
    </Box>
  </Container>
));
