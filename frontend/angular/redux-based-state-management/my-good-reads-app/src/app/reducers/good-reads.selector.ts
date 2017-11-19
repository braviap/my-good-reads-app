import { GoodReadState } from './good-reads.state';
import { AppState } from './../app.state';

import { createSelector } from 'reselect';

// const getGoodReadState = (state: AppState) => state.goodReads
const getGoodReadState = function (state: AppState) {
    return state.goodReads;
}


const getAllReads = (state: GoodReadState) => state.readsCollection
const getReadCounter = (state: GoodReadState) => state.readsCollection.length


// Public API for selectors

export const selectAllReads = createSelector(getGoodReadState, getAllReads);
export const selectReadCounter = createSelector(getGoodReadState, getReadCounter);