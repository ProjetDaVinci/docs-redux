import {ImageSourcePropType} from 'react-native';

export type CartItems = {
  product_id: number;
  quantity: number;
  name: string;
  base_price: number;
  img: string;
  alert?: string;
};

export type CartItemsReq = {
  product_id: number;
  quantity: number;
  name: string;
  base_price: number;
};

export type CartItemsChange = {
  id: number;
  title: string;
  price: number;
  img: string;
  count?: number;
  alert: string;
};

export type CartTypes = {
  cityId: number;
  name: string;
  phone: string;
  deliveryType: 'pickup' | 'delivery';
  paymentMethod: string;
  deliveryTime: string;
  pickupBarName: string;
  comment: string;
  promocode: string;
  products: CartItems[];
  confirmOrder: {
    success: boolean;
    orderId?: number;
    message?: string;
  };
  check_basket: {
    delivery_price: number;
    gift_items: TypeGifts[];
  };
  isPending: boolean;
};

export type ResponseType = {
  code: number;
  status: string;
  message: {
    success: boolean;
    orderId: number;
  };
  timestamp: number;
};

export type ResponseToCheckBaskets = {
  code: number;
  status: string;
  message: {
    products: ResponseProductsItem[];
    delivery_price: number;
    gift_type: string;
    gift_items: TypeGifts[];
    total_amount: number;
  };
  timestamp: number;
};

export type ResponseProductsItem = {
  product_id: number;
  quantity: number;
  name: string;
  base_price: number;
  preview_picture: string;
  alert: string;
  product_category: string;
};

export type TypeGifts = {
  id: number;
  name: string;
  sort: number;
  preview_picture: string;
  detail_picture: string;
  preview_text: string;
  detail_text: string;
  price: number;
  categoryId: number;
};
