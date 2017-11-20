import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { GoodRead } from '../models/good-read.model';

@Injectable()
export class BackendService {
  baseAPIRURL = 'http://localhost:3000/api';

  constructor(private http: Http) {
  }

  fetchAllReads() {
    const url = `${this.baseAPIRURL}/index`;
    return this.http.get(url)
    .map(res => res.json());
  }

  addNewRead(read: GoodRead) {
    const url = `${this.baseAPIRURL}/create`
    return this.http.post(url, read)
    .map(res => res.json());
  }

  markItem(id: number, isRead: boolean) {
    const url = `${this.baseAPIRURL}/update/${id}`;
    return this.http.patch(url, {
      isRead
    })
    .map(res => res.json());
  }

  deleteItem(id: number) {
    const url = `${this.baseAPIRURL}/delete/${id}`;
    return this.http.delete(url);
  }

  editItem(read: GoodRead) {
    const url = `${this.baseAPIRURL}/update`;
    return this.http.put(url, read)
    .map(res => res.json());
  }

}
