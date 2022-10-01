import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getListStories = createAsyncThunk(
  "/stories-getList-stories",
  async () => {
    const { data }: AxiosResponse = await http.get(`/stories`);
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
