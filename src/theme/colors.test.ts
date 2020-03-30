import * as c from './colors';

describe('colors', () => {
  it('Has defined "rbg" colors', () => {
    expect(c.rgb).toMatchSnapshot();
  });

  it('Has defined colors for "styled-system"', () => {
    expect(c.colors).toMatchSnapshot();
  });

  it('Has working "rgba" function', () => {
    expect(typeof c.rgba).toBe('function');
    expect(c.rgba(0.4).dark).toEqual('rgba(0, 0, 0, 0.4)');
    expect(c.rgba().primary).toEqual('rgba(8, 191, 130, 1)');
  });
});

