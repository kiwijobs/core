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
      console.log('##', ref);
      setActive(ref);
    }
  }, [ref, isActive]);

  return (
    <Button
      ref={ref}
      sx={{
        color: isActive ? 'dark' : 'steel',
        px: 0,
        py: 3,
        border: 'none',
        '&:not(:first-of-type)': {
          ml: '6rem',
        },
        '&:hover': {
          color: 'dark',
        },
        ...sx,
      }}
      {...props}
    />
  );
};
