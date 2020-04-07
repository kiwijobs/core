import css, { get } from '@styled-system/css';
import { BoxProps } from '../Reflexbox';
import { theme as coreTheme } from '../../../theme';

export const variant = ({ theme, variant, tx = 'variants' }: BoxProps) => {
  console.log('@@', tx, variant);
  return variant
    ? css(get(theme ?? coreTheme, tx + '.' + variant, get(theme ?? coreTheme, variant)))(
        theme ?? coreTheme
      )
    : null;
};
