import { login } from "./../auth/thunks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getUrl = createAsyncThunk(
  "/payment_url?orderId=1657",
  async (orderId: number) => {
    const { data }: AxiosResponse = await http.get(`/payment_url`, {
      params: { orderId: orderId },
    });
    // console.log('data URL PAYMENT', data);

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
