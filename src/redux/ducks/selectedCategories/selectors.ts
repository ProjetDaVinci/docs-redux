import {rootState} from '../../store';

export const selectCategory = (state: rootState) => state.selectedCategories;

// export const selectAdress = (state: rootState) => state.auth.user;
// export const selectEmail = (state: rootState) =>
//   state.auth.user && state.auth.user.email;

// export const selectUserId = (state: rootState) => state.auth.user.id;
