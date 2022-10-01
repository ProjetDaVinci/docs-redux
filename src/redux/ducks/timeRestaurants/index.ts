import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {timeRestaurantsItem, TimeRestaurantsRes} from './types';
import {getList} from './thunks';

const initialState: timeRestaurantsItem = {
  deliveryTime: [],
  pickupTime: [],
} as timeRestaurantsItem;

const timeRestaurantsSlice = createSlice({
  name: 'timeRestaurants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<TimeRestaurantsRes>) => {
        if (payload) {
          state = payload.message;
          return state;
        }
      },
    );
  },
});

const actions = {...timeRestaurantsSlice.actions};
const reducer = timeRestaurantsSlice.reducer;

export {actions, reducer};
