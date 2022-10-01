import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChangeAuth} from './types';

const initialState: ChangeAuth = {isAuth: false} as ChangeAuth;

const changeAuthSlice = createSlice({
  name: 'stateAuth',
  initialState,
  reducers: {
    changeState(state) {
      state.isAuth = !state.isAuth;
      return state;
    },
  },
});

const actions = {...changeAuthSlice.actions};
const reducer = changeAuthSlice.reducer;

export {actions, reducer};
