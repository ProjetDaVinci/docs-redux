export type OneHistoryItem = {
  id: number;
  date: string;
  status: string;
  address: string;
  basket: BasketsItem[];
  order_total: number;
};

export type BasketsItem = {
  product_id: number;
  name: string;
  quantity: number;
  price: number;
  base_price: number;
  image: string;
};

export type OneHistoryesRes = {
  code: number;
  status: string;
  message: OneHistoryItem;
  timestamp: number;
};
