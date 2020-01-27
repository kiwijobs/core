import React from 'react';

import { Text } from './Text';
import { render } from '@testing-library/react';
import { wrapper } from '../../__testUtils__';

describe('Text', () => {
  it('Should be a "span"', () => {
    const { container } = render(<Text />, { wrapper });

    expect(container.getElementsByTagName('span')).toHaveLength(1);
  });

  it('Should handle "Box" properties', () => {
    const { container } = render(<Text color="primary" as="h1" />, { wrapper });

    expect(container.getElementsByTagName('h1')).toHaveLength(1);
    expect(container.firstChild).toHaveStyleRule('color', 'rgb(8,191,130)');
  });
});
