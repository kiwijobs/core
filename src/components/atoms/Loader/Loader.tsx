import React, { FC, forwardRef } from 'react';
import { LoaderWrapper, LoaderDot } from './Loader.components';
import { LoaderProps } from './Loader.types';

export const Loader: FC<LoaderProps> = forwardRef(({ size = '1rem', variant, ...props }, ref) => (
  <LoaderWrapper ref={ref} {...props}>
    <LoaderDot variant={variant} size={size} />
    <LoaderDot variant={variant} size={size} />
    <LoaderDot variant={variant} size={size} />
  </LoaderWrapper>
));
