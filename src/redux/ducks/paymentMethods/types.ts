import {ImageSourcePropType} from 'react-native';

export type PayMethodItem = {
  id: number;
  name: string;
  image: string | null;
  order_total_from?: number;
  order_total_to: number;
};

export type PayMethodRes = {
  code: number;
  status: string;
  message: PayMethodItem[];
};
