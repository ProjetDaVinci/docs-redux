import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {changeCategories, selectedCategories} from './types';

const initialState: selectedCategories = {
  animated: true,
  itemIndex: 1,
  sectionIndex: 1,
  filterName: 'Десерты',
} as selectedCategories;

const changeCategorieSlice = createSlice({
  name: 'selectedCategories',
  initialState,
  reducers: {
    changeCategories(state, {payload}: PayloadAction<changeCategories>) {
      if (payload.filterName !== '') {
        const obj = {
          animated: true,
          itemIndex: 1,
          sectionIndex: payload.sectionIndex,
          filterName: payload.filterName,
        };
        state = obj;
        return state;
      }

      return state;
    },

    changeName(state, {payload}: PayloadAction<changeCategories>) {
      if (payload.filterName !== '') {
        const obj = {
          animated: false,
          itemIndex: 1,
          sectionIndex: payload.sectionIndex,
          filterName: payload.filterName,
        };
        state = obj;
        return state;
      }

      return state;
    },
  },
});

const actions = {...changeCategorieSlice.actions};
const reducer = changeCategorieSlice.reducer;

export {actions, reducer};
