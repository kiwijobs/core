// @TODO: Nessesary draft for "Tie" component. API will probably change, so it's not exported from core.

import React, { FC, memo } from 'react';
import { Box, BoxProps } from '../../quarks';
import { Menu } from '../Menu';

export const Tooltip: FC<ITooltipProps> = memo(({ layer, sx, onMouseLeave, ...props }) => {
  const mouseLeave = (callback: () => void) => (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    callback();
    return setTimeout(() => onMouseLeave?.(event), 250);
  };

  return (
    <Menu
      fixed={false}
      trigger={p => (
        <Box
          sx={{ position: 'relative', ...sx }}
          onMouseEnter={p.open}
          onMouseLeave={mouseLeave(p.close)}
          ref={p.triggerRef}
          {...props}
        />
      )}
      layer={({ sx: layerSX, ...props }) => (
        <Box
          sx={{
            ...layerSX,
            minWidth: 'max-content',
            maxWidth: '300px',
            border: 'none',
            fontScale: 2,
            p: 2,
            bg: '1',
            color: 'white',
          }}
          {...props}
        >
          {layer}
        </Box>
      )}
    />
  );
});

interface ITooltipProps extends BoxProps {
  layer: React.ReactChild;
}
