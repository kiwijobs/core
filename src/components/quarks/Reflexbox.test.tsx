import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import { Box, Flex } from './Reflexbox';
import { wrapper } from '../../__testUtils__';

describe('Reflexbox', () => {
  it('Has correct colors', () => {
    expect(render(<Box color="primary" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'color',
      'rgb(8,191,130)'
    );
    expect(render(<Box color="dark" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'color',
      'rgb(40,50,56)'
    );
    expect(render(<Box color="1" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'color',
      'rgb(39,50,55)'
    );
    expect(render(<Box color="#fab" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'color',
      '#fab'
    );
    expect(
      render(<Box color="rgba(0,0,0,0.25)" />, { wrapper }).container.firstChild
    ).toHaveStyleRule('color', 'rgba(0,0,0,0.25)');

    expect(render(<Box color="primary.150" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'color',
      'rgb(131,223,192)'
    );
    expect(render(<Box color="tangerine.50" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'color',
      'rgb(127,75,11)'
    );
  });

  it('Flex have a "display: flex"', () => {
    expect(render(<Flex />, { wrapper }).container.firstChild).toHaveStyleRule('display', 'flex');
  });

  it('Supports "sx" prop', () => {
    const { firstChild } = render(
      <Box
        sx={{
          bg: ['tangerine.175', 5],
          color: ['tangerine.100', 'primary.100'],
          borderColor: '#fab',

          '&:hover': {
            bg: 'primary.100',
            color: [1, 2],
          },
        }}
      />,
      { wrapper }
    ).container;
    expect(firstChild).toMatchSnapshot();
  });

  it('Has "fontScale" prop', () => {
    const container = render(<Box fontScale={2} />, { wrapper }).container.firstChild;
    expect(container).toHaveStyleRule('font', `1.2rem / 1.6rem "Open Sans"`);
  });

  it('Overwrites fontScale', () => {
    const container = render(<Box fontScale={5} fontSize="33px" />, { wrapper }).container
      .firstChild;
    expect(container).toHaveStyleRule('font-size', '33px');
    expect(container).toHaveStyleRule('font', `1.8rem / 2.4rem "Open Sans"`);
  });

  it('Supports "fontScale" in "sx" prop', () => {
    const { firstChild } = render(
      <Box
        sx={{
          fontScale: [3, 2],
        }}
      />,
      { wrapper }
    ).container;
    const { firstChild: firstChild2 } = render(
      <Box
        sx={{
          fontScale: 3,
        }}
      />,
      { wrapper }
    ).container;

    expect(firstChild).toMatchSnapshot();
    expect(firstChild2).toHaveStyleRule('font', `1.4rem / 2.4rem "Open Sans"`);
  });

  it('Works with styled-components', () => {
    const Button = (props: any) => (
      <Box
        sx={{
          color: 'primary',
          padding: '15px 30px',
          opacity: 1,
        }}
        fontScale={5}
        {...props}
      />
    );

    const StyledButtonLink = styled(Button)`
      padding-right: 45px;
      z-index: 2;
    `;
    const ReflexButtonLink = (props: any) => (
      <Button
        css={`
          padding-right: 60px;
          margin: 5px;
          z-index: 5;
        `}
        fontScale={6}
        {...props}
      />
    );

    expect(render(<StyledButtonLink />, { wrapper }).container).toMatchSnapshot();
    expect(render(<StyledButtonLink margin="20px 0" />, { wrapper }).container).toMatchSnapshot();
    expect(render(<ReflexButtonLink margin="20px 0" />, { wrapper }).container).toMatchSnapshot();
  });

  it('Accepts "as" prop', () => {
    expect(
      render(<Box as="input" value="12" onChange={jest.fn()} placeholder="Input placeholder" />, {
        wrapper,
      }).container
    ).toMatchSnapshot();
  });

  it('Supports "ellipsis" in "sx" prop', () => {
    const { firstChild } = render(
      <Box
        sx={{
          ellipsis: [3, 2],
        }}
      />,
      { wrapper }
    ).container;
    const { firstChild: firstChild2 } = render(
      <Box
        sx={{
          ellipsis: 1,
        }}
      />,
      { wrapper }
    ).container;

    expect(firstChild).toMatchSnapshot();
    expect(firstChild2).toHaveStyleRule('-webkit-line-clamp', '1');
    expect(firstChild2).toHaveStyleRule('display', '-webkit-box');
    expect(firstChild2).toHaveStyleRule('overflow', 'hidden');
    expect(firstChild2).toHaveStyleRule('-webkit-box-orient', 'vertical');
  });
  it('Supports null values in "ellipsis" array', () => {
    const { firstChild } = render(
      <Box
        sx={{
          ellipsis: [null, 3, 2],
        }}
      />,
      { wrapper }
    ).container;
    const { firstChild: firstChild2 } = render(
      <Box
        sx={{
          ellipsis: [2, null, 4],
        }}
      />,
      { wrapper }
    ).container;
    const { firstChild: firstChild3 } = render(
      <Box
        sx={{
          ellipsis: [2, 3, null],
        }}
      />,
      { wrapper }
    ).container;

    expect(firstChild).toMatchSnapshot();
    expect(firstChild2).toMatchSnapshot();
    expect(firstChild3).toMatchSnapshot();
  });
});
