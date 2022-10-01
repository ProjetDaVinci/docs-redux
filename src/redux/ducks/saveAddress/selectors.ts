import {rootState} from '../../store';
import {createSelector} from '@reduxjs/toolkit';

export const selectSaveAddress = (state: rootState) => state.saveAddress;
