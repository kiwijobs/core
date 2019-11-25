import React, {
  FC,
  useContext,
  createContext,
  useMemo,
  Children,
  cloneElement,
  ComponentProps,
} from 'react';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { Box, Flex, BoxProps } from '../../quarks';

const ContainerContext = createContext(0);
const RowContext = createContext(0);

interface GridProps extends BoxProps {
  gutter?: number;
}

const DEFAULT_GUTTER = 3;

export const Container: FC<GridProps> = ({ gutter = DEFAULT_GUTTER, theme, ...props }) => {
  const value = useMemo(() => theme!.space[gutter], [gutter]);

  return (
    <ContainerContext.Provider value={value}>
      <Box
        width="100%"
        maxWidth={`calc(1200px + ${value}px)`}
        padding={`${value}px`}
        marginX="auto"
        {...props}
      />
    </ContainerContext.Provider>
  );
};

export const Row: FC<GridProps> = ({ gutter, theme, ...props }) => {
  const containerValue = useContext(ContainerContext);

  const value = useMemo(() => {
    if (gutter) return theme!.space[gutter] / 2;
    if (containerValue) return containerValue / 2;
    return theme!.space[DEFAULT_GUTTER] / 2;
  }, [gutter]);

  return (
    <RowContext.Provider value={value}>
      <Flex flexWrap="wrap" margin={`-${value}px`} {...props} />
    </RowContext.Provider>
  );
};

export const Col: FC<BoxProps> = props => {
  const rowValue = useContext(RowContext);
  const value = useMemo(() => rowValue, []);

  return <Box padding={`${value}px`} {...props} />;
};

const classnames = (...args: Array<string | void>) => args.join(' ');
const getClassName = (el: JSX.Element) => (el.props && el.props.className) || '';

const SpaceCloner: FC<ComponentProps<'div'> & SpaceProps> = ({ className, children }) => {
  const styledChildren = Children.toArray(children).map(child =>
    cloneElement(child as JSX.Element, {
      className: classnames(getClassName(child as JSX.Element), className),
    })
  );
  return <>{styledChildren}</>;
};
export const Space: FC<SpaceProps> = styled(SpaceCloner)(space);
