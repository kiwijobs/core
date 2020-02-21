import React from 'react';
import { wrapper } from '../../../__testUtils__';
import { Logotype } from './Logotype';
import { render } from '@testing-library/react';

describe('Logotype', () => {
  it('Matches snapshot', () => {
    expect(render(<Logotype src="/img.jpg" />, { wrapper }).container).toMatchSnapshot();
    expect(
      render(<Logotype src="/img.jpg" size="32px" />, { wrapper }).container
    ).toMatchSnapshot();
    expect(render(<Logotype src="/img.jpg" size={60} />, { wrapper }).container).toMatchSnapshot();
  });
});
