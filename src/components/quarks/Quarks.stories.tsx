import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Reflexbox';
import { Space } from '../atoms/Grid';

const TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est leo, finibus at luctus id, lacinia et mauris. Morbi ultrices malesuada accumsan. Morbi ornare vestibulum consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ullamcorper lobortis gravida.';

storiesOf('Quarks|Box', module)
  .add('Typography', () => (
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
  ))
  .add('Ellipsis', () => (
    <Space margin={4}>
      <Box>
        <Box>No ellipsis</Box>
        <Box sx={{ bg: 'white', width: '300px', maxWidth: '300px', p: 4 }}>
          <Box>{TEXT}</Box>
        </Box>
      </Box>
      <Box>
        <Box>ellipsis / ellipsis={1}</Box>
        <Box sx={{ bg: 'white', width: '300px', maxWidth: '300px', p: 4 }}>
          <Box sx={{ ellipsis: 1 }}>{TEXT}</Box>
        </Box>
      </Box>
      <Box>
        <Box>ellipsis={2}</Box>
        <Box sx={{ bg: 'white', width: '300px', maxWidth: '300px', p: 4 }}>
          <Box sx={{ ellipsis: 2 }}>{TEXT}</Box>
        </Box>
      </Box>
      <Box>
        <Box>ellipsis={3}</Box>
        <Box sx={{ bg: 'white', width: '300px', maxWidth: '300px', p: 4 }}>
          <Box sx={{ ellipsis: 3 }}>{TEXT}</Box>
        </Box>
      </Box>
      <Box>
        <Box>ellipsis array</Box>
        <Box sx={{ bg: 'white', width: '300px', maxWidth: '300px', p: 4 }}>
          <Box sx={{ ellipsis: [3, null, 5] }}>{TEXT}</Box>
        </Box>
      </Box>
    </Space>
  ));
