import { reducer as goodReadReducer } from './reducers/good-reads.reducer';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { AppState } from './app.state';

// If you have mulitple reducers in you app, use combineReducer lib to combine
// all of them and produce a single reducer
const reducers = {
    goodReads: goodReadReducer
}

const prdReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return prdReducer(state, action);
}