import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container, Row, Col, Space } from './Grid';
import { rgba } from '../../../theme/colors';

storiesOf('Atoms|Grid', module)
  .add('BasicGrid', () => (
    <Container
      sx={{
        border: '1px solid #ddd',
      }}
    >
      <Row>
        <Col width={[1, 0.5]}>
          <Box width="100%" height="200px" bg="dark" color="white" fontScale={[1, 6]} />
        </Col>
        <Col width={[1, 1 / 2]}>
          <Box width="100%" height="200px" bg="steel" />
        </Col>
        <Col width={1 / 2}>
          <Box width="100%" height="200px" bg="cloudyBlue" />
        </Col>
        <Col width={1 / 2}>
          <Row>
            <Col width={1 / 2}>
              <Box width="100%" height="200px" bg="paleGreyTwo" />
            </Col>
            <Col width={1 / 2}>
              <Box width="100%" height="200px" bg="coolGrey" />
            </Col>
          </Row>
        </Col>
        <Col width={1}>
          <Row>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
            <Col width={['50%', 2 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
            <Col width={['50%', 2 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="softBlue" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ))
  .add('Stretched Heights', () => (
    <Container>
      <Row alignItems="stretch">
        <Col width={[1, 0.5, 0.25]}>
          <Box size="100%" minHeight="100px" bg="greenBlue" />
        </Col>
        <Col width={[1, 0.5, 0.25]}>
          <Box size="100%" minHeight="150px" bg="greenTeal" />
        </Col>
        <Col width={[1, 0.5, 0.25]}>
          <Box size="100%" minHeight="250px" bg="bluishGreen" />
        </Col>
        <Col width={[1, 0.5, 0.25]}>
          <Box size="100%" minHeight="200px" bg="tealishGreen" />
        </Col>
      </Row>
    </Container>
  ))
  .add('Undefined widths', () => (
    <Container>
      <Row>
        <Col width={['100%', 'auto']}>
          <Box width={['100%', '100px']} height="200px" bg="bluishGreen" />
        </Col>
        <Col flex="1 1 auto">
          <Box width="100%" height="200px" bg="tealishGreen" />
        </Col>
        <Col width={['100%', 'auto']}>
          <Box width={['100%', '250px']} height="200px" bg="bluishGreen" />
        </Col>
      </Row>
    </Container>
  ))
  .add('No Container', () => (
    <Row>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg={rgba(0.5).tangerine} />
      </Col>
    </Row>
  ))
  .add('Space component', () => (
    <Box margin="-10px">
      <Space margin="10px">
        {[...Array(21)].map((_, i) => (
          <Box key={i} display="inline-block" size="100px" bg={rgba(0.5).tangerine} />
        ))}
      </Space>
    </Box>
  ));
