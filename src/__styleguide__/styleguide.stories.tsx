import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex, BoxProps, Paper, Container, Row, Col } from '../components';
import { theme } from '../theme';
import { rgb, rgba } from '../theme/colors';

const Story: FC<{ label: string }> = ({ label, children }) => (
  <Box as="li" sx={{ '&:not(:last-of-type)': { mb: 9 } }}>
    <Box color="1" my={4}>
      {label}
    </Box>
    <Box fontWeight="normal" fontScale={3} color="1">
      {children}
    </Box>
  </Box>
);

const colorVariants = [80, null, 120, 140, 160, 180, 190];
const Color: FC<BoxProps> = props => (
  <Box
    sx={{
      m: 1,
      border: 1,
      borderRadius: 1,
      size: '10rem',
      bg: 'white',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        height: '7rem',
        width: '100%',
      }}
      {...props}
    />
    <Box
      sx={{
        p: 1,
        borderTop: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3rem',
        textTransform: 'uppercase',
        fontScale: 1,
        color: 2,
      }}
    >
      {props.color || props.bg}
    </Box>
  </Box>
);
const Border: FC<{ label: string } & BoxProps> = ({ sx, label, ...props }) => (
  <Box mr={4}>
    <Box fontScale={2} color="2" mb="1">
      {label}.
    </Box>
    <Box sx={{ width: '240px', height: '40px', borderRadius: 1, border: 1, ...sx }} {...props} />
  </Box>
);

storiesOf('Styleguide|Styleguide', module)
  .addDecorator(story => (
    <Container maxWidth="1460px" my={3}>
      <Paper>
        <Box px="7" as="ul" type="A" color="3" fontWeight="bold" fontScale={7}>
          {story()}
        </Box>
      </Paper>
    </Container>
  ))
  .add('Styleguide', () => (
    <>
      <Story label="Color">
        <Flex>
          {[1, 2, 3, 4, 5].map(bg => (
            <Color key={bg} bg={bg} />
          ))}
        </Flex>
        <Flex>
          {[1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1].map(a => (
            <Color bg={rgba(a).dark} color={`${a}`} />
          ))}
        </Flex>
        {Object.keys(rgb)
          .filter(x => x !== 'dark' && x !== 'white')
          .map(key => (
            <Flex key={key}>
              {colorVariants.map(variant => (
                <Color key={key + variant} bg={variant ? `${key}.${variant}` : key} />
              ))}
            </Flex>
          ))}
      </Story>

      <Story label="Typography">
        <Flex mb={5}>
          <Box fontWeight="bold">Open Sans:</Box>
          <Box fontWeight="bold" ml={8}>
            Bold
          </Box>
          <Box fontWeight="normal" ml={8}>
            Regular
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          {theme.fontScales.slice(1).map(({ fontSize, lineHeight }, index) => (
            <Box key={index}>
              <Flex sx={{ height: '4rem', alignItems: 'center' }} fontScale={index + 1}>
                <Box color="2" fontScale={1} mr={2}>
                  {index + 1}.
                </Box>
                Aa
              </Flex>

              <Box sx={{ fontScale: 2, color: 3 }}>
                {parseFloat(fontSize) * 10}px | {parseFloat(lineHeight) * 10}px
              </Box>
            </Box>
          ))}
        </Flex>
        <Box maxWidth="475px" mt={5}>
          Pracując z nami gwarantujemy Tobie, że wyposażymy Cię w kartę, dzięki której będziesz pić
          najlepszą kawę w bardzo atrakcyjnej cenie w każdej kawiarni od Bałtyku po Tatry, a także
          otrzymasz umowę o pracę.
          <br /> <br />
          Pracując z nami gwarantujemy Tobie, że wyposażymy Cię w kartę, dzięki której będziesz pić
          najlepszą kawę.
        </Box>
      </Story>

      <Story label="Grid / spacing">
        <Container bg="5" color="2" py="2" fontScale={3} textAlign="center">
          1280px
        </Container>
        <Container gutter={2}>
          <Row>
            {Array(16)
              .fill(null)
              .map((_, i) => (
                <Col width={[1 / 4, 1 / 8, 1 / 16]} key={i}>
                  <Box sx={{ borderRadius: 1, bg: 4, height: '120px' }} />
                </Col>
              ))}
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <Col width={[1, 1 / 2, 1 / 4]} key={i}>
                  <Box sx={{ borderRadius: 1, bg: 4, height: '120px' }} />
                </Col>
              ))}
          </Row>
        </Container>
        <Row mt={5}>
          <Col width={[1, '40%']}>
            <Container
              bg="5"
              color="2"
              py="2"
              width={[1, '360px']}
              fontScale={3}
              textAlign="center"
              mx={0}
            >
              360px
            </Container>
            <Container width={[1, '360px']} gutter={2} sx={{ px: 3 }} mx={0}>
              <Row>
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <Col width={1 / 8} key={i}>
                      <Box sx={{ borderRadius: 1, bg: 4, height: '120px' }} />
                    </Col>
                  ))}
                {Array(2)
                  .fill(null)
                  .map((_, i) => (
                    <Col width={1 / 2} key={i}>
                      <Box sx={{ borderRadius: 1, bg: 4, height: '120px' }} />
                    </Col>
                  ))}
              </Row>
            </Container>
          </Col>
          <Col width={[1, '60%']}>
            <Flex sx={{ flexWrap: 'wrap' }}>
              {theme.space.slice(1).map((s, i) => (
                <Box color="2" key={s} mt={2}>
                  <Box ml={3} fontScale={2}>
                    {s}px
                  </Box>
                  <Flex mt={2} mr={8}>
                    <Box fontScale={1} mr={2}>
                      {i + 1}.
                    </Box>
                    <Box sx={{ size: s, bg: 'secondary' }}></Box>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Col>
        </Row>
      </Story>

      <Story label="Shadows">
        <Box py={8} display="flex" position="relative">
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '50%',
              height: '100%',
              bg: 5,
            }}
          />
          {[3, 2, 1, 4].map(shadow => (
            <Box
              sx={{
                boxShadow: shadow,
                borderRadius: 2,
                mr: 4,
                width: 'calc(20% - 24px)',
                position: 'relative',
                bg: 'white',
              }}
            >
              <Box pt="100%" />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  color: 2,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {shadow}.
              </Box>
            </Box>
          ))}
        </Box>
      </Story>

      <Story label="Borders">
        <Border label="1" sx={{ border: 1 }} />
        <Flex mt={4}>
          <Border label="border-color: 1" sx={{ borderColor: '1' }} />
          <Border label="border-color: secondary" sx={{ borderColor: 'secondary' }} />
          <Border label="border-color: warning" sx={{ borderColor: 'warning' }} />
          <Border label="border-color: danger" sx={{ borderColor: 'danger' }} />
        </Flex>

        <Flex mt={7}>
          {theme.radii.slice(1).map((borderRadius, index) => (
            <Box fontScale={2} color="3">
              <Flex mb={1} mr={6}>
                <Box fontScale={2} color="2" mt={2} mr={2}>
                  {index + 1}.
                </Box>
                <Box sx={{ size: 150, border: 1, mt: 2, borderRadius }} />
              </Flex>
              <Box ml={3}>border-radius: {borderRadius}.</Box>
            </Box>
          ))}
        </Flex>
      </Story>
    </>
  ));
