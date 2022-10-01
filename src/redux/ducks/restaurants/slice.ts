import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RestaurantsData, Restaurantsitem, RestaurantsState} from './types';
import {getList} from './thunks';
const initialState: RestaurantsState = {
  message: [],
  searchText: '',
} as RestaurantsState;

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    searchItem(state, {payload}: PayloadAction<string>) {
      state.searchText = payload;
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<RestaurantsData>) => {
        state.message = payload.message;
        return state;
      },
    );
  },
});

const actions = {...restaurantsSlice.actions};
const reducer = restaurantsSlice.reducer;

export {actions, reducer};
