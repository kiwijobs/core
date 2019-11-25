import React from 'react';
import { render } from '@testing-library/react';
import { rgb, rgba } from '../../theme/colors';
import { Box, Flex } from './Reflexbox';
import { wrapper } from '../../__testUtils__';

describe('Reflexbox', () => {
  it('Has correct colors', () => {
    expect(render(<Box color="bahamaYellow" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'color',
      'rgba(255,231,157,1)'
    );
    expect(
      render(<Box backgroundColor="bahamaYellow" />, { wrapper }).container.firstChild
    ).toHaveStyleRule('background-color', 'rgba(255,231,157,1)');
    expect(render(<Box bg="bahamaYellow" />, { wrapper }).container.firstChild).toHaveStyleRule(
      'background-color',
      'rgba(255,231,157,1)'
    );

    expect(
      render(<Box color={rgb.bahamaYellow} />, { wrapper }).container.firstChild
    ).toHaveStyleRule('color', 'rgba(255,231,157,1)');
    expect(
      render(<Box color={rgba(0.5).bahamaYellow} />, { wrapper }).container.firstChild
    ).toHaveStyleRule('color', 'rgba(255,231,157,0.5)');
  });

  it('Flex have a "display: flex"', () => {
    expect(render(<Flex />, { wrapper }).container.firstChild).toHaveStyleRule('display', 'flex');
  });

  it('Supports "sx" prop', () => {
    expect(
      render(
        <Box
          sx={{
            bg: 'bahamaYellow',
          }}
        />,
        { wrapper }
      ).container.firstChild
    ).toHaveStyleRule('background-color', 'rgba(255,231,157,1)');
  });
});
