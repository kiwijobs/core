import React from 'react';
import { wrapper } from '../../../__testUtils__';
import { render, fireEvent } from '@testing-library/react';
import { ButtonTupple } from './ButtonTupple';

describe('ButtonTupple', () => {
  it('Matches snapshot', () => {
    expect(
      render(<ButtonTupple active={0} onChange={() => {}} buttons={['Left', 'Right']} />, {
        wrapper,
      }).container
    ).toMatchSnapshot();
  });

  it('"onChange" has correct params', () => {
    const mockOnChange = jest.fn();

    const { getByText } = render(
      <ButtonTupple active={0} onChange={mockOnChange} buttons={['Left', 'Right']} />,
      {
        wrapper,
      }
    );

    fireEvent.click(getByText('Left'));
    expect(mockOnChange).not.toHaveBeenCalled();

    fireEvent.click(getByText('Right'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
