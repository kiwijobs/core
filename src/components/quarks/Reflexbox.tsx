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
import { SystemStyleObject } from '@styled-system/css';
import { theme } from '../../theme';
import { color, ISystemColor } from './system/colors';
import { sx } from './system/sx';
import { fontScale } from './system/fontScale';

export interface BaseBoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    FlexboxProps,
    PositionProps,
    ISystemColor {}

export type SXProp = SystemStyleObject | ISystemColor | { fontScale: number | number[] };
export declare interface BoxProps<T = HTMLDivElement>
  extends BaseBoxProps,
    Omit<
      React.HTMLProps<T>,
      keyof BaseBoxProps | 'ref' | 'label' | 'value' | 'maxLength' | 'color'
    > {
  as?: any;
  sx?: SXProp;
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
  compose(space, layout, typography, color, flexbox, position)
);

export const Flex = styled(Box)`
  display: flex;
`;
