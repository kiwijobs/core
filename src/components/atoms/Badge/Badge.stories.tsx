import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Icon } from '../Icon';
import { Badge } from './Badge';

storiesOf('Atoms/Badge', module)
  .add('Default', () => (
    <>
      <Box display="inline-block" p={3}>
        <Box position="relative" display="inline-block">
          <Icon name="Bell" />
          <Badge>3</Badge>
        </Box>
      </Box>
      <Box display="inline-block" p={3}>
        <Box position="relative" display="inline-block">
          <Icon name="Bell" />
          <Badge
            sx={{ size: '12px', border: '3px solid', borderColor: 'white', transform: 'none' }}
          />
        </Box>
      </Box>
      <Box display="inline-block" p={3}>
        <Box position="relative" display="inline-block">
          <Icon sx={{ borderRadius: 1, bg: 1, color: 'white', p: 1 }} name="Check" />
          <Badge>2</Badge>
        </Box>
      </Box>
      <Box display="inline-block" p={3}>
        <Box position="relative" display="inline-block">
          <button>Basic HTML Element</button>
          <Badge>12</Badge>
        </Box>
      </Box>
    </>
  ))
  .add('Static badge', () => (
    <>
      <Box display="flex" alignItems="center" p={3}>
        <Icon sx={{ bg: 1, color: 'white', borderRadius: '50%', mr: 1 }} name="Info" />
        <Badge sx={{ transform: 'none', px: 2, position: 'static', width: 'auto' }}>
          Information
        </Badge>
      </Box>
    </>
  ));
