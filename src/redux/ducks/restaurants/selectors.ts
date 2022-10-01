import {rootState} from '../../store';
import {createSelector} from '@reduxjs/toolkit';

export const selectRestaurants = (state: rootState) => state.restaurants;

export const selectSearchText = (state: rootState) =>
  state?.restaurants.searchText;

export const SelectFilteredOrders = (input: string | undefined) =>
  createSelector(selectRestaurants, state => {
    if (input !== undefined && input !== '') {
      return state?.message?.filter(item =>
        item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
      );
    } else {
      return state.message;
    }
  });
