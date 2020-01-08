import React, { useEffect, useRef, useContext, createContext } from 'react';
import { BoxProps, Button } from '../../quarks';

export const SubNavContext = createContext((ref: any) => ref);
export interface SubNavButton extends BoxProps {
  isActive?: boolean;
}
export const SubNavButton = ({ isActive, sx, ...props }: SubNavButton) => {
  const ref = useRef<HTMLButtonElement>(null);
  const setActive = useContext(SubNavContext);

  useEffect(() => {
    if (isActive) {
      setActive(ref);
    }
  }, [ref, isActive]);

  return (
    <Button
      ref={ref}
      sx={{
        color: isActive ? '1' : '2',
        px: 0,
        py: 3,
        border: 'none',
        '&:not(:first-of-type)': {
          ml: '6rem',
        },
        '&:hover': {
          color: '1',
        },
        ...sx,
      }}
      {...props}
    />
  );
};
