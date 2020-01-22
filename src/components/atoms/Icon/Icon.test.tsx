import React from 'react';
import { render } from '@testing-library/react';
import { wrapper } from '../../../__testUtils__';
import { Icon } from './Icon';
import * as icons from './icons';

describe('Icon', () => {
  it('Renders icon by name', () => {
    const array = Object.keys(icons) as Array<keyof typeof icons>;
    array.forEach(name => {
      expect(render(<svg>{icons[name].jsx}</svg>).container).toMatchSnapshot();
    });
  });

  it('Should render icon correctly', () => {
    const array = Object.keys(icons) as Array<keyof typeof icons>;
    array.forEach(name => {
      const { firstElementChild } = render(<Icon name={name} />).container;
      expect(firstElementChild!.tagName).toBe('svg');
      expect(firstElementChild).toHaveStyleRule('width', '2.4rem');
      expect(firstElementChild).toHaveStyleRule('height', '2.4rem');
      expect(firstElementChild).toHaveStyleRule('flex', '0 0 auto');
    });
  });

  it('Should render icon direction correctly', () => {
    const array = Object.keys(icons) as Array<keyof typeof icons>;
    array.forEach(name => {
      const { firstElementChild } = render(<Icon name={name} />).container;
      expect(firstElementChild!.tagName).toBe('svg');
      expect(firstElementChild).not.toHaveStyleRule('transform');
    });
    array.forEach(name => {
      const { firstElementChild } = render(<Icon name={name} direction="UP" />).container;
      expect(firstElementChild!.tagName).toBe('svg');
      expect(firstElementChild).not.toHaveStyleRule('transform');
    });
    array.forEach(name => {
      const { firstElementChild } = render(<Icon name={name} direction="RIGHT" />).container;
      expect(firstElementChild!.tagName).toBe('svg');
      expect(firstElementChild).toHaveStyleRule('transform', 'rotate(90deg)');
    });
    array.forEach(name => {
      const { firstElementChild } = render(<Icon name={name} direction="DOWN" />).container;
      expect(firstElementChild!.tagName).toBe('svg');
      expect(firstElementChild).toHaveStyleRule('transform', 'rotate(180deg)');
    });
    array.forEach(name => {
      const { firstElementChild } = render(<Icon name={name} direction="LEFT" />).container;
      expect(firstElementChild!.tagName).toBe('svg');
      expect(firstElementChild).toHaveStyleRule('transform', 'rotate(-90deg)');
    });
  });

  it('Warns if no icon', () => {
    console.warn = jest.fn();

    expect(
      render(<Icon name={'ThereShouldBeNoIconWithThatName' as any} />, { wrapper }).container
        .firstElementChild
    ).toBeNull();
    expect(console.warn).toBeCalledTimes(1);
  });
});
