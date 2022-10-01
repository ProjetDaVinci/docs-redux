export type Orders = {
  code: number;
  status: string;
  message: {
    info: {
      count_select: number;
      count_all: number;
    };
    data: OrdersData[];
  };
};
export type OrdersData = {
  id: number;
  price: string;
  date: string;
  status: string;
};
