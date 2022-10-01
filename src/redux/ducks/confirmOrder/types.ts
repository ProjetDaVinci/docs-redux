export type ResponseType = {
  code: number;
  status: string;
  message: {
    success: boolean;
    orderId: number;
  };
  timestamp: number;
};
