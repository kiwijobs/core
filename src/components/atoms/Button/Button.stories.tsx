import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { Space } from '../Grid';
import { Paper } from '../Paper';

storiesOf('Atoms/Button', module)
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
      <Button variant="Ghost">Dodaj swoje ogłoszenie</Button>
      <Button variant="Ghost" disabled>
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
  .add('Text', () => (
    <Paper m={3}>
      {[1, 2, 3, 4, 5, 6, 7].map(x => (
        <Space m={3}>
          <Button fontScale={x} variant="Text">
            Edytuj spotkanie
          </Button>
          <Button fontScale={x} variant="Text" disabled>
            Edytuj spotkanie / Disabled
          </Button>
          <Button fontScale={x} variant="Text" loading>
            Edytuj spotkanie
          </Button>
          <br />
        </Space>
      ))}
      <Space m={3}>
        <Button sx={{ color: 'primary', '&:hover': { color: 'primary.150' } }} variant="Text">
          Colored
        </Button>
        <Button sx={{ color: 'secondary', '&:hover': { color: 'secondary.150' } }} variant="Text">
          Colored
        </Button>
        <Button sx={{ color: 'tangerine', '&:hover': { color: 'tangerine.150' } }} variant="Text">
          Colored
        </Button>
        <Button sx={{ color: 'pink', '&:hover': { color: 'pink.150' } }} variant="Text">
          Colored
        </Button>
      </Space>
    </Paper>
  ))
  .add('Link', () => (
    <Paper m={3}>
      {[1, 2, 3, 4, 5, 6, 7].map(x => (
        <Space m={3}>
          <Button fontScale={x} variant="Link">
            Edytuj spotkanie
          </Button>
          <Button fontScale={x} variant="Link" disabled>
            Edytuj spotkanie / Disabled
          </Button>
          <Button fontScale={x} variant="Link" loading>
            Edytuj spotkanie
          </Button>
          <br />
        </Space>
      ))}
      <Space m={3}>
        <Button sx={{ color: 'primary' }} variant="Link">
          Colored
        </Button>
        <Button sx={{ color: 'secondary' }} variant="Link">
          Colored
        </Button>
        <Button sx={{ color: 'tangerine' }} variant="Link">
          Colored
        </Button>
        <Button sx={{ color: 'pink' }} variant="Link">
          Colored
        </Button>
      </Space>
    </Paper>
  ))
  .add('Inlined', () => (
    <Paper m={6}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum ullam quam consectetur
      alias corrupti minima, explicabo,{' '}
      <Button color="secondary" variant="Link">
        Go to website
      </Button>{' '}
      provident perspiciatis nisi voluptatum eius voluptate veniam molestias ipsam fugit dolorem
      totam autem?
      <Paper.Separator />
      <Button variant="Text">Edytuj wpis</Button>
      <Button variant="Text" ml={3}>
        Cofnij wpis
      </Button>
    </Paper>
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
