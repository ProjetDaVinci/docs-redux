import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  CurrentProductItemChange,
  CurrentProductState,
  ModalProduct,
} from './types';

const initialState: CurrentProductState = {
  item: {
    alert: '',
    description: '',
    id: 0,
    name: '',
    price: 0,
    count: 0,
    img: '',
  },
  modalVisible: false,
} as CurrentProductState;

const changeAuthSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    changeItemProduct(state, {payload}: PayloadAction<ModalProduct>) {
      if (payload) {
        state.item = payload;
      }
      return state;
    },
    openModalVisible(state) {
      state.modalVisible = true;
      return state;
    },
    closeModalVisible(state) {
      state.modalVisible = false;
      return state;
    },
  },
});

const actions = {...changeAuthSlice.actions};
const reducer = changeAuthSlice.reducer;

export {actions, reducer};
