import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Tie } from './Tie';

storiesOf('Molecules|Tie', module).add('Various', () => (
  <>
    <Box bg="white" mb={3} p={3}>
      <Tie href="https://google.pl" tooltip="skopiuj link do wideorozmowy" />
    </Box>
  </>
));
