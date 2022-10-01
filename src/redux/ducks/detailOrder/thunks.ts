import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getOneOrders = createAsyncThunk(
  "/orders-getOne",
  async (id: number) => {
    const { data }: AxiosResponse = await http.get(`/orders/${id}`);

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
