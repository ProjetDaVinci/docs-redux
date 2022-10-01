import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getList = createAsyncThunk("/orders", async () => {
  const { data }: AxiosResponse = await http.get(`/orders`);

  return data;
});
