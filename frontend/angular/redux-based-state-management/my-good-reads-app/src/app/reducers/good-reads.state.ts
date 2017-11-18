import { GoodRead } from "../core/models/good-read.model";


export interface GoodReadState {
    readsCollection: GoodRead[];
    operationMsg: string;
}

export const initialState: GoodReadState =  {
    readsCollection: null,
    operationMsg: null
}