import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getListCategories = createAsyncThunk(
  "/categories-get",
  async () => {
    const { data }: AxiosResponse = await http.get(`/categories`);
    return data;
  }
);
