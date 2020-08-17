import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Personage } from './Personage';

storiesOf('Molecules|Personage', module).add('Various', () => (
  <>
    <Box bg="white" mb={3} p={3}>
      <Personage src="https://placebear.com/200/400">Jan Kowalski</Personage>
    </Box>
    <Box bg="white" mb={3} p={3}>
      <Personage type="Logotype" src="https://placebear.com/400/401">
        Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp.
        z o.o. Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp. z o.o.
        Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp. z o.o. Polbutex Sp.
        z o.o.
      </Personage>
    </Box>
    <Box bg="white" mb={3} p={3}>
      <Personage variant="Small" src="https://placebear.com/200/400">
        Jan Kowalski
      </Personage>
    </Box>
    <Box bg="white" mb={3} p={3}>
      <Personage
        variant="Small"
        type="Logotype"
        src="https://placebear.com/400/401"
        fontWeight="bold"
      >
        Polbutex Sp. z o.o.
      </Personage>
    </Box>
    <Box bg="white" mb={3} p={3}>
      <Personage type="Logotype" src="https://placebear.com/400/401">
        <Box color="2">Spotkanie z:</Box>
        <Box fontWeight="bold">Niedźwiedziolandia</Box>
      </Personage>
    </Box>
  </>
));
