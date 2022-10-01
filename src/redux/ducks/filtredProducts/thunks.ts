import { login } from "./../auth/thunks";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';
import { rootState } from "../../store";
import { ProductsData, ProductsRes, State } from "./types";
import { CategoriesRes } from "../categories/types";

export const getFiltredProducts = createAsyncThunk(
  "/products-and-categories-get-list",
  async (selectedId?: number) => {
    let massivchik: State[] = [];

    const { data }: AxiosResponse = await http.get(`/products`, {
      params: { id: selectedId || 8 },
    });

    const responseProducts: ProductsRes = data;

    if (responseProducts) {
      const { data }: AxiosResponse = await http.get(`/categories`);
      const responseCategory: CategoriesRes = data;

      responseCategory.message.map((item) => {
        const mass = responseProducts.message.filter(
          (value) => value.categoryId === item.ID
        );
        const obj = { title: item.NAME, data: mass };
        massivchik.push(obj);
      });
    }
    return massivchik;
  }
);
