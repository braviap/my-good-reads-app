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

  addNewRead(read: GoodRead) {
    const url = `${this.baseAPIRURL}/create`
    return this.http.post<GoodRead>(url, read)
    .do(rsp => this.reads.push(rsp));

  }

  markAsRead(read: GoodRead) {
    const url = `${this.baseAPIRURL}/update`;
    // Taking a copy here as updating in the original object
    // would lead to inconsistencies in behavior in case of any error response from the server
    // 
    const readCopy = Object.assign({}, read);
    readCopy.isRead = true;
    return this.http.put<GoodRead>(url, readCopy)
    .do(rsp => {
      read.isRead = true;
    })
  }

  get allReadsCount(): number {
    return this.reads.filter(read => read.isRead).length;
  }

}
