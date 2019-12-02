import styled from 'styled-components';
import { TColor } from '../../theme/colors';
import {
  system,
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  position,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';
import css, { SystemStyleObject } from '@styled-system/css';
import { theme } from '../../theme';

export interface BaseBoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps,
    PositionProps {}
export declare interface BoxProps<T = HTMLDivElement>
  extends BaseBoxProps,
    Omit<React.HTMLProps<T>, keyof BaseBoxProps | 'ref' | 'label'> {
  as?: any;
  color?: TColor;
  bg?: TColor;
  sx?: SystemStyleObject;
  css?: string;
  theme?: typeof theme;
  fontScale?: number | number[];
}

const sx = (props: BoxProps) => css(props.sx)(props.theme);
const cssProp = (props: BoxProps) => props.css;
const fontScale = (props: BoxProps) =>
  system({
    fontScale: {
      scale: 'fontScales',
      property: 'font',
      transform(value: any, scale: any) {
        const { fontSize, lineHeight } = scale[value];
        const { fonts } = props.theme as typeof theme;
        return `${fontSize} / ${lineHeight} ${fonts[0]}`;
      },
    },
  });

export const Box = styled('div' as 'div')<BoxProps>(
  sx,
  cssProp,
  fontScale,
  compose(space, layout, typography, color, flexbox, position)
);

export const Flex = styled(Box)`
  display: flex;
`;
