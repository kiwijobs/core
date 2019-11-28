import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container } from '../Grid';
import { List } from '../List';
import { Menu } from './Menu';

storiesOf('Menu', module)
  .add('Basic Menu', () => (
    <Container marginY={3}>
      <Menu
        placement={{
          autoAdjust: true,
          preferX: 'RIGHT',
        }}
        layer={
          <List>
            <List.Item>Lista ofert</List.Item>
            <List.Item>Lista spotkań</List.Item>
            <List.Item>Dostęp</List.Item>
            <List.Item>Profil</List.Item>
            <List.Item>Rekruterzy</List.Item>
          </List>
        }
        trigger={
          <Box display="inline-block" px="1" py="2" bg="coolGreyTwo">
            |
          </Box>
        }
      />
    </Container>
  ))
  .add('With Adjusting Placement', () => (
    <Container marginY={3}>
      <Box
        bg="white"
        width={[1, 0.5]}
        padding={2}
        textAlign="center"
        height="200vh"
        overflowY="scroll"
        position="relative"
      >
        <Menu
          placement={{
            anchor: 'BOTTOM_CENTER',
            possibleAnchors: ['TOP_CENTER', 'BOTTOM_CENTER'],
            autoAdjust: true,
          }}
          trigger={
            <Box display="inline-block" px="3" py="2" mt="90vh">
              Menu
            </Box>
          }
          layer={
            <List>
              <List.Item dense>Lista ofert</List.Item>
              <List.Item dense>Lista spotkań</List.Item>
              <List.Item dense>Dostęp</List.Item>
              <List.Item dense>Profil</List.Item>
              <List.Item dense>Rekruterzy</List.Item>
            </List>
          }
        />
      </Box>
    </Container>
  ));
