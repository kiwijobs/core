import { forIn } from 'lodash';
import css, { SystemStyleObject } from '@styled-system/css';
import { BoxProps } from '../Reflexbox';
import { colorKeys, transform as transformColor } from './colors';
import { transformFontScale } from './fontScale';

type TValue = number | string;
type TSxObject = {
  [key: string]: TValue | TValue[];
};

const transformWithArrayCheck = (
  value: TValue | TValue[],
  transform: (value: string | number) => TValue
) => {
  if (Array.isArray(value)) {
    return value.map(x => transform(x));
  }

  return transform(value);
};

export const sx = (props: BoxProps) => {
  const sx = { ...props.sx } as TSxObject;

  if (sx.fontScale) {
    sx.font = transformWithArrayCheck(sx.fontScale, v =>
      transformFontScale(props)(v, props.theme?.fontScales)
    );
    delete sx.fontScale;
  }

  forIn(sx, (value, key) => {
    if (colorKeys.includes(key)) {
      sx[key] = transformWithArrayCheck(value, v => transformColor(v, props.theme?.colors));
    }
  });

  return css(sx as SystemStyleObject)(props.theme);
};
