import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import {http} from '../../../services/http';
import DeliveryAddressDetail from "../../../view/components/DeliveryAddressDetail";
import { rootState } from "../../store";
import { CartItemsReq } from "./types";

export const createOrderPickup = createAsyncThunk(
  "/orders/create-pickup",
  async (_, { getState }) => {
    const { cart, auth, users } = getState() as rootState;
    const products: CartItemsReq[] = [];

    cart.products.map((item) => {
      const obj = {
        product_id: item.product_id,
        quantity: item.quantity,
        name: item.name,
        base_price: item.base_price,
      };
      products.push(obj);
    });

    const { data }: AxiosResponse = await http.post(`/orders/create`, {
      cityId: 8,
      name: cart.name,
      phone: `+7${auth.login}`,
      deliveryType: cart.deliveryType,
      paymentMethod: cart.paymentMethod,
      deliveryTime: cart.deliveryTime,
      pickupBarName: cart.pickupBarName,
      comment: cart.comment,
      promocode: cart.promocode,
      products: products,
    });

    return data;
  }
);

export const createOrderDelivery = createAsyncThunk(
  "delivery/orders/create-delivery",
  async (_, { getState }) => {
    const { cart, auth, users, deliveryAddress } = getState() as rootState;
    const products: CartItemsReq[] = [];

    cart.products.map((item) => {
      const obj = {
        product_id: item.product_id,
        quantity: item.quantity,
        name: item.name,
        base_price: item.base_price,
      };
      products.push(obj);
    });

    const { data }: AxiosResponse = await http.post(`/orders/create`, {
      cityId: 8,
      name: cart.name,
      phone: `+7${auth.login}`,
      deliveryType: cart.deliveryType,
      paymentMethod: cart.paymentMethod,
      deliveryTime: cart.deliveryTime,
      street: deliveryAddress.street,
      house: deliveryAddress.house,
      entrance: deliveryAddress.entrance,
      floor: deliveryAddress.floar,
      flat: deliveryAddress?.flat || 1,
      comment: cart.comment,
      promocode: cart.promocode,
      products: products,
    });

    return data;
  }
);

export const checkBasketsUsers = createAsyncThunk(
  "/users/check_basket",
  async (_, { getState }) => {
    const { cart } = getState() as rootState;
    const products: CartItemsReq[] = [];

    cart.products.map((item) => {
      const obj = {
        product_id: item.product_id,
        quantity: item.quantity,
        name: item.name,
        base_price: item.base_price,
      };
      products.push(obj);
    });

    const { data }: AxiosResponse = await http.post(`/users/check_basket`, {
      delivery_type: cart.deliveryType,
      products: products,
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
