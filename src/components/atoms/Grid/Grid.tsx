import React, {
  FC,
  useContext,
  createContext,
  useMemo,
  Children,
  cloneElement,
  ComponentProps,
  forwardRef,
} from 'react';
import { space, SpaceProps } from 'styled-system';
import styled, { ThemeContext } from 'styled-components';
import { Box, Flex, BoxProps } from '../../quarks';

const ContainerContext = createContext(0);
const RowContext = createContext(0);

interface GridProps extends BoxProps {
  gutter?: number;
}

const DEFAULT_GUTTER = 3;

export const Container: FC<GridProps> = forwardRef(
  ({ sx, gutter = DEFAULT_GUTTER, ...props }, ref) => {
    const theme = useContext(ThemeContext);
    const value = useMemo(() => theme.space[gutter], [gutter]);

    return (
      <ContainerContext.Provider value={value}>
        <Box
          ref={ref}
          sx={{
            width: '100%',
            maxWidth: `calc(1200px + ${value}px)`,
            py: `${value}px`,
            px: [2, null, 4],
            mx: 'auto',
            ...sx,
          }}
          {...props}
        />
      </ContainerContext.Provider>
    );
  }
);

export const Row: FC<GridProps> = forwardRef(({ gutter, sx, ...props }, ref) => {
  const theme = useContext(ThemeContext);
  const containerValue = useContext(ContainerContext);

  const value = useMemo(() => {
    if (gutter) return theme.space[gutter] / 2;
    if (containerValue) return containerValue / 2;
    return theme.space[DEFAULT_GUTTER] / 2;
  }, [gutter]);

  return (
    <RowContext.Provider value={value}>
      <Flex ref={ref} sx={{ flexWrap: 'wrap', m: `-${value}px`, ...sx }} {...props} />
    </RowContext.Provider>
  );
});

export const Col: FC<BoxProps> = forwardRef(({ sx, ...props }, ref) => {
  const rowValue = useContext(RowContext);
  const value = useMemo(() => rowValue, []);

  return <Box ref={ref} sx={{ width: '100%', p: `${value}px`, ...sx }} {...props} />;
});

const classnames = (...args: Array<string | void>) => args.join(' ');
const getClassName = (el: JSX.Element) => (el.props && el.props.className) || '';

const SpaceCloner: FC<ComponentProps<'div'> & SpaceProps> = ({ className, children }) => {
  const styledChildren = Children.toArray(children).map(child =>
    cloneElement(child as JSX.Element, {
      className: classnames(className, getClassName(child as JSX.Element)),
    })
  );
  return <>{styledChildren}</>;
};
export const Space: FC<SpaceProps> = styled(SpaceCloner)(space);
