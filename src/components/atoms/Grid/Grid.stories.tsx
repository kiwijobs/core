import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../quarks';
import { Container, Row, Col, Space } from './Grid';

storiesOf('Atoms/Grid', module)
  .add('BasicGrid', () => (
    <Container
      sx={{
        border: '1px solid #ddd',
      }}
    >
      <Row>
        <Col width={[1, 0.5]}>
          <Box width="100%" height="200px" bg="dark" color="white" fontScale={[6, 1]} />
        </Col>
        <Col width={[1, 1 / 2]}>
          <Box width="100%" height="200px" bg="2" />
        </Col>
        <Col width={1 / 2}>
          <Box width="100%" height="200px" bg="secondary" />
        </Col>
        <Col width={1 / 2}>
          <Row>
            <Col width={1 / 2}>
              <Box width="100%" height="200px" bg="5" />
            </Col>
            <Col width={1 / 2}>
              <Box width="100%" height="200px" bg="3" />
            </Col>
          </Row>
        </Col>
        <Col width={1}>
          <Row>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
            </Col>
            <Col width={['50%', 2 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
            </Col>
            <Col width={['50%', 2 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
            </Col>
            <Col width={['50%', 1 / 5, 1 / 8]}>
              <Box width="100%" height="200px" bg="secondary.150" />
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
          <Box size="100%" minHeight="100px" bg="primary" />
        </Col>
        <Col width={[1, 0.5, 0.25]}>
          <Box size="100%" minHeight="150px" bg="primary.50" />
        </Col>
        <Col width={[1, 0.5, 0.25]}>
          <Box size="100%" minHeight="250px" bg="primary.150" />
        </Col>
        <Col width={[1, 0.5, 0.25]}>
          <Box size="100%" minHeight="200px" bg="primary.120" />
        </Col>
      </Row>
    </Container>
  ))
  .add('Undefined widths', () => (
    <Container>
      <Row>
        <Col width={['100%', 'auto']}>
          <Box width={['100%', '100px']} height="200px" bg="primary" />
        </Col>
        <Col flex="1 1 auto">
          <Box width="100%" height="200px" bg="primary.140" />
        </Col>
        <Col width={['100%', 'auto']}>
          <Box width={['100%', '250px']} height="200px" bg="primary" />
        </Col>
      </Row>
    </Container>
  ))
  .add('No Container', () => (
    <Row>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
      <Col width={[1, 0.5, 0.25]}>
        <Box width="100%" height="200px" bg="tangerine.150" />
      </Col>
    </Row>
  ))
  .add('Space component', () => (
    <Box margin="-10px">
      <Space margin="10px">
        {[...Array(21)].map((_, i) => (
          <Box key={i} display="inline-block" size="100px" bg="tangerine.150" />
        ))}
      </Space>
    </Box>
  ));
