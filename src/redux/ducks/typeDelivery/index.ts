import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {deliveryType} from './types';
/**
  // without type in @param and @return
  /**
   * this is method3.
   * @param n - this is param desc.
   * @return this is return desc. 
   */
/**
 *
 *
 * @class MainScreen
 * @extends {Component}
 */
const initialState: deliveryType = {
  deliveryType: 'pickup',
};

const deliveryTypeSlice = createSlice({
  name: 'typeDelivery',
  initialState,
  reducers: {
    setState(state, {payload}: PayloadAction<'pickup' | 'delivery'>) {
      if (payload) {
        const obj = {
          deliveryType: payload,
        };
        state = obj;
      }
      return state;
    },
  },
});

const actions = {...deliveryTypeSlice.actions};
const reducer = deliveryTypeSlice.reducer;

export {actions, reducer};
