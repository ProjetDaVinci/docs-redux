import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddressDelivery} from './types';

const initialState: AddressDelivery = {
  street: '',
  house: '',
  entrance: '',
  floar: '',
  flat: '',
} as AddressDelivery;

const detailOrderSlice = createSlice({
  name: 'deliveryAddress',
  initialState,
  reducers: {
    changeStreet(state, {payload}: PayloadAction<string>) {
      if (payload) {
        state.street = payload;
      }
      return state;
    },

    changeState(state, {payload}: PayloadAction<AddressDelivery>) {
      if (payload) {
        state = payload;
        return state;
      }
      return state;
    },
    clearAddress(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: builder => {},
});

const actions = {...detailOrderSlice.actions};
const reducer = detailOrderSlice.reducer;

export {actions, reducer};
