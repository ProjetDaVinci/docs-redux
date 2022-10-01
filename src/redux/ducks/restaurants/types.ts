export type RestaurantsData = {
  code: number;
  status: string;
  message: Restaurantsitem[];
  timestamp: number;
};

export type RestaurantsState = {
  message: Restaurantsitem[];
  searchText?: string;
};

export type Restaurantsitem = {
  id: number;
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
  worktime: string;
};
