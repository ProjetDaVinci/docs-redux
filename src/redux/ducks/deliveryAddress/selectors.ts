import {createSelector} from '@reduxjs/toolkit';
import {rootState} from '../../store';

export const selectAddressDelivery = (state: rootState) =>
  state.deliveryAddress;
