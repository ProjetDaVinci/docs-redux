import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';
import { getTokenData } from "./types";

export const login = createAsyncThunk(
  "/auth/code-request",
  async (phone: string) => {
    const { data }: AxiosResponse = await http.get(`/auth/code-request/`, {
      params: { phone: phone },
    });
    return data;
  }
);

export const getToken = createAsyncThunk(
  "/auth/code-check/",
  async (tokenData: getTokenData) => {
    const { data }: AxiosResponse = await http.get(`/auth/code-check/`, {
      params: { phone: tokenData.phone, code: tokenData.code },
    });
    return data;
  }
);
