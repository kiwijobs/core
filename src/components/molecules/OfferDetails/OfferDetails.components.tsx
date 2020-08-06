import React, { forwardRef, FC } from 'react';
import { Box, BoxProps, Flex, Text } from '../../quarks';
import { Icon } from '../../atoms';

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

interface ICompanyLogoProps extends BoxProps {
  src: string;
  size?: number;
  ref?: any;
}

export const CompanyLogo: React.FC<ICompanyLogoProps> = forwardRef((props, ref) => {
  const { src, size = 72, sx, ...rest } = props;

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
        ...sx,
      }}
      ref={ref}
      {...rest}
    >
      <Logo alt="Logo firmy" src={src} />
    </Flex>
  );
});

type TDetailsListItem = {
  name: string;
};

interface IDetailsListProps {
  items: TDetailsListItem[];
}

export const DetailsList: FC<IDetailsListProps> = ({ items }) => (
  <Box as="ul" sx={{ listStyle: 'none', p: 0, width: '100%', mt: 1, mb: 0, }}>
    {items?.map((item, index) => (
      <Flex as="li" sx={{ alignItems: 'center', fontScale: 3, color: 1 }} key={index}>
        <Icon name="Check" size={8} />
        <Text sx={{ ml: 1 }}>{item?.name}</Text>
      </Flex>
    ))}
  </Box>
);
