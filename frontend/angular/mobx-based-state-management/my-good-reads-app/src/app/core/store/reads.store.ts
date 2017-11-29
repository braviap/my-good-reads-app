import { Injectable } from "@angular/core";
import { observable, computed, action, autorun, toJS } from 'mobx';
import { GoodRead } from "../models/good-read.model";


@Injectable() 
export class GoodReads {
    @observable reads: GoodRead[] = [];

    @action addNewGoodRead() {

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
        return this.reads.filter(read => read.isRead).length;
    }

}