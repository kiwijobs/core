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
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';
import css, { SystemStyleObject } from '@styled-system/css';
import { theme } from '../../theme';

export interface BaseBoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps {}
export declare interface BoxProps<T = HTMLDivElement>
  extends BaseBoxProps,
    Omit<
      React.DetailedHTMLProps<React.HTMLAttributes<T>, T> & BaseBoxProps,
      keyof React.ClassAttributes<any>
    > {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
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

export const Box = styled.div<BoxProps>(
  sx,
  cssProp,
  fontScale,
  compose(space, layout, typography, color, flexbox)
);

export const Flex = styled(Box)`
  display: flex;
`;
