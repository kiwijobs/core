import React from 'react';
import { Box, BoxProps } from '../../quarks';

// export const MenuWrapper: FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
//   ({ children, ...props }, ref) => (
//     <Box width={['100vw', 'initial']} paddingX={3} {...props}>
//       <Box
//         sx={{
//           borderRadius: 1,
//           border: '1px solid',
//           borderColor: 'paleGrey',
//           transformOrigin: 'center top',
//           '&:focus': {
//             outline: 'none',
//           },
//         }}
//         width="100%"
//         py={3}
//         bg="white"
//         ref={ref}
//       >
//         {children}
//       </Box>
//     </Box>
//   )
// );

interface ListItemProps extends BoxProps {
  dense?: boolean;
}

export const List = ({ sx, ...props }: BoxProps) => (
  <Box
    as="ul"
    sx={{
      margin: 0,
      padding: 0,
      listStyle: 'none',
      ...sx,
    }}
    {...props}
  />
);
List.Item = ({ sx, dense, ...props }: ListItemProps) => (
  <Box
    as="li"
    sx={{
      transition: '150ms ease-in-out',
      cursor: 'pointer',
      py: 2,
      px: 3,

      ...(dense && {
        py: 1,
        fontScale: 5,
      }),

      '&:hover': {
        bg: 'paleGreyThree',
      },
      ...sx,
    }}
    {...props}
  />
);
