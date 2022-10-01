export type DetailOrderItem = {
  product_id: number;
  name: string;
  quantity: number;
  price: number;
  base_price: number;
  image: string;
};

export type DetailOrderRes = {
  code: number;
  status: string;
  message: DetailOrderState;
  timestamp: number;
};

export type DetailOrderState = {
  // reduce(arg0: (sum: any, current: any) => any, arg1: number): any;
  id: number;
  date: string;
  status: string;
  address: string;
  basket: DetailOrderItem[];
  order_total: number;
  deliveryType: 'Самовывоз' | 'Доставка';
};
