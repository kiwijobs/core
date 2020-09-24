import styled from 'styled-components';
import * as CSS from 'csstype';
import { system } from 'styled-system';
import { Box, BoxProps } from './Reflexbox';
import { FC } from 'react';

export interface ImageProps extends BoxProps<HTMLImageElement> {
  objectFit?: CSS.Property.ObjectFit;
  objectPosition?: CSS.Property.ObjectPosition;
}

const objectImage = system({
  objectFit: true,
  objectPosition: true,
});

export const Image: FC<ImageProps> = styled(Box).attrs({
  as: 'img',
})`
  ${objectImage}
`;
