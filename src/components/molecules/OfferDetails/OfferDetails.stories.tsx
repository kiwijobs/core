import React from 'react';
import { storiesOf } from '@storybook/react';
import { OfferDetails } from './OfferDetails';
import { Text } from '../../quarks';
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
    clause: 'claue',
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
  description: 'description',
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

storiesOf('Molecules|OfferDetails', module)
  .add('OfferDetails', () => (
    <OfferDetails
      subtitle={
        <Text color={2} fontScale={3} sx={{ mt: [1, 2] }}>
          Wygasa za 21 dni
        </Text>
      }
      offerImage="https://backend.alfa.ktools.dev/image/Jje/2x1/w_575/image.jpg"
      offer={mockOffer}
    />
  ))
  .add('OfferDetails offer date description', () => (
    <OfferDetails
      offer={mockOffer}
      offerImage="https://backend.alfa.ktools.dev/image/Jje/2x1/w_575/image.jpg"
      subtitle={getDateDescription()}
    />
  ))
  .add('OfferDetails offer date expired', () => (
    <OfferDetails
      offer={mockOffer}
      offerExpired={true}
      offerImage="https://backend.alfa.ktools.dev/image/Jje/2x1/w_575/image.jpg"
      subtitle={getDateDescription()}
    />
  ));
