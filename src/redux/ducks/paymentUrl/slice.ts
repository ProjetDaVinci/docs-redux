import {createSlice, isPending, PayloadAction} from '@reduxjs/toolkit';
import {getUrl} from './thunks';
import {paymentUrl, paymentUrlRes} from './types';

const initialState: paymentUrl = {
  orderId: '',
  formUrl: '',
  merchantOrderParams: [],
  success_payment_url: '',
  failed_payment_url: '',
} as paymentUrl;

const paymentUrlSlice = createSlice({
  name: 'paymentUrl',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getUrl.fulfilled,
      (state, {payload}: PayloadAction<paymentUrlRes>) => {
        if (payload) {
          state = payload.message;
          return state;
        }
      },
    );
  },
});

const actions = {...paymentUrlSlice.actions};
const reducer = paymentUrlSlice.reducer;

export {actions, reducer};
