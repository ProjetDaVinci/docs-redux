import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import build from 'react-native-yamap';

import {ProductsData} from '../products/types';
import {
  checkBasketsUsers,
  createOrderDelivery,
  createOrderPickup,
} from './thunks';
import {
  CartItems,
  CartItemsChange,
  CartTypes,
  ResponseToCheckBaskets,
  ResponseType,
} from './types';

const initialState: CartTypes = {
  cityId: 8,
  name: '',
  phone: '',
  deliveryType: 'pickup',
  paymentMethod: '',
  deliveryTime: '',
  pickupBarName: '',
  comment: '',
  promocode: '',
  products: [],
  confirmOrder: {success: false, orderId: -1, message: ''},
  check_basket: {
    delivery_price: 0,
    gift_items: [],
  },
  isPending: false,
} as CartTypes;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearState(state, payload) {
      if (payload) state = initialState;
      return state;
    },

    clearConfirm(state, payload) {
      if (payload) state.confirmOrder = initialState.confirmOrder;
      return state;
    },
    clearStateToAlert(state, payload) {
      if (payload) {
        let mass: CartItems[] = [];
        const findNoAlert = state.products.map(product => {
          if (product.alert !== 'Только самовывоз') {
            mass.push(product);
          }
        });
        if (findNoAlert) {
          state.products = mass;
        }

        // for (var key = 0; key < state.products.length - 1; key++) {
        //   const dele = state.products.findIndex(
        //     el => el.alert === 'Только самовывоз',
        //   );

        //   }
        // }
        return state;
      }
      return state;
    },
    addItem(state, {payload}: PayloadAction<CartItemsChange>) {
      if (payload) {
        const find = state.products.find(el => el.product_id === payload.id);
        if (find) {
          //       // если нашёл то приплюсовать количество
          find.quantity++;
        } else {
          // если не нашёл то добавить
          let obj: CartItems = {
            product_id: payload.id,
            quantity: 1,
            name: payload.title,
            base_price: payload.price,
            img: payload.img,
            alert: payload.alert,
          };
          state.products.push(obj);
        }
      }
      return state;
    },

    removeItem(state, {payload}: PayloadAction<number>) {
      if (payload) {
        const findRemoveItem = state.products.findIndex(
          el => el.product_id === payload,
        );

        if (
          findRemoveItem !== -1 &&
          state.products[findRemoveItem].quantity === 1
        ) {
          state.products.splice(findRemoveItem, 1);
          return state;
        } else if (findRemoveItem !== -1) {
          state.products[findRemoveItem].quantity--;
        }
      }
      return state;
    },

    addCountItem(state, {payload}: PayloadAction<CartItemsChange>) {
      if (payload) {
        const find = state.products.find(el => el.product_id === payload.id);

        if (!find && payload.count) {
          // если не нашёл то добавить
          let obj: CartItems = {
            product_id: payload.id,
            quantity: payload.count,
            name: payload.title,
            base_price: payload.price,
            img: payload.img,
            alert: payload.alert,
          };
          state.products.unshift(obj);
        }
      }
      return state;
    },
    changePlusItem(state, {payload}: PayloadAction<number>) {
      if (payload) {
        const findItem = state.products.findIndex(
          el => el.product_id === payload,
        );
        if (findItem !== -1) {
          state.products[findItem].quantity++;
        }
      }
      return state;
    },
    changeTime(state, {payload}: PayloadAction<string>) {
      if (payload) {
        state.deliveryTime = payload;
      }
      return state;
    },
    changeType(state, {payload}: PayloadAction<'pickup' | 'delivery'>) {
      if (payload) {
        state.deliveryType = payload;
        return state;
      }
      return state;
    },
    changeBar(state, {payload}: PayloadAction<string>) {
      if (payload === ' ') {
        state.pickupBarName = initialState.pickupBarName;
      } else if (payload) {
        state.pickupBarName = payload;
      }
      return state;
    },
    changeName(state, {payload}: PayloadAction<string>) {
      if (payload) {
        state.name = payload;
      }
      return state;
    },
    changeComment(state, {payload}: PayloadAction<string>) {
      if (payload) {
        state.comment = payload;
      }
      return state;
    },

    changePaymenthMethod(state, {payload}: PayloadAction<string>) {
      if (payload) {
        state.paymentMethod = payload;
      }
      return state;
    },
    changePromocode(state, {payload}: PayloadAction<string>) {
      if (payload) {
        state.promocode = payload;
        return state;
      }
      return state;
    },
    deletePromocode(state) {
      state.promocode = initialState.promocode;
      return state;
    },
    repeatOrder(state, {payload}: PayloadAction<CartItems[]>) {
      if (payload) {
        state.products = payload;
        return state;
      }
      return state;
    },
    removeItemForDelivery(state, {payload}: PayloadAction<number>) {
      if (payload) {
        const findRemoveItem = state.products.findIndex(
          el => el.product_id === payload,
        );

        if (
          findRemoveItem !== -1 &&
          state.products[findRemoveItem].alert === 'Только самовывоз'
        ) {
          state.products.splice(findRemoveItem, 1);
          return state;
        }
      }
      return state;
    },
    removeGift(state, {payload}: PayloadAction<number>) {
      if (payload) {
        const findRemoveItem = state.products.findIndex(
          el => el.product_id === payload,
        );
        state.products.splice(findRemoveItem, 1);
        return state;
      }
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      createOrderPickup.fulfilled,
      (state, {payload}: PayloadAction<ResponseType>) => {
        if (payload) {
          state.confirmOrder = payload.message;
        }
        return state;
      },
    );
    builder.addCase(
      createOrderDelivery.fulfilled,
      (state, {payload}: PayloadAction<ResponseType>) => {
        if (payload) {
          state.confirmOrder = payload.message;
        }
        return state;
      },
    );
    builder.addCase(createOrderDelivery.pending, state => {
      state.isPending = true;
    });
    builder.addCase(createOrderPickup.pending, state => {
      state.isPending = true;
    });
    builder.addCase(
      checkBasketsUsers.fulfilled,
      (state, {payload}: PayloadAction<ResponseToCheckBaskets>) => {
        if (payload) {
          state.check_basket.gift_items = payload.message.gift_items;
          state.check_basket.delivery_price = payload.message.delivery_price;
        }
        return state;
      },
    );
  },
});

const actions = {...cartSlice.actions};
const reducer = cartSlice.reducer;

export {actions, reducer};
