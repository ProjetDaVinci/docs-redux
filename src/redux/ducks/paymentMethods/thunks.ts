import { login } from "./../auth/thunks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getList = createAsyncThunk(
  "/cities/getPaymentMethods",
  async () => {
    const { data }: AxiosResponse = await http.get(`/cities/getPaymentMethods`);
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
