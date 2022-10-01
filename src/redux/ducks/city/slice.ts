import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getCurentCity, getList} from './thunks';
import {ProductsData} from '../products/types';
import {CitiesItem, CitiesRes, CitiesState, CurrentCity} from './types';

const initialState: CitiesState = {
  cities: [],
  selectedId: 8,
  current: {
    id: -1,
    name: '',
    phone: '',
    email: '',
    schedule: '',
    coords: {
      lat: -1,
      long: -1,
    },
    min_order_price: -1,
  },
} as unknown as CitiesState;

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeSelectedId(state, {payload}: PayloadAction<number>) {
      if (payload) {
        state.selectedId = payload;
        return state;
      }
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<CitiesRes>) => {
        if (payload) {
          state.cities = payload.message;
          return state;
        }
      },
    );
    builder.addCase(
      getCurentCity.fulfilled,
      (state, {payload}: PayloadAction<CurrentCity>) => {
        if (payload) {
          state.current = payload;

          return state;
        }
      },
    );
  },
});

const actions = {...citySlice.actions};
const reducer = citySlice.reducer;

export {actions, reducer};
