import {createSlice, isPending, PayloadAction} from '@reduxjs/toolkit';
import {getList} from './thunks';
import {PayMethodItem, PayMethodRes} from './types';

const initialState: PayMethodItem[] = [] as PayMethodItem[];

const paymentMethodsSlice = createSlice({
  name: 'paymentMethods',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<PayMethodRes>) => {
        if (payload) {
          state = payload.message;
          return state;
        }
      },
    );
  },
});

const actions = {...paymentMethodsSlice.actions};
const reducer = paymentMethodsSlice.reducer;

export {actions, reducer};
