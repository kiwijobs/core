import React, { FC, memo } from 'react';
import { Box, BoxProps, Flex } from '../../quarks';
import * as atoms from '../../atoms';

export const Personage: FC<IPersonageProps> = memo(
  ({ type = 'Avatar', variant = 'DEFAULT', children, src, sx, ...props }) => {
    const Component = atoms[type];
    const size = variant === 'DEFAULT' ? '48px' : '40px';
    const ml = variant === 'DEFAULT' ? 3 : 2;

    return (
      <Flex sx={{ alignItems: 'center', ...sx }} {...props}>
        <Component src={src} size={size} />
        <Box sx={{ ml, ellipsis: 1 }}>{children}</Box>
      </Flex>
    );
  }
);

interface IPersonageProps extends BoxProps {
  type?: 'Avatar' | 'Logotype';
  variant?: 'DEFAULT' | 'SMALL';
  src: string;
}
