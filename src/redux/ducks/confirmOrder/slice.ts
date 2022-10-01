import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ResponseType} from './types';

const initialState: ResponseType[] = [];

const confirmOrder = createSlice({
  name: 'confirmOrder',
  initialState,
  reducers: {
    setOrder(state, {payload}: PayloadAction<ResponseType>) {
      if (payload) {
        state.push(payload);
      }

      return state;
    },
  },
});

const actions = {...confirmOrder.actions};
const reducer = confirmOrder.reducer;

export {actions, reducer};
