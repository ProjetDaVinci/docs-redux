import {createSlice, isPending, PayloadAction} from '@reduxjs/toolkit';
import {
  ConfirmOrderRes,
  ProductsItem,
  PromocodeItem,
  PromocodeType,
} from './types';
import {getList} from './thunks';

const initialState: PromocodeItem = {
  dev_response: '',
  response: '',
  success: false,
} as PromocodeItem;

const promocodeSlice = createSlice({
  name: 'promocodes',
  initialState,
  reducers: {
    // clearState(state, {payload}: PayloadAction<[]>) {
    //   if (payload) {
    //     state = initialState;
    //     return state;
    //   }
    // },
    clearState(state) {
      state.dev_response = '';
      state.response = '';
      state.success = false;
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<ConfirmOrderRes>) => {
        state = payload.message;
        return state;
      },
    );
  },
});

const actions = {...promocodeSlice.actions};
const reducer = promocodeSlice.reducer;

export {actions, reducer};
