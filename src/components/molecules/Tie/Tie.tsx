import React, { FC, useState, memo } from 'react';
import { Icon, Button, Tooltip } from '../../atoms';
import { Box, BoxProps } from '../../quarks';

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const Tie: FC<ITieProps> = memo(
  ({ sx, children = 'link', href, onCopy, tooltip = 'Skopiuj link', ...props }) => {
    const [t, sT] = useState(tooltip);

    const click = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      sT('');
      copyToClipboard(href);

      return onCopy?.(event);
    };

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'secondary',
          position: 'relative',
          ...sx,
        }}
      >
        <Box
          as="a"
          target="_blank"
          sx={{ color: 'inherit', '&:not(:hover)': { textDecoration: 'none' } }}
          href={href}
          {...props}
        >
          {children}
        </Box>
        <Tooltip layer={t} onMouseLeave={() => sT(tooltip)}>
          <Button
            onClick={click}
            sx={{ p: 1, borderRadius: 1, ml: 3, display: 'flex', color: '2', '&:hover': { bg: 4 } }}
          >
            <Icon name="Copy" width="11px" height="14px" />
          </Button>
        </Tooltip>
      </Box>
    );
  }
);

interface ITieProps extends Omit<BoxProps<HTMLAnchorElement>, 'onCopy'> {
  href: string;
  onCopy?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  tooltip?: React.ReactChild;
}
