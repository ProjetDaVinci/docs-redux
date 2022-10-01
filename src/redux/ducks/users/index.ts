import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {getUser} from './thunks';
interface UserData {
  ID: number;
  LOGIN: number;
  ACTIVE: string;
  EMAIL: string;
  NAME: string;
  PERSONAL_BIRTHDAY: string;
  CITY: string;
  STREET: null;
  HOUSE: null;
  ENTRANCE: null;
  FLOOR: null;
  FLAT: null;
  BONUS_AMOUNT: number;
  MAX_BONUS_PAYMENT: number;
  BONUS_ACCUM_PERCENT: number;
  BONUS_LEVEL: number;
  BONUS_NEXT_LEVEL_ACCUM: number;
  BONUS_NEXT_LEVEL_BOUND: number;
  BONUS_NEXT_LEVEL_PERCENT: number;
  FAVORITES: any[];
}

const initialState: UserData = {} as UserData;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param param1
     * @returns jopa
     */
    changeUser(state, { payload }: PayloadAction<UserData>) {
      if (payload) {
        state = payload;
        return state;
      }
      return state;
    },
    signOut(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(
    //   getUser.fulfilled,
    //   (state, {payload}: PayloadAction<getUserResponse>) => {
    //     if (payload) {
    //       state = payload.message;
    //       return state;
    //     }
    //     return state;
    //   },
    // );
  },
});

const actions = { ...usersSlice.actions };
const reducer = usersSlice.reducer;

export { actions, reducer };
