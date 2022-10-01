import {createSelector} from '@reduxjs/toolkit';
import {rootState} from '../../store';

export const selectStateCart = (state: rootState) => state.cart;

export const selectTime = (state: rootState) => state.cart.deliveryTime;

export const selectCart = (state: rootState) => state.cart.products;

export const selectDelivery = (state: rootState) => state.cart.deliveryType;

export const selectAdress = (state: rootState) => state.cart.pickupBarName;

export const selectOrderConfirm = (state: rootState) => state.cart.confirmOrder;

export const checkBasket = (state: rootState) => state.cart.check_basket;

export const isPending = (state: rootState) => state.cart.isPending;

export const selectCountCard = (id: number) =>
  createSelector(selectCart, state => {
    const findItem = state.findIndex(el => el.product_id === id);
    if (findItem !== -1) {
      return state[findItem];
    }
  });

export const selectTotalPrice = () =>
  createSelector(selectCart, state => {
    return state.reduce(
      (sum, current) => sum + current.base_price * current.quantity,
      0,
    );
  });
