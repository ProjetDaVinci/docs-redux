import { login } from "./../auth/thunks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';
import { rootState } from "../../store";

export const getList = createAsyncThunk(
  "/products-get-list",
  async (selectedId?: number) => {
    const { data }: AxiosResponse = await http.get(`/products`, {
      params: { cityId: selectedId || 8 },
    });
    return data;
  }
);
