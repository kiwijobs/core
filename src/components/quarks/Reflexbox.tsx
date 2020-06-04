import React, { FC, forwardRef, ElementType } from 'react';
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
  sx?: Partial<SXProp>;
  css?: string;
  theme?: typeof theme;
  fontScale?: number | number[];
  ref?: any;
}

const cssProp = (props: BoxProps) => props.css;
export const Box = styled('div')<BoxProps>(
  sx,
  cssProp,
  fontScale,
  ellipsis,
  compose(space, layout, typography, color, flexbox, position)
);

export const Flex: FC<BoxProps> = forwardRef(({ sx = {} as SXProp, ...props }, ref) => (
  <Box ref={ref} sx={{ display: 'flex', ...sx }} {...props} />
));
