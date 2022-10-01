export type UserData = {
  ID: number;
  LOGIN: number;
  ACTIVE: string;
  EMAIL: string;
  NAME: string;
  PERSONAL_BIRTHDAY: string;
  CITY: string;
  STREET: null;
  HOUSE: null;
  ENTRANCE: null;
  FLOOR: null;
  FLAT: null;
  BONUS_AMOUNT: number;
  MAX_BONUS_PAYMENT: number;
  BONUS_ACCUM_PERCENT: number;
  BONUS_LEVEL: number;
  BONUS_NEXT_LEVEL_ACCUM: number;
  BONUS_NEXT_LEVEL_BOUND: number;
  BONUS_NEXT_LEVEL_PERCENT: number;
  FAVORITES: any[];
};

export type setUserData = {
  name: string;
  email: string;
  birthday: string;
  phone: string;
};

export type getUserResponse = {
  code: number;
  status: string;
  message: UserData;
  timestamp: number;
};
