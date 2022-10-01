import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getList = createAsyncThunk("/cities", async () => {
  const { data }: AxiosResponse = await http.get(`/cities`);
  return data;
});

export const getCurentCity = createAsyncThunk(
  "/current-get-city",
  async (cityId: number) => {
    const { data }: AxiosResponse = await http.get(`/cities/current`, {
      params: {
        cityId: cityId,
      },
    });
    return data.message;
  }
);
