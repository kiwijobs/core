import React, { FC, forwardRef } from 'react';
import { LoaderWrapper, LoaderDot } from './Loader.components';
import { LoaderProps } from './Loader.types';

export const Loader: FC<LoaderProps> = forwardRef(
  ({ size = '0.714em', variant, ...props }, ref) => (
    <LoaderWrapper ref={ref} size={size} {...props}>
      <LoaderDot size={size} />
      <LoaderDot size={size} />
      <LoaderDot size={size} />
    </LoaderWrapper>
  )
);
