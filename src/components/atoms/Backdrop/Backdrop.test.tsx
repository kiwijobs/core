import React from 'react';
import { wrapper } from '../../../__testUtils__';
import { Backdrop } from './Backdrop';
import { render } from '@testing-library/react';
import * as hooks from '../../../hooks';

Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

describe('Backdrop', () => {
  it('Should match snapshot', () => {
    expect(render(<Backdrop />, { wrapper }).container).toMatchSnapshot();
  });

  it('Should use body lock', () => {
    const mockBodyLock = jest.fn(() => []);
    jest.spyOn(hooks, 'useBodyLock').mockImplementation(mockBodyLock);

    render(<Backdrop />, { wrapper });

    expect(mockBodyLock).toHaveBeenCalledWith();
    expect(mockBodyLock).toHaveBeenCalledTimes(1);
  });
});
