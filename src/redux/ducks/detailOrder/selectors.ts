import {createSelector} from '@reduxjs/toolkit';
import {rootState} from '../../store';

export const getOrder = (state: rootState) => state.detailOrder;

export const selectTotalPrice = () =>
  createSelector(getOrder, state => {
    return state.basket.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0,
    );
  });
