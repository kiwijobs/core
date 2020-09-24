import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Paper, Box, Logotype, Avatar } from '../..';
import { Tuplet } from './Tuplet';

storiesOf('Molecules/Tuplet', module)
  .add('Default', () => {
    const [active, setActive] = useState(0);

    return (
      <Paper m={4}>
        <Tuplet
          active={active}
          onChange={index => setActive(index)}
          buttons={['Dodaj z listy', 'Zaproś nowych']}
        />
      </Paper>
    );
  })
  .add('Custom Nodes', () => {
    const [active, setActive] = useState(0);

    return (
      <Paper m={4}>
        <Tuplet
          active={active}
          onChange={index => setActive(index)}
          sx={{
            height: '60px',
          }}
          buttons={[
            <Box display="inline-flex" alignItems="center">
              <Logotype src="https://placebear.com/200/200" />
              <Box ml={2}>Companies</Box>
            </Box>,
            <Box display="inline-flex" alignItems="center">
              <Avatar src="https://placebear.com/200/200" />
              <Box ml={2}>Users</Box>
            </Box>,
          ]}
        />
      </Paper>
    );
  });
