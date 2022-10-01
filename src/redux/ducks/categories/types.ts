export type CategoriesItems = {
  ID: number;
  CODE: string;
  NAME: string;
};

export type CategoriesRes = {
  status: string;
  code: number;
  message: CategoriesItems[];
};

export type CategoriesState = {
  categories: CategoriesItems[];
  isPending: boolean;
};
