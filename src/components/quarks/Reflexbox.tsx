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
import css, { CSSObject } from '@styled-system/css';
import { theme } from '../../theme';

export interface BaseBoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps {}
export declare interface BoxProps
  extends BaseBoxProps,
    Omit<JSX.IntrinsicElements['div'] & BaseBoxProps, keyof React.ClassAttributes<any>> {
  color?: TColor;
  bg?: TColor;
  sx?: CSSObject;
  css?: string;
  theme?: typeof theme;
  fontScale?: number | number[];
}
interface __BoxProps extends BoxProps {
  __css?: CSSObject;
}

const sx = (props: BoxProps) => css(props.sx)(props.theme);
const base = (props: __BoxProps) => css(props.__css)(props.theme);
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

export const Box = styled.div<__BoxProps>(
  base,
  sx,
  cssProp,
  fontScale,
  compose(space, layout, typography, color, flexbox)
);

export const Flex = styled(Box)`
  display: flex;
`;
