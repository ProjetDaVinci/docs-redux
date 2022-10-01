import {createSelector} from '@reduxjs/toolkit';
import {rootState} from '../../store';

export const selectProducts = (state: rootState) => state.products.products;

export const selectCategory = (state: rootState) => state.categories.categories;

export const isPending = (state: rootState) => state.products.isPending;

export const category = () =>
  createSelector(selectCategory, state => {
    return state;
  });

export const products = () =>
  createSelector(selectProducts, state => {
    return state;
  });

// export const renredFiltredCategoty = () =>
//   createSelector(selectCategory, state => {
//     state.map(item => {
//         const mass = products.filter(value => value.categoryId === item.ID);
//         const obj = {title: item.NAME, data: mass};
//         massivchik.push(obj);
//     const findItem = state.cities.find(el => el.id === state.selectedId);
//     if (findItem) {
//       return findItem;
//     }
//   });
