import { Injectable } from "@angular/core";
import { observable, computed, action } from 'mobx';
import { GoodRead } from "../models/good-read.model";
import { BackendService } from "../services/backend.service";

enum networkRequestState {
    Pending,
    Success,
    Failure
};

@Injectable()
export class GoodReadStore {
    @observable reads: GoodRead[] = [];
    @observable actionStatus: networkRequestState;
    constructor(private backendService: BackendService) {
    }

    @action loadAllReads() {
        this.backendService.fetchAllReads()
            .subscribe(reads => this.reads = reads);
    }

    @action addNewGoodRead(read: GoodRead) {
        this.actionStatus = networkRequestState.Pending;
        this.backendService.addNewRead(read)
            .subscribe(readRsp => {
                this.reads = [...this.reads, readRsp];
                this.actionStatus = networkRequestState.Success;
            }, (err) => {
                console.log(err);
                this.actionStatus = networkRequestState.Failure;
            });
    }

    @action deleteRead(id: number) {
        this.actionStatus = networkRequestState.Pending;
        this.backendService.deleteItem(id)
            .subscribe(() => {
                const findIndexToDelete = this.reads.findIndex(read => read.id === id);
                this.reads.splice(findIndexToDelete, 1);
                this.actionStatus = networkRequestState.Success;
            });
    }

    @action toggleItemRead(id: number, isRead: boolean) {
        this.backendService.markItem(id, isRead)
            .subscribe(() => {
                const itemToBeUpdated = this.reads.find(read => read.id === id);
                itemToBeUpdated.isRead = isRead;
            });
    }

    @action markAsUnRead(id: number) {
        this.backendService.markItem(id, false)
            .subscribe(() => {
                const itemToBeUpdated = this.reads.find(read => read.id === id);
                itemToBeUpdated.isRead = false;
            });
    }

    @action updateRead(read: GoodRead) {
        this.backendService.editItem(read)
        .subscribe((updatedRead: GoodRead) => {
            const itemIndexUpdated = this.reads.findIndex(read => read.id === updatedRead.id);
            this.reads[itemIndexUpdated] = updatedRead;
        });
    }

    @computed get readsCounter(): number {
        console.log(`Reading counter @ ${Date.now()}`);
        return this.reads.filter(read => read.isRead).length;
    }

    getItemWithId(id: number) {
        return this.reads.find(read => read.id === id);
    }

}