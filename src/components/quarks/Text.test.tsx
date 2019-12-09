import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';
import { render } from '@testing-library/react';
import { wrapper } from '../../__testUtils__';

describe('Text', () => {
  it('Has "fontScale" prop', () => {
    const container = render(<Text fontScale={2} />, { wrapper }).container.firstChild;
    expect(container).toHaveStyleRule('font', `1.2rem / 1.6rem "Open Sans"`);
  });

  it('Overwrites fontScale', () => {
    const container = render(<Text fontScale={5} fontSize="33px" />, { wrapper }).container
      .firstChild;
    expect(container).toHaveStyleRule('font-size', '33px');
    expect(container).toHaveStyleRule('font', `1.8rem / 2.4rem "Open Sans"`);
  });

  it('Works with styled-components', () => {
    const Button = (props: any) => (
      <Text
        sx={{
          color: 'bahamaYellow',
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
});
