export {
  default as styled,
  css,
  keyframes,
  createGlobalStyle,
  StyledComponent,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  type ITheme = typeof theme;
  export interface DefaultTheme extends ITheme {}
}
