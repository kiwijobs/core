import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { Space } from '../Grid';

storiesOf('Atoms|Button', module)
  .add('Standard', () => (
    <Space my={3} mx={2}>
      <Button variant="Primary">Zapisz</Button>
      <Button variant="Primary" disabled>
        Disabled
      </Button>
      <Button variant="Primary" loading>
        Zapisz
      </Button>
      <Button variant="Primary" disabled loading>
        Disabled
      </Button>
      <br />
      <Button variant="Secondary">Anuluj</Button>
      <Button variant="Secondary" disabled>
        Disabled
      </Button>
      <Button variant="Secondary" loading>
        Anuluj
      </Button>
      <Button variant="Secondary" loading disabled>
        Disabled
      </Button>
      <br />
      <Button
        sx={{
          fontScale: 1,
          bg: 'secondary',
          '&:hover': { bg: 'secondary.90' },
        }}
        variant="Primary"
      >
        Primary
      </Button>
      <Button
        sx={{
          fontScale: 1,
          bg: 'tangerine',
          '&:hover': { bg: 'tangerine.90' },
        }}
        variant="Primary"
      >
        Primary
      </Button>
      <Button
        sx={{
          fontScale: 1,
          bg: 'pink',
          '&:hover': { bg: 'pink.90' },
        }}
        variant="Primary"
      >
        Primary
      </Button>
      <Button
        sx={{
          fontScale: 1,
          bg: 'dark',
          '&:hover': { bg: 'dark.120' },
        }}
        variant="Primary"
      >
        Primary
      </Button>
      <br />
      <Button
        sx={{
          fontScale: 1,
          bg: 'secondary',
          '&:hover': { bg: 'secondary.90' },
        }}
        variant="Primary"
        loading
      >
        Primary
      </Button>
      <Button
        sx={{
          fontScale: 1,
          bg: 'tangerine',
          '&:hover': { bg: 'tangerine.90' },
        }}
        variant="Primary"
        loading
      >
        Primary
      </Button>
      <Button
        sx={{
          fontScale: 1,
          bg: 'pink',
          '&:hover': { bg: 'pink.90' },
        }}
        variant="Primary"
        loading
      >
        Primary
      </Button>
      <Button
        sx={{
          fontScale: 1,
          bg: 'dark',
          '&:hover': { bg: 'dark.120' },
        }}
        variant="Primary"
        loading
      >
        Primary
      </Button>
    </Space>
  ))
  .add('Baseline', () => (
    <Space m={4}>
      <Button>HTML Button Element</Button>
    </Space>
  ))
  .add('Custom', () => (
    <Space my={3} mx={2}>
      <Button
        sx={{
          border: 1,
          borderRadius: 1,
          bg: 'white',
          color: 2,
          px: 3,
          py: 2,
          '&:hover': { bg: 4 },
        }}
      >
        Custom HTML Button
      </Button>
    </Space>
  ));
