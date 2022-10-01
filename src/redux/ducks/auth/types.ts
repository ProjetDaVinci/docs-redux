export type AuthData = {
  id: number;
  login: number;
  status: string;
  success: number;
  title: string;
  token: string;
  name: string;
};

export type getTokenData = {
  phone: string;
  code: string;
};

export type getTokenResponse = {
  code: number;
  status: string;
  message: AuthData;
  timestamp: number;
};
