import React, { FC } from 'react';
import { LoaderWrapper, LoaderDot } from './Loader.components';
import { LoaderProps } from './Loader.types';

export const Loader: FC<LoaderProps> = ({ size = '1rem', variant, ...props }) => (
  <LoaderWrapper {...props}>
    <LoaderDot variant={variant} size={size} />
    <LoaderDot variant={variant} size={size} />
    <LoaderDot variant={variant} size={size} />
  </LoaderWrapper>
);
