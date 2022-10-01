import { login } from "./../auth/thunks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';

export const getList = createAsyncThunk(
  "saved_addresses-/users/saved_addresses",
  async () => {
    const { data }: AxiosResponse = await http.get(`/users/saved_addresses`);

    return data;
  }
);
