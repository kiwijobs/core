import React, { FC, ReactNode, memo } from 'react';
import { Flex, BoxProps } from '../../quarks';
import { Button } from '../../atoms';

export const Tuplet: FC<ITupletProps> = memo(({ buttons, active = 0, onChange, sx, ...props }) => (
  <Flex
    sx={{
      width: '100%',
      alignItems: 'stretch',
      minHeight: '44px',
      ...sx,
    }}
    {...props}
  >
    {buttons.map((button, index) => (
      <Button
        key={index}
        width={1 / buttons.length}
        sx={{
          border: 1,
          color: 2,
          px: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '&:first-of-type': {
            borderTopLeftRadius: 1,
            borderBottomLeftRadius: 1,
          },
          '&:last-of-type': {
            borderTopRightRadius: 1,
            borderBottomRightRadius: 1,
          },

          ...(active === index && {
            borderWidth: '2px',
            borderColor: 'secondary',
            color: 1,
            pointerEvents: 'none',
          }),
        }}
        onClick={active === index ? undefined : event => onChange(index, event)}
      >
        {button}
      </Button>
    ))}
  </Flex>
));

interface ITupletProps extends Omit<BoxProps, 'onChange'> {
  buttons: ReactNode[];
  active: number;
  onChange(index: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}
