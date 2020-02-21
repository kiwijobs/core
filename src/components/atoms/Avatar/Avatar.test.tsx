import React from 'react';
import { wrapper } from '../../../__testUtils__';
import { Avatar } from './Avatar';
import { render } from '@testing-library/react';

describe('Avatar', () => {
  it('Matches snapshot', () => {
    expect(render(<Avatar src="/img.jpg" />, { wrapper }).container).toMatchSnapshot();
    expect(render(<Avatar src="/img.jpg" size="32px" />, { wrapper }).container).toMatchSnapshot();
    expect(render(<Avatar src="/img.jpg" size={60} />, { wrapper }).container).toMatchSnapshot();
  });
});
