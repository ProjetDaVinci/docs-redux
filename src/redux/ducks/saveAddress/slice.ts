import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getList} from './thunks';
import {SaveAddressItem, SaveAddressRes} from './types';
const initialState: SaveAddressItem[] = [] as SaveAddressItem[];

const saveAddressSlice = createSlice({
  name: 'saveAddress',
  initialState,
  reducers: {
    changeAddress(state, {payload}: PayloadAction<SaveAddressItem[]>) {
      if (payload) {
        state = payload;
        return state;
      }
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getList.fulfilled,
      (state, {payload}: PayloadAction<SaveAddressRes>) => {
        state = payload.message;
        return state;
      },
    );
  },
});

const actions = {...saveAddressSlice.actions};
const reducer = saveAddressSlice.reducer;

export {actions, reducer};
