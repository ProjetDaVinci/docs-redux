export type CitiesItem = {
  id: number;
  name: string;
  phone: string;
  email: string;
  worktime: string;
  instagram_link: string;
  vk_link: string;
};

export type CitiesRes = {
  code: string;
  status: string;
  message: CitiesItem[];
  timestamp: number;
};

export type CitiesState = {
  cities: CitiesItem[];
  selectedId: number;
  current: CurrentCity;
};

export type CurrentCity = {
  id: number;
  name: string;
  phone: string;
  email: string;
  schedule: string[];
  delivery_methods: DeliveryMethods;
  coords: {
    lat: number;
    long: number;
  };
  min_order_price: number;
};
export type DeliveryMethods = {
  id: number;
  name: string;
};
