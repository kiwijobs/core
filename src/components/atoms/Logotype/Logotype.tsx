import React, { forwardRef, RefForwardingComponent } from 'react';
import { Image, ImageProps } from '../../quarks';

export const Logotype: RefForwardingComponent<HTMLImageElement, ImageProps> = forwardRef(
  ({ sx, ...props }, ref) => (
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
  )
);
