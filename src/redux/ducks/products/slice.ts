import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsData, ProductsRes, StateData} from './types';
import {getList} from './thunks';

const initialState: StateData = {
  products: [],
  isPending: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<ProductsRes>) => {
        if (payload) {
          state.products = payload.message;
          return state;
        }
      },
    );
    builder.addCase(getList.pending, state => {
      state.isPending = true;
    });
  },
});

const actions = {...productsSlice.actions};
const reducer = productsSlice.reducer;

export {actions, reducer};
