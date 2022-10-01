import {ImageSourcePropType} from 'react-native';

export type ModalProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  img?: string;
  count?: number;
  alert: string;
};

export type CurrentProductItemChange = {
  id: number;
  title: string;
  description: string;
  price: number;
  img?: string;
  count?: number;
  alert: string;
};

export type CurrentProductState = {
  item: ModalProduct;
  modalVisible: boolean;
};
