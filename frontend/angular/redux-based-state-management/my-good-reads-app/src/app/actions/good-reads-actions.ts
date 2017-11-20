import { Action } from '@ngrx/store';
import { GoodRead } from '../core/models/good-read.model';

export class GoodReadActions {
    static FETCH_ALL_READS = 'FETCH_ALL_READS';
    static FETCH_ALL_READS_SUCCESS = 'FETCH_ALL_READS_SUCCESS';
    static FETCH_ALL_READS_FAILURE = 'FETCH_ALL_READS_FAILURE';

    static MARK_AS_READ = 'MARK_AS_READ';
    static MARK_AS_READ_SUCCESS = 'MARK_AS_READ_SUCCESS';
    static MARK_AS_READ_FAILURE = 'MARK_AS_READ_FAILURE';

    static MARK_AS_UNREAD = 'MARK_AS_UNREAD';
    static MARK_AS_UNREAD_SUCCESS = 'MARK_AS_UNREAD_SUCCESS';
    static MARK_AS_UNREAD_FAILURE = 'MARK_AS_UNREAD_FAILURE';

    static ADD_NEW_READ = 'ADD_NEW_READ';
    static ADD_NEW_READ_SUCCESS = 'ADD_NEW_READ_SUCCESS';
    static ADD_NEW_READ_FAILURE = 'ADD_NEW_READ_FAILURE';

    static EDIT_READ = 'EDIT_READ';
    static EDIT_READ_SUCCESS = 'EDIT_READ_SUCCESS';
    static EDIT_READ_FAILURE = 'EDIT_READ_FAILURE';

    static DELETE_READ = 'DELETE_READ';
    static DELETE_READ_SUCCESS = 'DELETE_READ_SUCCESS';
    static DELETE_READ_FAILURE = 'DELETE_READ_FAILURE';

    static LOAD_READ = 'LOAD_READ';
    static LOAD_NEW_READ = 'LOAD_NEW_READ';

    fetchAllReads(): Action {
        return {
            type: GoodReadActions.FETCH_ALL_READS
        }
    }

    fetchAllReadsSuccess(data: GoodRead[]): Action {
        return {
            type: GoodReadActions.FETCH_ALL_READS_SUCCESS,
            payload: data
        }
    }

    fetchAllReadsFailure(data: any): Action {
        return {
            type: GoodReadActions.FETCH_ALL_READS_FAILURE,
            payload: data
        }
    }

    loadRead(data: GoodRead): Action {
        return {
            type: GoodReadActions.LOAD_READ,
            payload: data
        }
    }

    loadNewRead(): Action {
        return {
            type: GoodReadActions.LOAD_NEW_READ,
        }
    }

    markAsRead(id: number): Action {
        return {
            type: GoodReadActions.MARK_AS_READ,
            payload: id
        }
    }

    markAsReadSuccess(data: GoodRead): Action {
        return {
            type: GoodReadActions.MARK_AS_READ_SUCCESS,
            payload: data
        }
    }

    markAsReadFailure(data: any): Action {
        return {
            type: GoodReadActions.MARK_AS_READ_FAILURE,
            payload: data
        }
    }

    markAsUnread(id: number): Action {
        return {
            type: GoodReadActions.MARK_AS_UNREAD,
            payload: id
        }
    }

    markAsUnreadSuccess(data: GoodRead): Action {
        return {
            type: GoodReadActions.MARK_AS_UNREAD_SUCCESS,
            payload: data
        }
    }

    markAsUnreadFailure(data: any): Action {
        return {
            type: GoodReadActions.MARK_AS_UNREAD_FAILURE,
            payload: data
        }
    }

    addNewRead(data: GoodRead): Action {
        return {
            type: GoodReadActions.ADD_NEW_READ,
            payload: data
        }
    }

    addNewReadSuccess(data: GoodRead): Action {
        return {
            type: GoodReadActions.ADD_NEW_READ_SUCCESS,
            payload: data
        }
    }

    addNewReadFailure(data: any): Action {
        return {
            type: GoodReadActions.ADD_NEW_READ_FAILURE,
            payload: data
        }
    }

    editRead(data: GoodRead): Action {
        return {
            type: GoodReadActions.EDIT_READ,
            payload: data
        }
    }

    editReadSuccess(data: GoodRead): Action {
        return {
            type: GoodReadActions.EDIT_READ_SUCCESS,
            payload: data
        }
    }

    editReadFailure(data: any): Action {
        return {
            type: GoodReadActions.EDIT_READ_FAILURE,
            payload: data
        }
    }
}