import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Box, Flex } from '../../quarks';
import { LoaderProps } from './Loader.types';
import { rgba } from '../../../theme/colors';

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

const withAbsolute = ({ absolute }: LoaderProps) =>
  absolute &&
  css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  `;

const variantColor = (alpha = 1) => ({ variant }: LoaderProps) => {
  switch (variant) {
    case 'LIGHT':
      return rgba(alpha).white;
    case 'DARK':
      return rgba(alpha).coolGrey;
    default:
      return rgba(alpha).periwinkleBlue;
  }
};

export const LoaderDot: FC<LoaderProps> = styled(Box)`
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  margin: ${props => `0 calc(${props.size} / 4)`};

  &:nth-of-type(1) {
    animation-delay: -0.32s;
  }
  &:nth-of-type(2) {
    animation-delay: -0.16s;
    background-color: ${variantColor(0.5)};
  }
  &:not(:nth-of-type(2)) {
    background-color: ${variantColor(1)};
  }
`;

export const LoaderWrapper: FC<LoaderProps> = styled(Flex)`
  align-items: center;
  justify-content: center;
  ${withAbsolute};
`;
