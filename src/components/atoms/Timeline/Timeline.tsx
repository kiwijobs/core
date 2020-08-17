import React, { FC } from 'react';
import { Box, BoxProps } from '../../quarks';

export const Timeline: TTimeline = ({ sx, ...props }) => (
  <Box
    as="ul"
    sx={{
      height: '100%',
      p: 0,
      listStyle: 'none',
      ...sx,
    }}
    {...props}
  />
);

const TimelinePoint: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    as="li"
    sx={{
      position: 'relative',
      height: '100%',
      fontScale: 2,
      color: 2,

      '&:after': {
        content: '""',
        position: 'absolute',
        size: '7px',
        top: '4px',
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: '50%',
        bg: 3,
      },
      '&:not(:last-child):before': {
        content: '""',
        position: 'absolute',
        borderWidth: '1px',
        borderLeftColor: 3,
        borderLeftStyle: 'dashed',
        width: '1px',
        height: 'calc(100% + 8px)',
        left: '3px',
        top: '8px',
      },

      pl: 3,

      ...sx,
    }}
    {...props}
  />
);

Timeline.Point = TimelinePoint;

type TTimeline = FC<BoxProps> & {
  Point: FC<BoxProps<HTMLDivElement>>;
};
