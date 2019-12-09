import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Reflexbox';
import { Space } from '../atoms/Grid';

storiesOf('Quarks|Box', module).add('Typography', () => (
  <Box padding={4}>
    <Space margin={4}>
      <Box fontScale={1}>Font Scale One</Box>
      <Box fontScale={2}>Font Scale Two</Box>
      <Box fontScale={3}>Font Scale Three</Box>
      <Box fontScale={4}>Font Scale Four</Box>
      <Box fontScale={5}>Font Scale Five</Box>
      <Box fontScale={6}>Font Scale Six</Box>
      <Box fontScale={7}>Font Scale Seven</Box>
    </Space>
  </Box>
));
