import get from 'lodash/get';
import { IOfferProps } from './OfferDetails.types';

export const getEmployerLogo = ({ company, brand }: IOfferProps) =>
  get(brand, 'logo') || company.logo;
export const getEmployerName = ({ company, brand }: IOfferProps) =>
  get(brand, 'name') || company.name;

export const formatPayment = ({ minPayment, maxPayment }: IOfferProps) => {
  if (minPayment === 0) {
    return 'Do uzgodnienia';
  }
  if (!minPayment) {
    return '';
  }
  return `${minPayment}${maxPayment ? `-${maxPayment}` : ''} zł/godz. brutto`;
};

export const formatDistance = (distance: number) => String(distance?.toFixed(1))?.replace('.', ',');

export const formatClause = (str: string) =>
  str &&
  str.replace(/\[(.*)\]\((.*)\)/, '<a target="_blank" rel="noopener noreferrer" href="$2">$1</a>');
