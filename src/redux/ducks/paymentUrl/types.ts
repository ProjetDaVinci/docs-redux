import {ImageSourcePropType} from 'react-native';

export type paymentUrl = {
  orderId: string;
  formUrl: string;
  merchantOrderParams: any[];
  success_payment_url: string;
  failed_payment_url: string;
};

export type paymentUrlRes = {
  code: number;
  status: string;
  message: paymentUrl;
  timestamp: number;
};
