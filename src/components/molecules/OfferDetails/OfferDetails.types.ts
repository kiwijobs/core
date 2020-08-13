import { BoxProps } from '../../quarks';

export interface IOfferProps {
  calculated_distance?: number | null;
  positionName: string;
  address: string;
  publishedAt: string;
  endDate: string;
  images: {
    id: number;
    imageSlug: string;
  }[];
  company: {
    imageSlug: string;
    logo: string;
    name: string;
    isGoodCompany: boolean;
    clause: string;
  };
  requiredHourlyRate: boolean;
  minPayment: number;
  maxPayment: number;
  brand: { name: string; imageSlug: string; logo: string };
  contactNumber: string;
  chatAvailability: boolean;
  cityId: number;
  onlineRecruitment: boolean;
  candyWebPath: string;
  financialBonuses: {
    id: number;
    name: string;
  }[];
  workingTimes: {
    id: number;
    name: string;
  }[];
  description: string;
  benefits: {
    id: number;
    name: string;
  }[];
  employmentForms: {
    id: number;
    name: string;
  }[];
  userApplication?: {
    createdAt: string;
    meeting: {
      type: string;
    };
  };
  parsedImages?: {
    defaultImage: string;
    extendedImage?: string;
  };
}

export interface IOfferDetailsProps extends BoxProps {
  offer: IOfferProps;
  offerExpired?: boolean;
  onMapClick?(): void;
  onOnlineRecruitmentClick?: () => void;
  dateDescription: string | JSX.Element;
  chatComponent?: JSX.Element
}

export const MEETING_ENUM = {
  default: 'DEFAULT',
  videoCall: 'VIDEO_CALL',
  phoneCall: 'PHONE_CALL',
};
