import React, { FC, memo } from 'react';
import { Box, BoxProps } from '../../quarks';
import { Menu, MenuProps } from '../Menu';

export const Tooltip: FC<ITooltipProps> = memo(
  ({ layer, sx, menuProps, onMouseLeave, ...props }) => {
    const mouseLeave = (callback: () => void) => (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      callback();
      return setTimeout(() => onMouseLeave?.(event), 250);
    };

    if (!layer) {
      return <Box sx={sx} {...props} />;
    }

    return (
      <Menu
        fixed={false}
        {...menuProps}
        trigger={p => (
          <Box
            sx={{ position: 'relative', ...sx }}
            onTouchStart={p.open}
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
  }
);

interface ITooltipProps extends BoxProps {
  layer?: React.ReactChild;
  menuProps?: Omit<MenuProps, 'trigger' | 'layer'>;
}
