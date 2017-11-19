import { GoodRead } from './core/models/good-read.model';
import { GoodReadState } from './reducers/good-reads.state';

// export interface AppState {
//     goodReads: GoodReadState
// }

export interface AppState {
    readsCollection: GoodRead[];
    operationMsg: string;
}