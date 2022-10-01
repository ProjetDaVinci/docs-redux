export type ProductsData = {
  id: number;
  name: string;
  sort: number;
  preview_picture: string;
  detail_picture: string;
  preview_text: string;
  detail_text: string;
  price: number;
  category: {
    id: number;
    name: string;
    code: string;
  };
  categoryId: number;
  alert: string;
};

export type ProductsRes = {
  status: string;
  code: number;
  message: ProductsData[];
  isPending: boolean;
};

export type StateData = {
  products: ProductsData[];
  isPending: boolean;
};

export type State = {
  title: string;
  data: ProductsData[];
};
