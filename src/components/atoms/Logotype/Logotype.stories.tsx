import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Logotype } from './Logotype';

storiesOf('Atoms/Logotype', module).add('Various', () => (
  <>
    <Box display="inline-block" p={3}>
      <Logotype src="https://placebear.com/200/200" />
    </Box>
    <Box display="inline-block" p={3}>
      <Logotype size="60px" src="https://placebear.com/201/200" />
    </Box>
    <Box display="inline-block" p={3}>
      <Logotype size="72px" src="https://placebear.com/202/200" />
    </Box>
    <Box display="inline-block" p={3}>
      <Logotype size="80px" src="https://placebear.com/203/300" />
    </Box>
  </>
));
