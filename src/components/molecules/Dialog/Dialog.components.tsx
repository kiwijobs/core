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
      zIndex: 2,

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

export const DialogPaper: FC<IDialogWithFullScreenProps> = ({ sx, fullScreen, ...props }) => (
  <Paper
    sx={{
      p: 0,
      zIndex: 1,
      maxHeight: [fullScreen ? 'none' : '80vh', '80vh'],
      height: [fullScreen ? '100%' : 'initial', 'initial'],
      borderRadius: [fullScreen ? 0 : 1, 1],
      width: '100%',
      maxWidth: ['none', '43rem'],
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
    {...props}
  />
);

export const DialogOuter: FC<IDialogWithFullScreenProps> = ({ sx, fullScreen, ...props }) => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pt: [0, '10vh'],
      px: [fullScreen ? 0 : 2, 2],
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      justifyContent: 'center',
      zIndex: 500,
      ...sx,
    }}
    {...props}
  />
);
interface IDialogWithFullScreenProps extends BoxProps {
  fullScreen: boolean;
}
