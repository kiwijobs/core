import { SXProp } from '../../quarks';

export const Primary: Partial<SXProp> = {
  fontScale: 3,
  fontWeight: 'bold',
  textTransform: 'uppercase',
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
