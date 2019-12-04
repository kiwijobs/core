import React from 'react';
import { render } from '@testing-library/react';
import { wrapper } from '../../../__testUtils__';
import { Container, Row, Col } from './Grid';

describe('Grid components', () => {
  it('Container has correct styles', () => {
    const container = render(<Container />, { wrapper }).container.firstChild;
    expect(container).toHaveStyleRule('max-width', 'calc(1200px + 16px)');
    expect(container).toHaveStyleRule('width', '100%');
    expect(container).toHaveStyleRule('margin-left', 'auto');
    expect(container).toHaveStyleRule('margin-right', 'auto');
    expect(container).toHaveStyleRule('padding', '16px');
  });

  it('Row has correct styles', () => {
    const container = render(<Row />, { wrapper }).container.firstChild;
    expect(container).toHaveStyleRule('display', 'flex');
    expect(container).toHaveStyleRule('flex-wrap', 'wrap');
    expect(container).toHaveStyleRule('margin', '-8px');
  });

  it('Column has correct styles', () => {
    const container = render(<Col />, { wrapper }).container.firstChild;
    expect(container).toHaveStyleRule('padding', '0px');
  });
});

let timeout;
clearTimeout(timeout);
