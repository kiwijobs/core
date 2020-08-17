import React, { FC } from 'react';
import { Dots, Page } from '../../../atoms';
import { BoxProps, Flex, Text } from '../../../quarks';
import { ICvLanguage } from '../Cv.types';
import { mapLanguageLevelToDots } from '../Cv.utils';

export const Languages: FC<ILanguagesProps> = ({ languages = [], ...props }) => {
  return (
    <>
      <Page.Heading>Znajomość języków obcych</Page.Heading>
      {languages.map(item => (
        <Flex
          key={item.id}
          sx={{
            alignItems: 'center',
            fontScale: 2,
            mb: 2,
          }}
          {...props}
        >
          <Dots score={mapLanguageLevelToDots(item.level!)} />
          <Text fontWeight="bold" pr={2}>
            {item.name}:{' '}
          </Text>
          <Text sx={{ color: 2, textTransform: 'lowercase' }} color="2">
            {item.level}
          </Text>
        </Flex>
      ))}
    </>
  );
};

interface ILanguagesProps extends BoxProps {
  languages: ICvLanguage[];
}
