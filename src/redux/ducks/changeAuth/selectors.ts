import {rootState} from '../../store';

export const authenticator = (state: rootState) => state.changeAuth.isAuth;

// export const selectAdress = (state: rootState) => state.auth.user;
// export const selectEmail = (state: rootState) =>
//   state.auth.user && state.auth.user.email;

// export const selectUserId = (state: rootState) => state.auth.user.id;
