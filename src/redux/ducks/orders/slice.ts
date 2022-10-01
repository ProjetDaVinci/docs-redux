import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getList} from './thunks';
import {Orders, OrdersData} from './types';

const initialState: OrdersData[] = [] as OrdersData[];

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    changeOrders(state, {payload}: PayloadAction<OrdersData[]>) {
      if (payload) {
        state = payload;
        return state;
      }

      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<Orders>) => {
        if (payload) {
          state = payload.message.data;
          return state;
        }
      },
    );
  },
});

const actions = {...ordersSlice.actions};
const reducer = ordersSlice.reducer;

export {actions, reducer};
