export type HistoryItem = {
  id: number;
  price: string;
  date: string;
  status: string;
};

export type HistorysRes = {
  code: number;
  status: string;
  message: {
    info: {
      count_select: number;
      count_all: number;
    };
    data: HistoryItem[];
  };
  timestamp: number;
};
