import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text } from '../../quarks';
import { Container, Row, Col, Space } from '../Grid';
import { Paper } from './Paper';

storiesOf('Atoms|Paper', module)
  .add('Basic Paper', () => (
    <Container marginY={3}>
      <Paper>
        <Box fontWeight="bold" fontScale={4} mb={3}>
          This is a simple Paper.
        </Box>
        <Box>
          Optio nemo tempore. Qui non a et voluptatem dolor magni. Voluptate numquam sit et id
          velit. Molestiae vel exercitationem voluptates ipsa voluptates.
        </Box>
      </Paper>
    </Container>
  ))
  .add('Borders & Shadows', () => (
    <Container>
      <Space marginY={5}>
        <Paper sx={{ boxShadow: 0 }}>
          Id ut nesciunt et optio totam earum. Ipsum nisi eius inventore nemo excepturi iste qui.
          Exercitationem et non voluptatem officiis dolore. Provident et saepe aliquam quidem at
          nihil cupiditate. Et velit similique. Repellendus sit in consectetur architecto et sit.
          Voluptas distinctio veniam. Ab modi ut eveniet ipsam iste sed qui. Est earum repudiandae.
          Officia quas cum fuga vero rerum. Accusantium deleniti quod. Magni illo consequatur natus.
          Consequatur non odio et deleniti est sapiente consequatur animi blanditiis. Earum eos
          officia et porro aut. Et voluptatem rem enim perspiciatis sit deleniti debitis quia
          molestiae.
        </Paper>
        <Paper sx={{ boxShadow: 1 }}>
          Id ut nesciunt et optio totam earum. Ipsum nisi eius inventore nemo excepturi iste qui.
          Exercitationem et non voluptatem officiis dolore. Provident et saepe aliquam quidem at
          nihil cupiditate. Et velit similique. Repellendus sit in consectetur architecto et sit.
          Voluptas distinctio veniam. Ab modi ut eveniet ipsam iste sed qui. Est earum repudiandae.
          Officia quas cum fuga vero rerum. Accusantium deleniti quod. Magni illo consequatur natus.
          Consequatur non odio et deleniti est sapiente consequatur animi blanditiis. Earum eos
          officia et porro aut. Et voluptatem rem enim perspiciatis sit deleniti debitis quia
          molestiae.
        </Paper>
        <Paper sx={{ boxShadow: 2 }}>
          Id ut nesciunt et optio totam earum. Ipsum nisi eius inventore nemo excepturi iste qui.
          Exercitationem et non voluptatem officiis dolore. Provident et saepe aliquam quidem at
          nihil cupiditate. Et velit similique. Repellendus sit in consectetur architecto et sit.
          Voluptas distinctio veniam. Ab modi ut eveniet ipsam iste sed qui. Est earum repudiandae.
          Officia quas cum fuga vero rerum. Accusantium deleniti quod. Magni illo consequatur natus.
          Consequatur non odio et deleniti est sapiente consequatur animi blanditiis. Earum eos
          officia et porro aut. Et voluptatem rem enim perspiciatis sit deleniti debitis quia
          molestiae.
        </Paper>
        <Paper sx={{ boxShadow: 0, border: 1 }}>
          Id ut nesciunt et optio totam earum. Ipsum nisi eius inventore nemo excepturi iste qui.
          Exercitationem et non voluptatem officiis dolore. Provident et saepe aliquam quidem at
          nihil cupiditate. Et velit similique. Repellendus sit in consectetur architecto et sit.
          Voluptas distinctio veniam. Ab modi ut eveniet ipsam iste sed qui. Est earum repudiandae.
          Officia quas cum fuga vero rerum. Accusantium deleniti quod. Magni illo consequatur natus.
          Consequatur non odio et deleniti est sapiente consequatur animi blanditiis. Earum eos
          officia et porro aut. Et voluptatem rem enim perspiciatis sit deleniti debitis quia
          molestiae.
        </Paper>
      </Space>
    </Container>
  ))
  .add('Access Paper', () => (
    <Container marginY={3}>
      <Row>
        <Col width={[1, 0.5]}>
          <Paper padding={[3, 5]}>
            <Row gutter={4}>
              <Col color="steel">
                Ilość ogłoszeń:{' '}
                <Text color="dark" fontWeight="bold">
                  100
                </Text>
              </Col>

              <Col color="steel">
                Czas na wykorzystanie pakietu:{' '}
                <Text color="dark" fontWeight="bold">
                  12 miesięcy
                </Text>
              </Col>

              <Col width={[1, 0.45]}>
                <Box color="steel">Data startu subskrypcji:</Box>
                <Box color="dark" fontWeight="bold">
                  05.01.2019
                </Box>
              </Col>
              <Col width={[1, 0.55]}>
                <Box color="steel">Data końca subskrypcji:</Box>
                <Box color="dark" fontWeight="bold">
                  05.01.2019
                </Box>
              </Col>
            </Row>
            <Paper.Separator px={[3, 5]} ml={[-3, -5]} />
            <Row>
              <Col width={1} fontWeight="bold">
                Status pakietu
              </Col>
              <Col width={[1, 0.45]}>
                <Box color="steel">Pozostało ogłoszeń:</Box>
                <Box color="dark" fontWeight="bold">
                  10/10
                </Box>
              </Col>
              <Col width={[1, 0.55]}>
                <Box color="steel">Dni na wykorzystanie ogłoszeń:</Box>
                <Box color="dark" fontWeight="bold">
                  25
                </Box>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Container>
  ));
