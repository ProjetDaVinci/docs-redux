import {rootState} from '../../store';

export const selectAuthData = (state: rootState) => state.auth;

export const selectToken = (state: rootState) => state.auth.token;

// export const selectAdress = (state: rootState) => state.auth.user;
// export const selectEmail = (state: rootState) =>
//   state.auth.user && state.auth.user.email;

// export const selectUserId = (state: rootState) => state.auth.user.id;
