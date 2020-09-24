import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from '../components';
import { rgb } from './colors';

const ColorBox = (props: any) => (
  <Box
    sx={{
      m: 1,
      border: 1,
      borderRadius: 1,
      size: '10rem',
      bg: 'white',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        height: '7rem',
        width: '100%',
      }}
      {...props}
    />
    <Box
      sx={{
        p: 1,
        borderTop: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3rem',
      }}
      fontScale={2}
    >
      {props.bg}
    </Box>
  </Box>
);

const variants = [10, 20, 40, 60, 80, null, 120, 140, 160, 180, 190];

storiesOf('Theme/Colors', module).add('Colors', () => (
  <>
    <Box
      sx={{
        gridColumn: '1 / span 9',
        mx: 3,
        mt: 4,
        mb: 2,
      }}
      fontScale={6}
    >
      Base Colors
    </Box>
    <Flex p={2} flexWrap="wrap">
      <ColorBox bg={1} />
      <ColorBox bg={2} />
      <ColorBox bg={3} />
      <ColorBox bg={4} />
      <ColorBox bg={5} />
    </Flex>
    <Box
      sx={{
        display: 'grid',
        maxWidth: '650px',
        gridTemplateColumns: 'repeat(11, 1fr)',
      }}
      p={2}
    >
      <Box
        sx={{
          gridColumn: '1 / span 11',
          mx: 1,
          mt: 4,
          mb: 2,
        }}
        fontScale={6}
      >
        Primary colors
      </Box>
      {Object.keys(rgb).map(key =>
        key
          ? variants.map(variant => (
              <ColorBox key={key + variant} bg={variant ? `${key}.${variant}` : key} />
            ))
          : null
      )}
    </Box>
  </>
));
