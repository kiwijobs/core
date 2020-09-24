import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from '../../quarks';
import { Avatar } from './Avatar';

storiesOf('Atoms/Avatar', module).add('Various', () => (
  <>
    <Box display="inline-block" p={3}>
      <Avatar src="https://placebear.com/200/400" />
    </Box>
    <Box display="inline-block" p={3}>
      <Avatar size="60px" src="https://placebear.com/200/401" />
    </Box>
    <Box display="inline-block" p={3}>
      <Avatar size="72px" src="https://placebear.com/200/402" />
    </Box>
    <Box display="inline-block" p={3}>
      <Avatar size="80px" src="https://placebear.com/200/403" />
    </Box>
    <Flex alignItems="center" p={3}>
      <Avatar size="40px" src="https://placebear.com/200/404" />
      <Box fontWeight="bold" ml={2}>
        Pan Niedźwiedź
      </Box>
    </Flex>
  </>
));
