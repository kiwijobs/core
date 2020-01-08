import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from '../../quarks';
import { Icon, IconProps } from './Icon';
import * as icons from './icons';

const StoryWrapper = (props: any) => (
  <Flex
    sx={{
      alignItems: 'center',
      flexWrap: 'wrap',
      m: 2,
    }}
    {...props}
  />
);
const SIcon = ({ text, ...props }: { text?: any } & IconProps) => (
  <Flex
    sx={{
      border: 1,
      borderRadius: 1,
      bg: 'white',
      color: 'dark',
      m: 1,
      p: 2,
      size: '8rem',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <Icon {...props} />
    {text}
  </Flex>
);

storiesOf('Atoms|Icons', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .add('Default', () => {
    const array = Object.keys(icons) as Array<keyof typeof icons>;

    return (
      <>
        {array.map(name => (
          <SIcon
            name={name}
            text={
              <Box mt={2} color="steel" fontScale={1}>
                {name}
              </Box>
            }
          ></SIcon>
        ))}
      </>
    );
  })
  .add('Add', () => (
    <>
      <SIcon name="Add" />
      <SIcon
        sx={{
          border: 1,
          borderRadius: 1,
          borderColor: 'dark',
        }}
        name="Add"
      />
      <SIcon
        sx={{
          border: 1,
          borderRadius: '50%',
          borderColor: 'dark',
        }}
        name="Add"
      />
      <SIcon
        sx={{
          borderRadius: '50%',
          bg: 'greenBlue',
          color: 'white',
        }}
        name="Add"
      />
    </>
  ))
  .add('Check', () => (
    <>
      <SIcon name="Check" />
      <SIcon
        sx={{
          border: 1,
          borderRadius: 1,
          borderColor: 'dark',
          p: 1,
        }}
        name="Check"
      />
      <SIcon
        sx={{
          borderRadius: 1,
          bg: 'greenBlue',
          color: 'white',
          p: 1,
        }}
        name="Check"
      />
      <SIcon
        sx={{
          borderRadius: '50%',
          bg: 'greenBlue',
          color: 'white',
          p: 1,
        }}
        name="Check"
      />
    </>
  ))
  .add('Close', () => (
    <>
      <SIcon p={1} name="Close" />
      <SIcon
        sx={{
          border: 1,
          borderRadius: 1,
          borderColor: 'dark',
          p: 1,
        }}
        name="Close"
      />
      <SIcon
        sx={{
          border: 1,
          borderRadius: '50%',
          borderColor: 'greenBlue',
          color: 'greenBlue',
          p: 1,
        }}
        name="Close"
        p={1}
      />
      <SIcon
        sx={{
          borderRadius: '50%',
          bg: 'greenBlue',
          color: 'white',
          p: 1,
        }}
        name="Close"
      />
    </>
  ))
  .add('Info', () => (
    <>
      <SIcon name="Info" />
      <SIcon
        sx={{
          border: 1,
          borderRadius: '50%',
          borderColor: 'dark',
        }}
        name="Info"
      />
      <SIcon
        sx={{
          border: 1,
          borderRadius: '50%',
          bg: 'dark',
          color: 'white',
        }}
        name="Info"
      />
    </>
  ));
