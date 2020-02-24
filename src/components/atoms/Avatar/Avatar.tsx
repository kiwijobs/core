import React, { forwardRef } from 'react';
import { Image, ImageProps } from '../../quarks';

export const Avatar = forwardRef<HTMLImageElement, ImageProps>(({ sx, ...props }, ref) => (
  <Image
    ref={ref}
    sx={{
      size: '48px',
      flex: '0 0 auto',
      bg: '4',
      borderRadius: '50%',
      objectFit: 'cover',
      ...sx,
    }}
    {...props}
  />
));
