import React, { FC } from 'react';
import { format } from 'date-fns';
import { Box, BoxProps, Flex, Text } from '../../../quarks';
import { Avatar } from '../../../atoms';
import { Icon } from '../../../atoms/Icon';
import * as icons from '../../../atoms/Icon/icons';

import { ICvTypes } from '../Cv.types';
import { formatNumber } from '../Cv.utils';

const PersonalCardItem: FC<IPersonalCardItemProps> = ({ info, name, ...props }) => (
  <Flex sx={{ color: 1, alignItems: 'center', mb: 2 }}>
    <Icon name={name} width="15px" mr={3} {...props} />
    <Text>{info}</Text>
  </Flex>
);

export const PersonalCard: FC<IPersonalCardProps> = ({
  fullname,
  avatar,
  birthDate,
  phoneNumber,
  email,
}) => (
  <Flex>
    <Avatar
      src={avatar?.default ?? ''}
      sx={{
        borderRadius: 1,
        size: '94px',
        mr: 4,
      }}
    />
    <Box>
      <Text fontWeight="bold" fontScale={3} display={['none', 'inline-block']} mb={2}>
        {fullname}
      </Text>
      <PersonalCardItem
        info={format(new Date(birthDate!), 'dd.MM.yyyy')}
        name="Birthday"
        height="17px"
      />
      <PersonalCardItem info={formatNumber(phoneNumber)} name="Call" height="15px" />
      {email && <PersonalCardItem info={email!} name="Mail" height="10px" />}
    </Box>
  </Flex>
);

interface IPersonalCardProps
  extends Pick<ICvTypes, 'fullname' | 'avatar' | 'birthDate' | 'phoneNumber' | 'email'> {}

interface IPersonalCardItemProps extends BoxProps {
  info: string;
  name: keyof typeof icons;
}
