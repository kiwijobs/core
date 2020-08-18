import React, { FC, memo } from 'react';
import { Box, BoxProps, Flex } from '../../quarks';
import * as atoms from '../../atoms';
import * as variants from './Personage.components';

export const Personage: FC<IPersonageProps> = memo(
  ({ type = 'Avatar', variant = 'Default', children, src, sx, ...props }) => {
    const Component = atoms[type];

    return (
      <Flex sx={{ alignItems: 'center', ...sx }} {...props}>
        <Component
          src={src}
          sx={{
            ...variants[variant],
          }}
        />
        <Box sx={{ ellipsis: 1 }}>{children}</Box>
      </Flex>
    );
  }
);

interface IPersonageProps extends BoxProps {
  type?: 'Avatar' | 'Logotype';
  variant?: keyof typeof variants;
  src: string;
}
