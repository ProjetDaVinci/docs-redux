import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsData, ProductsRes} from './types';
import {getList} from './thunks';

const initialState: ProductsData[] = [] as ProductsData[];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<ProductsRes>) => {
        if (payload) {
          state = payload.message;
          return state;
        }
      },
    );
  },
});

const actions = {...productsSlice.actions};
const reducer = productsSlice.reducer;

export {actions, reducer};
