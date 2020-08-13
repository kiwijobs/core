import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { OfferDetails } from './OfferDetails';
import { Flex, Text, Box, BoxProps } from '../../quarks';
import { Icon } from '../../atoms';
import { differenceInCalendarDays, format } from 'date-fns';

const mockOffer = {
  positionName: 'positionName',
  address: 'address',
  publishedAt: '12-08-2019',
  endDate: '2020-08-06 11:50:54',
  images: [
    {
      id: 1,
      imageSlug: 'https://backend.alfa.ktools.dev/image/Rd/2x1/w_575/image.jpeg',
    },
  ],
  company: {
    imageSlug: 'imageSlug.jpg',
    logo: 'imageSlug.jpg',
    name: 'companyName',
    isGoodCompany: true,
    clause:
      'Administratorem danych osobowych jest SuperComapny. Podane dane osobowe przetwarzane są w celu przeprowadzenia procesu rekrutacyjnego na stanowisko, na które wysyłasz swoją aplikację i przetwarzane są zgodnie z art. 6 ust. 1 a RODO z dnia 2016/679 z 27 kwetmia 2016 r.',
  },
  cityId: 5,
  requiredHourlyRate: true,
  minPayment: 30,
  maxPayment: 50,
  brand: {
    name: 'brand',
    imageSlug:
      'https://backend.alfa.ktools.dev/storage/Kiwijobs/company/133/brand/230/1592848855.png',
    logo: 'https://backend.alfa.ktools.dev/storage/Kiwijobs/company/133/brand/230/1592848855.png',
  },
  contactNumber: '123 123 123',
  chatAvailability: false,
  onlineRecruitment: true,
  candyWebPath: 'candyWebPath',
  financialBonuses: [
    {
      id: 1,
      name: 'financial bonuses',
    },
  ],
  workingTimes: [
    {
      id: 1,
      name: 'working times',
    },
  ],
  description: '',
  benefits: [
    {
      id: 1,
      name: 'benefits',
    },
  ],
  employmentForms: [
    {
      id: 1,
      name: 'employment forms',
    },
  ],
  userApplication: {
    createdAt: '2020-07-06 11:50:54',
    meeting: {
      type: 'VIDEO_CALL',
    },
  },
};

const getDaysToExpire = (start: number | Date, end: number | Date) => {
  const number = differenceInCalendarDays(end, start);
  let text;

  if (number > 1) {
    text = `Wygasa za ${number} dni`;
  } else if (number === 1 || number === 0) {
    text = `Wygasa za 1 dzień`;
  }

  return {
    number,
    text,
  };
};

const getDateDescription = () => {
  const { number: daysToExpire, text: expireDescription } = getDaysToExpire(
    new Date(),
    new Date(mockOffer.endDate.replace(/-/g, '/'))
  );

  const expiresSoon = daysToExpire <= 2;

  return (
    <Text
      color={!mockOffer.userApplication && expiresSoon ? 'danger' : 2}
      fontScale={3}
      sx={{ mt: [1, 2] }}
    >
      {mockOffer.userApplication
        ? `Data aplikacji: ${format(
            new Date(mockOffer.userApplication.createdAt.replace(/-/g, '/')),
            'dd.MM.yyyy'
          )}`
        : expireDescription}
    </Text>
  );
};

const Wrapper: FC<BoxProps> = ({ sx, ...props }) => (
  <Box sx={{ p: 3, bg: 'white', ...sx }} {...props} />
);

storiesOf('Molecules|OfferDetails', module)
  .add('OfferDetails', () => (
    <Wrapper>
      <OfferDetails
        dateDescription={
          <Text color={2} fontScale={3} sx={{ mt: [1, 2] }}>
            Wygasa za 21 dni
          </Text>
        }
        offer={{
          ...mockOffer,
          parsedImages: {
            defaultImage: 'https://backend.alfa.ktools.dev/image/Jje/2x1/w_575/image.jpg',
          },
        }}
      />
    </Wrapper>
  ))
  .add('OfferDetails with parsedImages', () => (
    <Wrapper>
      <OfferDetails
        offer={{
          ...mockOffer,
          parsedImages: {
            defaultImage: 'https://backend.alfa.ktools.dev/image/Jje/2x1/w_575/image.jpg',
            extendedImage: 'https://backend.alfa.ktools.dev/image/Jje/2x1/w_470/image.jpg',
          },
        }}
        dateDescription={getDateDescription()}
      />
    </Wrapper>
  ))
  .add('OfferDetails offer date description', () => (
    <Wrapper>
      <OfferDetails offer={mockOffer} dateDescription={getDateDescription()} />
    </Wrapper>
  ))
  .add('OfferDetails offer date expired', () => (
    <Wrapper>
      <OfferDetails offer={mockOffer} offerExpired={true} dateDescription={getDateDescription()} />
    </Wrapper>
  ))
  .add('OfferDetails with chat component', () => (
    <Wrapper>
      <OfferDetails
        offer={mockOffer}
        chatComponent={
          <Flex sx={{ alignItems: 'center' }}>
            <Icon name="Bell" size={24} />
            <Text>Zadaj pytanie pracodawcy</Text>
          </Flex>
        }
        dateDescription={getDateDescription()}
      />
    </Wrapper>
  ));
