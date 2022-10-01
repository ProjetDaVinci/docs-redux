import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getOneOrders} from './thunks';
import {DetailOrderRes, DetailOrderState} from './types';

const initialState: DetailOrderState = {
  id: -1,
  date: '',
  status: '',
  address: '',
  basket: [],
  order_total: -1,
  deliveryType: 'Доставка',
} as DetailOrderState;

const detailOrderSlice = createSlice({
  name: 'detailOrder',
  initialState,
  reducers: {
    changeDetail(state, {payload}: PayloadAction<DetailOrderState>) {
      if (payload) {
        state = payload;
        return state;
      }
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getOneOrders.fulfilled,
      (state, {payload}: PayloadAction<DetailOrderRes>) => {
        if (payload) {
          state = payload.message;
          return state;
        }
      },
    );
  },
});

const actions = {...detailOrderSlice.actions};
const reducer = detailOrderSlice.reducer;

export {actions, reducer};
