import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/do';
import { GoodRead } from '../models/good-read.model';

@Injectable()
export class BackendService {
  baseAPIRURL = 'http://localhost:3000/api';
  reads: GoodRead[];
  subs: Subscription;
  constructor(private http: HttpClient) {
    this.reads = [];
  }

  fetchAllReads() {
    const url = `${this.baseAPIRURL}/index`;
    this.subs = this.http.get<GoodRead[]>(url)
      .subscribe(data => this.reads = data);
  }

  get allReads(): GoodRead[] {
    return this.reads;
  }

  getReadItem(id: number): GoodRead {
    return this.reads.find(read => read.id === id);
  }

  addNewRead(read: GoodRead) {
    const url = `${this.baseAPIRURL}/create`
    return this.http.post<GoodRead>(url, read)
      .do(rsp => this.reads.push(rsp));

  }

  markItem(id: number, isRead: boolean) {
    const url = `${this.baseAPIRURL}/update/${id}`;
    return this.http.patch<GoodRead>(url, {
      isRead
    })
      .do(rsp => {
        const itemToBeUpdated = this.getReadItem(id);
        itemToBeUpdated.isRead = isRead;
      })
  }

  editItem(read: GoodRead) {
    const url = `${this.baseAPIRURL}/update`;
    // Taking a copy here as updating in the original object
    // would lead to inconsistencies in behavior in case of any error response from the server
    // 
    const readCopy = Object.assign({}, read);
    return this.http.put<GoodRead>(url, readCopy)
      .do(rsp => {
        // Replace the outdated item in the readlist with the updated one
        const indexToReplace = this.reads.findIndex(item => item.id === read.id);
        this.reads[indexToReplace] = rsp;
      })
  }

  get allReadsCount(): number {
    console.log(`Reading counter at ${Date.now()}`);
    return this.reads.filter(read => read.isRead).length;
  }

}
