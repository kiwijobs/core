import React, { forwardRef, FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from '../../quarks';
import { LoaderProps } from './Loader.types';

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

export const LoaderDot: FC<LoaderProps> = styled(({ size, ...props }) => (
  <Box
    sx={{
      borderRadius: '50%',
      border: `calc(${size} / 2) solid`,
      size,
      display: 'inline-block',
      mx: `calc(${size} / 4)`,
    }}
    {...props}
  />
))`
  animation: ${bounce} 1.4s infinite ease-in-out both;

  &:nth-of-type(1) {
    animation-delay: -0.32s;
  }
  &:nth-of-type(2) {
    animation-delay: -0.16s;
    opacity: 0.5;
  }
`;

export const LoaderWrapper = forwardRef<HTMLDivElement, LoaderProps>(
  ({ sx, size, ...props }, ref) => (
    <Box
      ref={ref}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        top: `calc(50% - ${size} / 2)`,
        left: `calc(50% - ${size} / 2)`,
        ...sx,
      }}
      {...props}
    />
  )
);
