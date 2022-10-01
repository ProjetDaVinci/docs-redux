import { login } from "./../auth/thunks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';
import { rootState } from "../../store";
import { ProductsItem } from "./types";

export const getList = createAsyncThunk(
  "/orders/apply_promocode/apply/promocode",
  async (promocode: string, { getState }) => {
    const { cart } = getState() as rootState;
    const products: ProductsItem[] = [];

    cart.products.map((item) => {
      const obj = {
        product_id: item.product_id,
        quantity: item.quantity,
        name: item.name,
        base_price: item.base_price,
      };

      products.push(obj);
    });

    const { data }: AxiosResponse = await http.post("/orders/apply_promocode", {
      promocode: promocode,
      products: products,
    });

    return data;
  }
);

// export const getToken = createAsyncThunk(
//   'client/code',
//   async (tokenData: getTokenData) => {
//     const {data}: AxiosResponse = await http.post(`client/code`, tokenData);
//     return data;
//   },
// );
