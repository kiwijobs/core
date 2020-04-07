import React, { ElementType, forwardRef } from 'react';
import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  typography,
  flexbox,
  position,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';
import { SystemStyleObject, ResponsiveStyleValue } from '@styled-system/css';
import { theme } from '../../theme';
import { color, ISystemColor } from './system/colors';
import { sx } from './system/sx';
import { fontScale } from './system/fontScale';
import { ellipsis } from './system/ellipsis';
import { variant } from './system/variant';

export interface BaseBoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    PositionProps,
    ISystemColor {
  as?: ElementType;
}

export type SXProp =
  | SystemStyleObject
  | Record<
      string,
      | { fontScale: number | number[] }
      | { ellipsis: number | number[] }
      | ISystemColor
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >;

export declare interface BoxProps<T = HTMLDivElement>
  extends BaseBoxProps,
    Omit<
      React.HTMLProps<T>,
      keyof BaseBoxProps | 'ref' | 'label' | 'value' | 'maxLength' | 'color'
    > {
  sx?: SXProp;
  css?: string;
  tx?: string;
  variant?: string | string[];
  theme?: typeof theme;
  fontScale?: number | number[];
  ref?: any;
}

const cssProp = (props: BoxProps) => props.css;
export const Box = styled('div')<BoxProps>(
  variant,
  sx,
  cssProp,
  fontScale,
  ellipsis,
  compose(space, layout, typography, color, flexbox, position)
);

export const Flex = forwardRef<HTMLDivElement, BoxProps>(({ sx, ...props }, ref) => (
  <Box ref={ref} sx={{ display: 'flex', ...sx }} {...props} />
));
