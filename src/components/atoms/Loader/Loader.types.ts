import { BoxProps } from '../../quarks';
export interface LoaderProps extends BoxProps {
  absolute?: boolean;
  variant?: 'DEFAULT' | 'DARK' | 'LIGHT';
}
