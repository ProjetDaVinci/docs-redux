import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthData, getTokenResponse} from './types';
import {getToken} from './thunks';

const initialState: AuthData = {} as AuthData;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * @desc
     * ytnjgbcfybz
     * @lineNumber
     * 11
     * @param {string} state
     */
    signOut(state) {
      state = initialState;
      return state;
    },
    /**
     * @desc
     * ytnjgbcfybz
     *
     * @lineNumber
     * 11
     * @param {string} state
     */
    signIn(state, {payload}: PayloadAction<{city: string}>) {
      return state;
    },
    /**
     * @desc
     * ytnjgbcfybz
     *
     * @lineNumber
     * 11
     * @param {string} state
     */
    signEmail(state, {payload}: PayloadAction<{email: string}>) {
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getToken.fulfilled,
      (state, {payload}: PayloadAction<getTokenResponse>) => {
        if (payload) {
          state = payload.message;
          return state;
        }
        return state;
      },
    );
  },
});

const actions = {...authSlice.actions};
const reducer = authSlice.reducer;

export {actions, reducer};
