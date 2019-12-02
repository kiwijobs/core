import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { Flex, BoxProps } from '../../quarks';
import { Loader } from './Loader';

const StoryBox: FC<BoxProps> = props => (
  <Flex
    width="90%"
    height="10vh"
    alignItems="center"
    justifyContent="center"
    margin="5vh auto"
    sx={{
      border: '1px solid #ddd',
    }}
    {...props}
  />
);

storiesOf('Atoms|Loader', module)
  .add('Default', () => (
    <StoryBox>
      <Loader variant="DEFAULT" />
    </StoryBox>
  ))
  .add('Dark', () => (
    <StoryBox>
      <Loader variant="DARK" />
    </StoryBox>
  ))
  .add('Light', () => (
    <StoryBox backgroundColor="dark">
      <Loader variant="LIGHT" />
    </StoryBox>
  ))
  .add('Static position', () => (
    <StoryBox flexDirection="column">
      <Flex fontScale={4}>Some placeholder text</Flex>
      <Loader absolute={false} variant="DARK" />
      <Flex fontScale={4}>Body content</Flex>
    </StoryBox>
  ));
