import React, { forwardRef } from 'react';
import { Image, ImageProps } from '../../quarks';

export const Logotype = forwardRef<HTMLImageElement, ImageProps>(({ sx, ...props }, ref) => (
  <Image
    ref={ref}
    sx={{
      borderRadius: 1,
      border: 1,
      p: 1,
      size: '48px',
      bg: 'white',
      objectFit: 'contain',
      ...sx,
    }}
    {...props}
  />
));
