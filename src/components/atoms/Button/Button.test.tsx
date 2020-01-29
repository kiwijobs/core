import React from 'react';
import { wrapper } from '../../../__testUtils__';
import { Button } from './Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('Supports variants', () => {
    expect(render(<Button variant="Primary" />, { wrapper }).container).toMatchSnapshot();
    expect(render(<Button variant="Secondary" />, { wrapper }).container).toMatchSnapshot();
    expect(render(<Button variant="Text" />, { wrapper }).container).toMatchSnapshot();
    expect(render(<Button variant="Link" />, { wrapper }).container).toMatchSnapshot();
  });

  it('Supports "loading" prop', () => {
    expect(render(<Button loading>Stuff</Button>, { wrapper }).container).toMatchSnapshot();
  });
});
