import {createSelector} from '@reduxjs/toolkit';
import {rootState} from '../../store';

export const selectCity = (state: rootState) => state.city.cities;

export const selectState = (state: rootState) => state.city;

export const selectedId = (state: rootState) => state.city.selectedId;

export const selectedCurrentCity = (state: rootState) => state.city.current;

export const selectCountCard = () =>
  createSelector(selectState, state => {
    const findItem = state.cities.find(el => el.id === state.selectedId);
    if (findItem) {
      return findItem.name;
    }
  });
