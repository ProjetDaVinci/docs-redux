import {rootState} from '../../store';

export const selectFiltredProducts = (state: rootState) =>
  state.filtredProducts;
