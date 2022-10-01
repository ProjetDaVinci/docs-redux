import {rootState} from '../../store';

export const selectCategories = (state: rootState) =>
  state.categories.categories;
