import { GoodRead } from './../core/models/good-read.model';
import { BackendService } from './../core/services/backend.service';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { GoodReadActions } from '../actions/good-reads-actions';

import 'rxjs/add/operator/switchMapTo';

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
}