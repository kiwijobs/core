import { SXProp } from '../../quarks';

export const Primary: Partial<SXProp> = {
  fontScale: 3,
  fontWeight: 'bold',
  py: 2,
  px: 6,
  minWidth: '14rem',
  bg: 'primary',
  color: 'white',
  borderRadius: '2rem',

  '&:hover': { bg: 'primary.90' },
  '&:disabled': { bg: 4, color: 2 },
};

export const Secondary: Partial<SXProp> = {
  ...Primary,
  bg: 'white',
  color: 2,

  '&:hover': { color: 1 },
  '&:disabled': { color: 3 },
};

export const Ghost: Partial<SXProp> = {
  ...Secondary,
  color: 1,
  border: 1,
  borderColor: 4,

  '&:hover': { borderColor: 1 },
  '&:disabled': { color: 2 },
};

export const Link: Partial<SXProp> = {
  display: 'inline',

  '&:hover': { textDecoration: 'underline' },
  '&:disabled': { color: 3, pointerEvents: 'none' },
};

export const Text: Partial<SXProp> = {
  display: 'inline-block',
  color: '2',
  fontScale: 2,
  textTransform: 'uppercase',

  '&:hover': { color: '1' },
  '&:disabled': { color: '3' },
};
