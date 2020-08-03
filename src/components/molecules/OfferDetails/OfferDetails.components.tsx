import React, { forwardRef, FC } from 'react';
import { Box, BoxProps, Flex, Text } from '../../quarks';
import { Icon } from '../../atoms';

interface ICompanyLogoProps extends BoxProps {
  src: string;
  margin?: string;
  size?: number;
  ref?: any;
}

export const Logo: FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    as="img"
    sx={{
      width: '53px',
      height: 'auto',
      maxHeight: '53px',
      ...sx,
    }}
    {...props}
  />
);

export const CompanyLogo: React.FC<ICompanyLogoProps> = forwardRef((props, ref) => {
  const { src, margin, size = 72, sx, ...rest } = props;

  return (
    <Flex
      sx={{
        width: size,
        height: size,
        position: 'relative',
        flexShrink: 0,
        borderRadius: 1,
        border: 1,
        bg: 'white',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        margin: margin,
        ...sx,
      }}
      ref={ref}
      {...rest}
    >
      <Logo alt="Logo firmy" src={src} />
    </Flex>
  );
});

export const DetailsList: FC<IDetailsListProps> = ({ items }) => (
  <Box as="ul" sx={{ listStyle: 'none', p: 0, width: '100%', mt: 1 }}>
    {items?.map((item, index) => (
      <Flex as="li" sx={{ alignItems: 'center', lineHeight: 1.71, color: 1 }} key={index}>
        <Icon name="Check" sx={{ width: '8px', height: '8px' }} />
        <Text sx={{ ml: 1 }}>{item?.name}</Text>
      </Flex>
    ))}
  </Box>
);

interface IDetailsListProps {
  items: TDetailsListItem[];
}

type TDetailsListItem = {
  name: string;
};
