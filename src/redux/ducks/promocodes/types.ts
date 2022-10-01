export type PromocodeType = {
  promocode: string;
  products: ProductsItem[];
};
export type ProductsItem = {
  product_id: number;
  quantity: number;
  name: string;
  base_price: number;
};

export type PromocodeItem = {
  dev_response: string;
  response: string;
  success: boolean;
};

export type ConfirmOrderRes = {
  code: number;
  status: string;
  message: PromocodeItem
  timestamp: number;
};


