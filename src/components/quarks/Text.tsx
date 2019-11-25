import React, { FC } from 'react';
import { Box, BoxProps } from './Reflexbox';

export const Text: FC<BoxProps> = props => <Box as="span" {...props} />;
