export type timeRestaurantsItem = {
  deliveryTime: string[];
  pickupTime: string[];
};

export type TimeRestaurantsRes = {
  status: string;
  code: number;
  message: timeRestaurantsItem;
  timestamp: number;
};
