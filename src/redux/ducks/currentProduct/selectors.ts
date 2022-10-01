import {rootState} from '../../store';

export const selectCurrentProduct = (state: rootState) => state.currentProduct;

// export const selectAdress = (state: rootState) => state.auth.user;
// export const selectEmail = (state: rootState) =>
//   state.auth.user && state.auth.user.email;

// export const selectUserId = (state: rootState) => state.auth.user.id;
