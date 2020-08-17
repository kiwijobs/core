import React, { FC } from 'react';
import { BoxProps, Flex, Text } from '../../quarks';

const Dot: FC<IDotProps> = ({ active, ...props }) => (
  <Text
    sx={{
      size: '11px',
      borderRadius: '50%',
      bg: active ? 'secondary' : '4',

      '&:not(:last-child)': {
        mr: 1,
      },
      '&:last-child': {
        mr: 3,
      },
    }}
    {...props}
  />
);

export const Dots = ({ score = 0 }) => (
  <Flex>
    {[...new Array(6)].fill({}).map((_, i) => (
      <Dot key={i} active={i + 1 <= score} />
    ))}
  </Flex>
);

interface IDotProps extends BoxProps {
  active: boolean;
}
