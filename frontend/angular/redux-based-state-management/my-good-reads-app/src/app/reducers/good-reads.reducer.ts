import { GoodReadActions } from './../actions/good-reads-actions';
import { GoodReadState, initialState } from './good-reads.state';
import { Action } from '@ngrx/store';
import * as _ from 'lodash';

export const reducer = (state: GoodReadState = initialState, { type, payload }: Action) => {
    let newState: GoodReadState;
    switch (type) {
        case GoodReadActions.FETCH_ALL_READS_SUCCESS:
            newState = _.cloneDeep(state);
            newState.readsCollection = payload;
            break;
        case GoodReadActions.FETCH_ALL_READS_FAILURE:
            newState = state;
            newState.operationMsg = 'Fetching reads from backend failed';
            break;
        case GoodReadActions.ADD_NEW_READ_SUCCESS:
            newState = _.cloneDeep(state);
            newState.readsCollection.push(payload);
            break;
        case GoodReadActions.ADD_NEW_READ_SUCCESS:
            newState = _.cloneDeep(state);
            newState.readsCollection.push(payload);
            break;
        default:
            newState = state;

    }
    return state;
}