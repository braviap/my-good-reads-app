import { Action } from '@ngrx/store';
import { GoodRead } from './../core/models/good-read.model';
import { BackendService } from './../core/services/backend.service';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { GoodReadActions } from '../actions/good-reads-actions';

import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class GoodReadEffects {

    constructor(private action$: Actions, private backendService: BackendService,
    private goodReadActions: GoodReadActions) {

    }

    @Effect()
    fetchAllReads$ = this.action$
    .ofType(GoodReadActions.FETCH_ALL_READS)
    .switchMapTo(this.backendService.fetchAllReads())
    .map((reads: GoodRead[]) => this.goodReadActions.fetchAllReadsSuccess(reads));

    @Effect()
    markItemAsRead$ = this.action$
    .ofType(GoodReadActions.MARK_AS_READ)
    .switchMap((action: Action) => this.backendService.markItem(action.payload, true))
    .map((read: GoodRead) => this.goodReadActions.markAsReadSuccess(read));

    @Effect()
    markItemAsUnRead$ = this.action$
    .ofType(GoodReadActions.MARK_AS_UNREAD)
    .switchMap((action: Action) => this.backendService.markItem(action.payload, false))
    .map((read: GoodRead) => this.goodReadActions.markAsUnreadSuccess(read));

    @Effect()
    editRead$ = this.action$
    .ofType(GoodReadActions.EDIT_READ)
    .switchMap((action: Action) => this.backendService.editItem(action.payload))
    .map((read: GoodRead) => this.goodReadActions.editReadSuccess(read));
 
    @Effect()
    addRead$ = this.action$
    .ofType(GoodReadActions.ADD_NEW_READ)
    .switchMap((action: Action) => this.backendService.addNewRead(action.payload))
    .map((read: GoodRead) => this.goodReadActions.addNewReadSuccess(read));
}