export type SaveAddressRes = {
  code: number;
  status: string;
  message: SaveAddressItem[];
  timestamp: number;
};
export type SaveAddressItem = {
  address: string;
  street: string;
  house: number;
  entrance: number;
  floor: number;
  flat: number;
};
