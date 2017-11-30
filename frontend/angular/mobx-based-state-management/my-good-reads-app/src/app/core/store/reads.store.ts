import { Injectable } from "@angular/core";
import { observable, computed, action, autorun, toJS } from 'mobx';
import { GoodRead } from "../models/good-read.model";
import { BackendService } from "../services/backend.service";


@Injectable()
export class GoodReadStore {
    constructor(private backendService: BackendService) {

    }
    @observable reads: GoodRead[] = [];

    @action loadAllReads() {
        this.backendService.fetchAllReads()
            .subscribe(reads => this.reads = reads);
    }

    @action addNewGoodRead() {
        // this
    }

    @action deleteRead() {

    }

    @action markAsRead() {

    }

    @action markAsUnRead() {

    }

    @action updateRead() {

    }

    @computed get readsCounter(): number {
        console.log(`Reading counter @ ${Date.now()}`);
        return this.reads.filter(read => read.isRead).length;
    }

}