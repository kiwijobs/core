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
      color: '1',
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
              <Box mt={2} color="2" fontScale={1}>
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
          borderColor: '1',
        }}
        name="Add"
      />
      <SIcon
        sx={{
          border: 1,
          borderRadius: '50%',
          borderColor: '1',
        }}
        name="Add"
      />
      <SIcon
        sx={{
          borderRadius: '50%',
          bg: 'primary',
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
          borderColor: '1',
          p: 1,
        }}
        name="Check"
      />
      <SIcon
        sx={{
          borderRadius: 1,
          bg: 'primary',
          color: 'white',
          p: 1,
        }}
        name="Check"
      />
      <SIcon
        sx={{
          borderRadius: '50%',
          bg: 'primary',
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
          borderColor: '1',
          p: 1,
        }}
        name="Close"
      />
      <SIcon
        sx={{
          border: 1,
          borderRadius: '50%',
          borderColor: 'primary',
          color: 'primary',
          p: 1,
        }}
        name="Close"
        p={1}
      />
      <SIcon
        sx={{
          borderRadius: '50%',
          bg: 'primary',
          color: 'white',
          p: 1,
        }}
        name="Close"
      />
    </>
  ))
  .add('Chevron', () => (
    <>
      <SIcon name="Chevron" direction="UP" />
      <SIcon name="Chevron" direction="DOWN" />
      <SIcon name="Chevron" direction="LEFT" />
      <SIcon name="Chevron" direction="RIGHT" />
      <SIcon
        sx={{ borderRadius: '50%', bg: 'primary.50', color: 'white', p: 1 }}
        name="Chevron"
        direction="UP"
      />
      <SIcon
        sx={{ borderRadius: '50%', bg: 'primary.75', color: 'white', p: 1 }}
        name="Chevron"
        direction="DOWN"
      />
      <SIcon
        sx={{ borderRadius: '50%', bg: 'primary.125', color: 'white', p: 1 }}
        name="Chevron"
        direction="LEFT"
      />
      <SIcon
        sx={{ borderRadius: '50%', bg: 'primary.150', color: 'white', p: 1 }}
        name="Chevron"
        direction="RIGHT"
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
          borderColor: '1',
        }}
        name="Info"
      />
      <SIcon
        sx={{
          border: 1,
          borderRadius: '50%',
          bg: '1',
          color: 'white',
        }}
        name="Info"
      />
    </>
  ))
  .add('Bell', () => (
    <>
      <SIcon name="Bell" />
      <SIcon
        sx={{
          border: 1,
          borderRadius: 1,
        }}
        name="Bell"
      />
      <SIcon
        sx={{
          borderRadius: 1,
          p: 1,
          bg: 'primary',
          color: 'white',
        }}
        name="Bell"
      />
    </>
  ))
  .add('Remove', () => (
    <>
      <SIcon name="Remove" />
      <SIcon sx={{ border: 1, borderRadius: 1, p: 1 }} name="Remove" />
    </>
  ));
