import React, { FC } from 'react';
import { Box, BoxProps } from '../../quarks';
import { Button, Icon, Paper } from '../../atoms';

export const DialogHeader: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{
      p: 4,
      pr: '6.4rem',
      position: 'sticky',
      top: 0,
      zIndex: 1,
      borderBottom: 1,
      ...sx,
    }}
    {...props}
  />
);

export const DialogClose: FC<BoxProps<HTMLButtonElement>> = ({ sx, ...props }) => (
  <Button
    sx={{
      size: '2.4rem',
      borderRadius: 1,
      p: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      m: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': { bg: 5 },
      ...sx,
    }}
    {...props}
  >
    <Icon size="1.2rem" name="Close" />
  </Button>
);

export const DialogBody: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{
      px: 4,
      pt: 3,
      pb: 0,
      flex: '0 1 auto',
      overflowY: 'auto',
      '-webkit-overflow-scrolling': 'touch',

      '&:after': {
        content: '""',
        display: 'block',
        pb: 4,
      },
      ...sx,
    }}
    {...props}
  />
);
export const DialogTitle: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{
      color: 1,
      fontWeight: 'bold',
      ...sx,
    }}
    {...props}
  />
);
export const DialogSubtitle: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{
      color: 2,
      fontScale: 2,
      my: 1,
      ...sx,
    }}
    {...props}
  />
);

export const DialogFooter: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{
      mb: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx,
    }}
    {...props}
  />
);
export const DialogSubmit: FC<BoxProps<HTMLButtonElement>> = props => (
  <Button variant="Primary" {...props} />
);
export const DialogCancel: FC<BoxProps<HTMLButtonElement>> = ({ sx, ...props }) => (
  <Button sx={{ mx: 'auto', ...sx }} variant="Secondary" {...props} />
);

export const DialogPaper: FC<IDialogPaperProps> = ({ sx, fullScreen, ...props }) => (
  <Paper
    sx={{
      p: 0,
      zIndex: 1,
      top: [fullScreen ? 0 : '10vh', '10vh'],
      maxHeight: [fullScreen ? 'none' : '80vh', '80vh'],
      height: [fullScreen ? '100%' : 'initial', 'initial'],
      left: [fullScreen ? 0 : 8, 8],
      right: [fullScreen ? 0 : 8, 8],
      borderRadius: [fullScreen ? 0 : 1, 1],
      m: 'auto',
      maxWidth: '43rem',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
    {...props}
  />
);

interface IDialogPaperProps extends BoxProps {
  fullScreen: boolean;
}
