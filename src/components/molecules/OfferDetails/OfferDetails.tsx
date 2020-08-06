import React, { FC } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Flex, Box, BoxProps, Text, Image } from '../../quarks';
import { Button, Icon, Tag, Tooltip } from '../../atoms';
import { CompanyLogo, DetailsList } from './OfferDetails.components';
import { IOfferProps, MEETING_ENUM } from './OfferDetails.types';
import {
  formatClause,
  formatDistance,
  formatPayment,
  getEmployerLogo,
  getEmployerName,
} from './OfferDetails.utils';

import { theme } from '../../../theme';

export const OfferDetails: FC<IOfferDetailsProps> = ({
  offer,
  offerExpired,
  offerImage,
  subtitle,
  onMapClick,
  onPopupClick,
  sx,
  ...props
}) => {
  const {
    positionName,
    address,
    benefits,
    description,
    minPayment,
    financialBonuses,
    workingTimes,
    calculated_distance,
    company,
    userApplication,
    employmentForms,
    onlineRecruitment,
  } = offer ?? {};

  const hasPaymentBonuses = !isEmpty(benefits) || !isEmpty(financialBonuses);

  const meetingType = userApplication?.meeting?.type;
  const isVideoCall = meetingType === MEETING_ENUM.videoCall;
  const emptyOffer = !(
    address ||
    minPayment ||
    benefits.length ||
    financialBonuses.length ||
    employmentForms.length ||
    workingTimes.length
  );

  const getBadgeColor = (color: string) =>
    offerExpired || emptyOffer ? theme.colors[4] : `#${color}`;
  return (
    <>
      <Box sx={{ padding: [0, 3], mb: 2, width: '100%', bg: 'white', ...sx }} {...props}>
        <Flex
          width="100%"
          mb={3}
          sx={{
            justifyContent: ['stretch', 'space-between'],
            display: 'grid !important',
            gridTemplateColumns: ['auto 1fr', 'auto 1fr auto auto'],
            gridTemplateRows: 'max-content',
          }}
        >
          <CompanyLogo
            src={getEmployerLogo(offer)}
            mr={3}
            sx={{
              gridRow: [null, ' 1 / span 3'],
            }}
          />
          <Text
            sx={{ ellipsis: 2, mb: 1, gridRow: 1, gridColumn: 2, alignSelf: 'center', color: 2 }}
          >
            {getEmployerName(offer)}
          </Text>
          <Text
            as="h1"
            sx={{
              ellipsis: 2,
              fontScale: 6,
              fontWeight: 'bold',
              mb: [0, 1],
              mt: [2, 0],
              gridRow: 2,
              gridColumn: ['1 / span 3', 2],
            }}
          >
            {positionName}
          </Text>
          <Flex
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{
              mb: [null, null, 2],
              gridRow: 3,
              flexDirection: ['column', 'row'],
              alignItems: ['flex-start', 'center'],
              gridColumn: ['1 / span 3', 2],
            }}
          >
            {onlineRecruitment && (
              <Tooltip layer={isVideoCall ? 'Sprawdź jak się przygotować' : ''}>
                <Tag
                  sx={{
                    mt: [1, 2],
                    ...(isVideoCall && {
                      cursor: 'pointer',
                    }),
                  }}
                  onClick={() => (isVideoCall ? onPopupClick?.(true) : null)}
                >
                  <Text mr={isVideoCall ? 2 : 0}>Rekrutacja online</Text>
                  {isVideoCall && (
                    <Icon
                      name="Info"
                      sx={{
                        width: '16px',
                        height: '16px',
                        flexShrink: 0,
                        bg: 'secondary',
                        borderRadius: '50%',
                        color: 'white',
                      }}
                    />
                  )}
                </Tag>
              </Tooltip>
            )}
            {!offerExpired && subtitle}
          </Flex>
        </Flex>
        <Box
          sx={{
            position: 'relative',
            width: 'calc(100% + 32px)',
            height: 0,
            overflow: 'hidden',
            pt: '53%',
            ml: -3,
          }}
        >
          <>
            <Image
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                ...(offerExpired && {
                  opacity: 0.2,
                  filter: 'grayscale(1)',
                }),
              }}
              src={offerImage}
            />
            {company.isGoodCompany && (
              <Icon
                name="GoodEmployer"
                sx={{
                  position: 'absolute',
                  right: ['16px', '24px'],
                  bottom: ['16px', '24px'],
                  width: '145px',
                  height: 'auto',
                  borderRadius: 1,
                  boxShadow: 1,
                  filter: offerExpired ? 'grayscale(1)' : 'initial',
                }}
              />
            )}
          </>
        </Box>
        <Box width="100%">
          <Flex mt="20px">
            <Flex
              sx={{
                justifyContent: 'center',
                borderRadius: '50%',
                bg: getBadgeColor('FFDFDF'),
              }}
              size="24px"
            >
              <Icon name="Address" width="12px" />
            </Flex>
            <Flex flexDirection="column" ml={2} sx={{ overflow: 'hidden', color: 1 }}>
              <Text sx={{ fontScale: 4, fontWeight: 'bold' }}>Adres</Text>
              <Text>{address}</Text>
              <Box>
                {!!calculated_distance && (
                  <Text sx={{ fontWeight: 'bold', fontScale: 2 }}>
                    {formatDistance(calculated_distance)} km od Ciebie{` `}
                  </Text>
                )}
                <Button
                  variant="Link"
                  onClick={onMapClick}
                  data-testid="offerDetails-showOnMap"
                  sx={{
                    textDecoration: 'underline',
                    cursor: onMapClick ? 'pointer' : 'none',
                    padding: 0,
                    fontWeight: 'bold',
                    color: 1,
                    fontScale: 2,
                  }}
                >
                  zobacz na mapie
                </Button>
              </Box>
            </Flex>
          </Flex>
          <Flex mt="20px" color={getBadgeColor('D6DFFF')}>
            <Icon name="Salary" />
            <Flex flexDirection="column" ml={2} sx={{ overflow: 'hidden' }}>
              <Text sx={{ fontWeight: 'bold', fontScale: 4, color: 1 }}>
                Wynagrodzenie {hasPaymentBonuses && 'i benefity'}
              </Text>
              <Text
                sx={{
                  fontWeight: 'bold',
                  color: offerExpired ? 2 : 'secondary',
                  fontScale: 3,
                }}
              >
                {formatPayment(offer)}
              </Text>
              {hasPaymentBonuses && <DetailsList items={[...financialBonuses, ...benefits]} />}
            </Flex>
          </Flex>
          <Flex mt="20px" color={getBadgeColor('C3F0E1')}>
            <Icon name="Agreement" />
            <Flex flexDirection="column" ml={2} sx={{ overflow: 'hidden' }}>
              <Text sx={{ fontWeight: 'bold', fontScale: 4, color: 1 }}>Rodzaj umowy</Text>
              {!isEmpty(employmentForms) && <DetailsList items={employmentForms} />}
            </Flex>
          </Flex>

          <Flex mt="20px" color={getBadgeColor('FDF3DA')}>
            <Icon name="Disposition" />
            <Flex flexDirection="column" ml={2} sx={{ overflow: 'hidden' }}>
              <Text sx={{ fontWeight: 'bold', fontScale: 4, color: 1 }}>Wymiar czasu pracy</Text>
              {!isEmpty(workingTimes) && <DetailsList items={workingTimes} />}
            </Flex>
          </Flex>

          <Flex flexDirection="column" mt={4} sx={{ overflow: 'hidden' }}>
            <Text sx={{ fontWeight: 'bold', fontScale: 4, mb: 1 }}>Szczegóły oferty</Text>
            {isEmpty(description) ? (
              <>
                <Text as="p">Opis, dodatkowa treść oferty</Text>
                {[...Array(5)].map(() => (
                  <Box
                    sx={{
                      width: '80%',
                      bg: '4',
                      height: '8px',
                      mb: 2,
                      borderRadius: 1,
                      '&:last-of-type': { width: '40%' },
                    }}
                  />
                ))}
              </>
            ) : (
              <Text fontScale={3}>{description}</Text>
            )}
          </Flex>
        </Box>
      </Box>
      <Box
        sx={{ fontScale: 1, color: 2, '& > a': { color: 'inherit', textDecoration: 'none' } }}
        dangerouslySetInnerHTML={{ __html: formatClause(company.clause) }}
      />
    </>
  );
};

interface IOfferDetailsProps extends BoxProps {
  offerImage: string;
  offer: IOfferProps;
  offerExpired?: boolean;
  onMapClick?(): void;
  onPopupClick?(opt: boolean): void;
  subtitle: string | JSX.Element;
}
