import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CategoriesItems, CategoriesRes, CategoriesState} from './types';
import {getListCategories} from './thunks';

const initialState: CategoriesState = {
  categories: [],
  isPending: false,
} as CategoriesState;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getListCategories.fulfilled,
      (state, {payload}: PayloadAction<CategoriesRes>) => {
        if (payload) {
          state.categories = payload.message;
          return state;
        }
      },
    );
    builder.addCase(getListCategories.pending, state => {
      state.isPending = true;
    });
  },
});

const actions = {...categoriesSlice.actions};
const reducer = categoriesSlice.reducer;

export {actions, reducer};
