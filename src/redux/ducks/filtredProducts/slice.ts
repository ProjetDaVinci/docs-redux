import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsData, ProductsRes, State, StateData} from './types';
import {getFiltredProducts} from './thunks';

const initialState: State[] = [] as State[];

const filtredProductsSlice = createSlice({
  name: 'filtredProducts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getFiltredProducts.fulfilled,
      (state, {payload}: PayloadAction<State[]>) => {
        if (payload) {
          state = payload;
          return state;
        }
      },
    );
    // builder.addCase(getList.pending, state => {
    //   state.isPending = true;
    // });
  },
});

const actions = {...filtredProductsSlice.actions};
const reducer = filtredProductsSlice.reducer;

export {actions, reducer};
