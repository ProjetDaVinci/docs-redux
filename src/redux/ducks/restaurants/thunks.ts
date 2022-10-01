import { login } from "./../auth/thunks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getList = createAsyncThunk(
  "/cities/restaurants-list",
  async (selectedId: number) => {
    const { data }: AxiosResponse = await http.get(`/cities/restaurants`, {
      params: { id: selectedId || 8 },
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
